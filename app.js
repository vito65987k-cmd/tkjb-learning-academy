import { CURRICULUM } from "./kurikulum.js";
import { COURSES } from "./materi.js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./config.js";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
function toast(msg) {
  const d = document.createElement("div");
  d.textContent = msg;
  d.style.cssText = "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#7f1d1d;color:#fff;padding:10px 16px;border-radius:12px;z-index:99;max-width:90%";
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 4000);
}

// ---------- Pemulihan password: baca alamat SEBELUM klien Supabase dibuat ----------
const REDIRECT_URL = "https://vito65987k-cmd.github.io/tkjb-learning-academy/";
const hashParams = new URLSearchParams(location.hash.replace(/^#/, ""));
let recovery = hashParams.get("type") === "recovery";
const linkError = !!hashParams.get("error");
let forgotLink = null;
let recOverlay = null;
let recUserId = null;
// ---------- Supabase (atau mode demo) ----------
const demo = !SUPABASE_URL || !SUPABASE_ANON_KEY || SUPABASE_URL.includes("ISI_");
let sb = null;
if (!demo) {
  try {
    const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2.45.4");
    sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (e) { console.error("Supabase gagal dimuat", e); }
}
const useDb = !!sb;
console.log("Supabase aktif:", useDb);

// ---------- Data materi (edit sesuai kebutuhan) ----------
const SCHEDULE = [
["Senin", "Dasar Jaringan Komputer • 40 menit"],
  ["Selasa", "Bahasa Inggris Pemula • 50 menit"],
  ["Rabu", "Cisco Networking Academy • 40 menit"],
  ["Kamis", "Bahasa Jepang Pemula • 50 menit"],
  ["Jumat", "Python Pemula • 40 menit"],
  ["Sabtu", "Linux / Termux • 40 menit"],
  ["Minggu", "Cybersecurity Pemula • 40 menit (hari fleksibel)"],];
const OLD_COURSES = [
  { id: "net", title: "Jaringan Dasar", desc: "Konsep dasar jaringan komputer.", lessons: ["Apa itu jaringan komputer", "Model OSI & TCP/IP", "Alamat IP & subnetting dasar"] },
  { id: "code", title: "Dasar Coding", desc: "Logika pemrograman untuk pemula.", lessons: ["Variabel & tipe data", "Percabangan & perulangan", "Fungsi"] },
  { id: "linux", title: "Linux", desc: "Mengenal sistem operasi Linux.", lessons: ["Struktur direktori", "Perintah dasar terminal", "Hak akses file"] },
  { id: "sec", title: "Cybersecurity", desc: "Dasar keamanan digital.", lessons: ["Password & autentikasi", "Jenis serangan umum", "Kebiasaan aman online"] },
];
const QUIZ = [
  { q: "Singkatan TKJ adalah…", o: ["Teknik Komputer dan Jaringan", "Teknologi Kabel Jarak jauh", "Teknik Kerja Jaringan"], a: 0 },
  { q: "Perintah Linux untuk melihat isi direktori:", o: ["cd", "ls", "rm"], a: 1 },
  { q: "Protokol untuk memberi alamat IP otomatis:", o: ["DNS", "HTTP", "DHCP"], a: 2 },
  { q: "Password yang paling aman:", o: ["12345678", "namaku2010", "Kombinasi panjang, huruf, angka & simbol"], a: 2 },
  { q: "Jumlah layer pada model OSI:", o: ["4", "7", "5"], a: 1 },
];
const allLessons = COURSES.flatMap((c) => c.lessons.map((_, i) => `${c.id}:${i}`));

// ---------- State ----------
let user = null;
let progress = {};
let notes = [];
let page = "dashboard";
let mode = "login";
let quizResult = null;

// ---------- Style tambahan ----------
const st = document.createElement("style");
st.textContent = `
.x-grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin-bottom:16px}
.x-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:16px}
.x-card h3{margin:0 0 6px}.x-big{font-size:2rem;font-weight:800}
.x-bar{height:8px;border-radius:99px;background:rgba(255,255,255,.12);overflow:hidden;margin-top:8px}
.x-bar i{display:block;height:100%;background:#38bdf8;border-radius:99px}
.x-row{display:flex;justify-content:space-between;gap:10px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08)}
.x-check{display:flex;gap:10px;align-items:center;padding:8px 0;cursor:pointer}
.x-check input,.x-opt input{width:18px;height:18px;flex:none}
.x-opt{display:flex;gap:10px;align-items:center;padding:6px 0;cursor:pointer}
.x-btn{background:#38bdf8;color:#071326;border:0;border-radius:12px;padding:10px 16px;font-weight:700;cursor:pointer}
.x-ghost{background:transparent;color:inherit;border:1px solid rgba(255,255,255,.25)}
.x-card textarea{width:100%;min-height:90px;border-radius:12px;padding:10px;box-sizing:border-box;font:inherit}
.x-ok{color:#4ade80}.x-bad{color:#f87171}
`;
document.head.appendChild(st);

// ---------- Progres (Supabase / lokal) ----------
const pKey = () => `tkjb_progress_${user.id}`;
async function loadProgress() {
  progress = {};
  if (useDb) {
    const { data, error } = await sb.from("progress").select("item_key,value");
    if (error) { console.error(error); toast("Progres gagal dimuat: " + error.message); }
    (data || []).forEach((r) => (progress[r.item_key] = r.value));
  } else progress = store.get(pKey(), {});
}
async function saveProgress(key, value) {
  progress[key] = value;
  if (useDb) {
    const { error } = await sb.from("progress").upsert({ user_id: user.id, item_key: key, value, updated_at: new Date().toISOString() });
    if (error) { console.error(error); toast("Progres gagal disimpan: " + error.message); }
  } else store.set(pKey(), progress);
}
const doneCount = () => allLessons.filter((k) => progress[`lesson:${k}`]).length;
const pct = (n, t) => (t ? Math.round((n / t) * 100) : 0);

// ---------- Catatan (Supabase / lokal) ----------
const notesKey = () => `tkjb_notes_${user.id}`;
async function loadNotes() {
  notes = [];
  if (useDb) {
    const old = store.get(notesKey(), []).filter((n) => n.text);
    if (old.length) {
      const { error: e1 } = await sb.from("notes").insert(old.map((n) => ({ content: n.text })));
      if (!e1) localStorage.removeItem(notesKey());
    }
    const { data, error } = await sb.from("notes").select("id,content,created_at").order("created_at", { ascending: false });
    if (error) { console.error(error); toast("Catatan gagal dimuat: " + error.message); return; }
    notes = data || [];
  } else notes = store.get(notesKey(), []);
}
async function addNote(content) {
  if (useDb) {
    const { error } = await sb.from("notes").insert({ content });
    if (error) { console.error(error); return toast("Catatan gagal disimpan: " + error.message); }
  } else {
    store.set(notesKey(), [{ id: Date.now(), content, created_at: new Date().toISOString() }, ...notes]);
  }
  await loadNotes();
  go("notes");
}
async function deleteNote(id) {
  if (useDb) {
    const { error } = await sb.from("notes").delete().eq("id", id);
    if (error) { console.error(error); return toast("Catatan gagal dihapus: " + error.message); }
  } else store.set(notesKey(), notes.filter((n) => String(n.id) !== String(id)));
  await loadNotes();
  go("notes");
}

// ---------- Auth ----------
function setMsg(t, ok = false) {
  const m = $("#authMessage");
  m.textContent = t;
  m.style.color = ok ? "#4ade80" : "#f87171";
}
function setMode(m) {
  mode = m;
  const reg = m === "register";
  $("#loginTab").classList.toggle("active", !reg);
  $("#registerTab").classList.toggle("active", reg);
  $("#nameWrap").classList.toggle("hidden", !reg);
  $("#authTitle").textContent = reg ? "Buat akun baru" : "Selamat datang kembali!";
  $("#authSubtitle").textContent = reg ? "Daftar untuk mulai belajar." : "Masuk untuk melanjutkan perjalanan belajarmu.";
  $("#authSubmit").innerHTML = reg ? "Daftar sekarang <span>→</span>" : "Masuk ke dashboard <span>→</span>";
  $("#password").autocomplete = reg ? "new-password" : "current-password";
 forgotLink?.classList.toggle("hidden", reg);
  setMsg("");
}
async function handleAuth(e) {
  e.preventDefault();
  const email = $("#email").value.trim();
  const password = $("#password").value;
  const name = $("#fullName").value.trim();
  const btn = $("#authSubmit");
  btn.disabled = true;
  setMsg("Memproses…", true);
  try {
    if (useDb) {
      if (mode === "register") {
        const { data, error } = await sb.auth.signUp({ email, password, options: { data: { full_name: name } } });
        if (error) throw error;
        if (!data.session) { setMsg("Akun dibuat. Cek email untuk konfirmasi, lalu masuk.", true); setMode("login"); return; }
        await enter(data.user);
      } else {
        const { data, error } = await sb.auth.signInWithPassword({ email, password });
        if (error) throw error;
        await enter(data.user);
      }
    } else {
      const users = store.get("tkjb_demo_users", {});
      if (mode === "register") {
        if (users[email]) throw new Error("Email sudah terdaftar.");
        users[email] = { password, name: name || email.split("@")[0] };
        store.set("tkjb_demo_users", users);
      } else if (!users[email] || users[email].password !== password) throw new Error("Email atau password salah.");
      store.set("tkjb_demo_session", email);
      await enter({ id: email, email, user_metadata: { full_name: users[email].name } });
    }
  } catch (err) {
    setMsg(err.message || "Terjadi kesalahan.");
  } finally { btn.disabled = false; }
}
async function enter(u) {
  const nm = u.user_metadata?.full_name || u.email.split("@")[0];
  user = { id: u.id, email: u.email, name: nm };
  await loadProgress();
  await loadNotes();
  $("#authView").classList.add("hidden");
  $("#appView").classList.remove("hidden");
  $("#userName").textContent = nm;
  $("#avatar").textContent = nm[0].toUpperCase();
  go("dashboard");
}
async function logout() {
  if (useDb) await sb.auth.signOut(); else localStorage.removeItem("tkjb_demo_session");
  user = null;
  notes = [];
  progress = {};
  $("#appView").classList.add("hidden");
  $("#authView").classList.remove("hidden");
  $("#authForm").reset();
  setMode("login");
}

// ---------- Halaman ----------
const NAMES = { dashboard: "Dashboard", schedule: "Jadwal belajar", courses: "Kelas & materi", practice: "Latihan & kuis", notes: "Catatan saya", progress: "Progres belajar" };

const views = {
  dashboard() {
    const d = doneCount(), t = allLessons.length;
    const today = SCHEDULE[(new Date().getDay() + 6) % 7];
    const best = progress["quiz:best"];
    return `
      <div class="x-card" style="margin-bottom:14px"><h3>Halo, ${esc(user.name)}! 👋</h3>
        <p>Hari ini (${today[0]}): <b>${today[1]}</b></p></div>
      <div class="x-grid">
        <div class="x-card"><small>Materi selesai</small><div class="x-big">${d}/${t}</div><div class="x-bar"><i style="width:${pct(d, t)}%"></i></div></div>
        <div class="x-card"><small>Skor kuis terbaik</small><div class="x-big">${best ?? "–"}${best != null ? "%" : ""}</div></div>
        <div class="x-card"><small>Catatan</small><div class="x-big">${notes.length}</div></div>
      </div>
      <button class="x-btn" data-go="courses">Lanjut belajar →</button>
      ${useDb ? "" : `<p class="small muted" style="margin-top:14px">Mode demo: data tersimpan di browser ini. Isi config.js untuk memakai Supabase.</p>`}`;
  },
  schedule() {
    const idx = (new Date().getDay() + 6) % 7;
    return `<div class="x-card">${SCHEDULE.map((s, i) => `<div class="x-row"><b>${s[0]}${i === idx ? " • hari ini" : ""}</b><span>${s[1]}</span></div>`).join("")}</div>`;
  },
  courses() {
    return `<div class="x-grid">${COURSES.map((c) => {
      const n = c.lessons.filter((_, i) => progress[`lesson:${c.id}:${i}`]).length;
      return `<div class="x-card"><h3>${c.title}</h3><p class="muted">${c.desc}</p>
        ${c.lessons.map((l, i) => `<label class="x-check"><input type="checkbox" data-lesson="${c.id}:${i}" ${progress[`lesson:${c.id}:${i}`] ? "checked" : ""}> <span>${l}</span></label>`).join("")}
        <div class="x-bar"><i style="width:${pct(n, c.lessons.length)}%"></i></div></div>`;
    }).join("")}</div>`;
  },
  practice() {
    const res = quizResult;
    return `<div class="x-card"><h3>Kuis dasar TKJ</h3>
      ${QUIZ.map((q, i) => `<div style="margin:14px 0"><b>${i + 1}. ${q.q}</b>
        ${q.o.map((o, j) => `<label class="x-opt"><input type="radio" name="q${i}" value="${j}"> <span>${o}</span></label>`).join("")}
        ${res ? `<small class="${res.ok[i] ? "x-ok" : "x-bad"}">${res.ok[i] ? "Benar ✔" : "Salah. Jawaban: " + q.o[q.a]}</small>` : ""}</div>`).join("")}
      <button class="x-btn" id="checkQuiz">Periksa jawaban</button>
      ${res ? `<p><b>Skor: ${res.score}%</b></p>` : ""}</div>`;
  },
  notes() {
    return `<div class="x-card"><textarea id="noteText" placeholder="Tulis catatan…"></textarea>
      <p><button class="x-btn" id="addNote">Simpan catatan</button></p></div>
      ${notes.map((n) => `<div class="x-card" style="margin-top:10px"><small class="muted">${esc(new Date(n.created_at).toLocaleString("id-ID"))}</small>
        <p style="white-space:pre-wrap">${esc(n.content)}</p><button class="x-btn x-ghost" data-del="${esc(n.id)}">Hapus</button></div>`).join("")}`;
  },
  progress() {
    return `<div class="x-grid">${COURSES.map((c) => {
      const n = c.lessons.filter((_, i) => progress[`lesson:${c.id}:${i}`]).length;
      return `<div class="x-card"><h3>${c.title}</h3><b>${pct(n, c.lessons.length)}%</b> (${n}/${c.lessons.length})<div class="x-bar"><i style="width:${pct(n, c.lessons.length)}%"></i></div></div>`;
    }).join("")}</div>
    <div class="x-card"><h3>Total</h3><b>${pct(doneCount(), allLessons.length)}%</b> materi selesai • Kuis terbaik: ${progress["quiz:best"] ?? "belum ada"}${progress["quiz:best"] != null ? "%" : ""}</div>`;
  },
};

function go(p) {
  page = p;
  $("#pageHeading").textContent = NAMES[p];
  $$(".nav-item[data-page]").forEach((b) => b.classList.toggle("active", b.dataset.page === p));
  $("#pageContent").innerHTML = views[p]();
  $("#sidebar").classList.remove("open");
  window.scrollTo(0, 0);
  if (p === "schedule") $("#pageContent").insertAdjacentHTML("beforeend", scheduleGuide());
}

// ---------- Event ----------
$("#loginTab").addEventListener("click", (e) => { e.preventDefault(); setMode("login"); });
$("#registerTab").addEventListener("click", (e) => { e.preventDefault(); setMode("register"); });
$("#authForm").addEventListener("submit", handleAuth);
$("#logoutBtn").addEventListener("click", logout);
$("#menuToggle").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
$$(".nav-item[data-page]").forEach((b) => b.addEventListener("click", () => go(b.dataset.page)));

$("#pageContent").addEventListener("click", async (e) => {
  const t = e.target;
  if (t.dataset.go) return go(t.dataset.go);
  if (t.id === "checkQuiz") {
    const ok = QUIZ.map((q, i) => { const r = $(`input[name="q${i}"]:checked`); return r && +r.value === q.a; });
    const score = pct(ok.filter(Boolean).length, QUIZ.length);
    quizResult = { ok, score };
    if (score > (progress["quiz:best"] ?? -1)) await saveProgress("quiz:best", score);
    go("practice");
  }
  if (t.id === "addNote") {
    const text = $("#noteText").value.trim();
    if (!text) return;
    t.disabled = true;
    await addNote(text);
    t.disabled = false;
  }
  if (t.dataset.del !== undefined) await deleteNote(t.dataset.del);
});
$("#pageContent").addEventListener("change", async (e) => {
  const k = e.target.dataset.lesson;
  if (k) { await saveProgress(`lesson:${k}`, e.target.checked); go("courses"); }
});

// ---------- Mulai: cek sesi yang sudah ada ----------
(async () => {
  try {
    if (useDb) {
      const { data } = await sb.auth.getSession();
      if (data.session) await enter(data.session.user);
    } else {
      const email = store.get("tkjb_demo_session", null);
      const u = email && store.get("tkjb_demo_users", {})[email];
      if (u) await enter({ id: email, email, user_metadata: { full_name: u.name } });
    }
  } catch (e) { console.error(e); }
})();

function scheduleGuide() {
  const block = (title, sub, items, total) => `
    <div class="x-card"><h3>${title}</h3><small class="muted">${sub}</small>
      ${items.map(([n, m]) => `<div style="margin-top:12px"><div class="x-row" style="border:0;padding:0"><span>${n}</span><b>${m} menit</b></div><div class="x-bar"><i style="width:${Math.round((m / total) * 100)}%"></i></div></div>`).join("")}
    </div>`;
  const umum = [["Mencatat materi", 10], ["Praktik / latihan", 15], ["Membaca materi", 5], ["Memahami ulang dan menjelaskan", 10]];
  const bahasa = [["Mencatat materi", 10], ["Menonton video", 10], ["Praktik / latihan", 15], ["Membaca materi", 5], ["Memahami ulang dan menjelaskan", 10]];
  const rules = ["Tugas sekolah tetap menjadi prioritas utama.", "Jika satu hari terlewat, lanjutkan ke hari berikutnya.", "Minggu adalah hari fleksibel untuk mengejar materi.", "Konsisten lebih penting daripada sempurna."];
  return `
    <h3 style="margin:22px 0 12px">Panduan dan aturan belajar</h3>
    <div class="x-grid">
      ${block("Waktu belajar umum", "Untuk sesi 40 menit", umum, 40)}
      ${block("Bahasa Inggris dan Jepang", "Untuk sesi 50 menit", bahasa, 50)}
    </div>
    <div class="x-card"><h3>Aturan belajar</h3>
      ${rules.map((r, i) => `<div class="x-row"><span><b>${i + 1}.</b> ${r}</span></div>`).join("")}
    </div>`;
}

let courseId = null;
let lessonIdx = null;

views.courses = function () {
  const done = (cid, i) => progress[`lesson:${cid}:${i}`];
  if (!courseId) {
    return `<div class="x-grid">${COURSES.map((c) => {
      const n = c.lessons.filter((_, i) => done(c.id, i)).length;
      return `<div class="x-card"><h3>${c.title}</h3><p class="muted">${c.desc}</p>
        <small class="muted">${c.lessons.length ? c.lessons.length + " materi • " + n + " selesai" : "Materi segera hadir"}</small>
        <div class="x-bar"><i style="width:${pct(n, c.lessons.length)}%"></i></div>
        <p><button class="x-btn" data-course="${c.id}">Buka kelas</button></p></div>`;
    }).join("")}</div>`;
  }
  const c = COURSES.find((x) => x.id === courseId);
  if (lessonIdx === null) {
    return `<p><button class="x-btn x-ghost" data-back="list">← Semua kelas</button></p>
      <div class="x-card"><h3>${c.title}</h3><p class="muted">${c.desc}</p>
        <b>Tujuan pembelajaran</b>
        ${c.goals.map((g) => `<div class="x-row"><span>• ${g}</span></div>`).join("")}</div>
      <div class="x-card" style="margin-top:14px"><h3>Daftar materi</h3>
        ${c.lessons.length ? c.lessons.map((l, i) => `<div class="x-row"><span>${i + 1}. ${l.title}${done(c.id, i) ? " ✔" : ""}</span><button class="x-btn x-ghost" data-open="${i}">Baca</button></div>`).join("") : `<p class="muted">Materi untuk kelas ini segera hadir.</p>`}</div>`;
  }
  const l = c.lessons[lessonIdx];
  const last = lessonIdx === c.lessons.length - 1;
  return `<p><button class="x-btn x-ghost" data-back="course">← ${c.title}</button></p>
    <div class="x-card"><small class="muted">Materi ${lessonIdx + 1} dari ${c.lessons.length}</small><h3>${l.title}</h3>
      ${l.body.map((p) => `<p>${p}</p>`).join("")}</div>
    <div class="x-card" style="margin-top:14px"><b>Contoh di dunia TKJ</b><p>${l.example}</p></div>
    <div class="x-card" style="margin-top:14px"><b>Praktik</b><p>${l.practice}</p></div>
    <div class="x-card" style="margin-top:14px"><b>Kesimpulan</b><p>${l.summary}</p>
      <label class="x-check"><input type="checkbox" data-lesson="${c.id}:${lessonIdx}" ${done(c.id, lessonIdx) ? "checked" : ""}> <span>Tandai selesai</span></label></div>
    <p style="margin-top:14px">${lessonIdx > 0 ? `<button class="x-btn x-ghost" data-open="${lessonIdx - 1}">← Sebelumnya</button> ` : ""}${!last ? `<button class="x-btn" data-open="${lessonIdx + 1}">Berikutnya →</button>` : ""}</p>`;
};

$("#pageContent").addEventListener("click", (e) => {
  const t = e.target;
  if (t.dataset.course) { courseId = t.dataset.course; lessonIdx = null; go("courses"); }
  else if (t.dataset.open !== undefined) { lessonIdx = +t.dataset.open; go("courses"); }
  else if (t.dataset.back === "course") { lessonIdx = null; go("courses"); }
  else if (t.dataset.back === "list") { courseId = null; lessonIdx = null; go("courses"); }
});

const flatCourses = views.courses;
const nv = { level: null, bab: null, lesson: null, mode: null, result: null };
const nvReset = () => { nv.level = null; nv.bab = null; nv.lesson = null; nv.mode = null; nv.result = null; };

views.courses = function () {
  const cur = courseId && CURRICULUM[courseId];
  if (!cur) return flatCourses();
  const course = COURSES.find((c) => c.id === courseId);
  const lvl = cur.levels.find((l) => l.id === nv.level);
  const bb = lvl && lvl.babs.find((b) => b.id === nv.bab);
  const key = (l) => `${courseId}:${l.legacy !== undefined ? l.legacy : l.id}`;
  const isDone = (l) => progress[`lesson:${key(l)}`];
  const lessonsOf = (lv) => lv.babs.flatMap((b) => b.lessons);
  const best = (k) => progress[k];
  const back = (label) => `<p><button class="x-btn x-ghost" data-n="up">← ${label}</button></p>`;

  if (!lvl) {
    return `<p><button class="x-btn x-ghost" data-back="list">← Semua kelas</button></p>
      <div class="x-card"><h3>${course.title}</h3><p class="muted">${course.desc}</p></div>
      ${cur.levels.map((lv) => {
        const all = lessonsOf(lv), n = all.filter(isDone).length;
        const ex = best(`exam:${courseId}:${lv.id}`);
        return `<div class="x-card" style="margin-top:14px"><h3>${lv.title}</h3><p class="muted">${lv.goal}</p>
          <small class="muted">${lv.babs.length} bab • ${all.length ? n + "/" + all.length + " pelajaran" : "materi segera hadir"}${ex != null ? " • ujian " + ex + "%" + (ex >= cur.passScore ? " ✔" : "") : ""}</small>
          <div class="x-bar"><i style="width:${pct(n, all.length)}%"></i></div>
          <p><button class="x-btn" data-n="lv:${lv.id}">Buka tingkat</button></p></div>`;
      }).join("")}`;
  }

  if (nv.mode) {
    const isExam = nv.mode === "exam";
    const qs = isExam ? lvl.exam : bb.quiz;
    const title = isExam ? "Ujian akhir – " + lvl.title : "Kuis bab " + bb.id + " – " + bb.title;
    const r = nv.result;
    if (!r) {
      return back("Kembali") + `<div class="x-card"><h3>${title}</h3><small class="muted">${qs.length} soal • nilai lulus ${cur.passScore}%</small>
        ${qs.map((q, i) => `<div style="margin:14px 0"><b>${i + 1}. ${q.q}</b>${q.o.map((o, j) => `<label class="x-opt"><input type="radio" name="nq${i}" value="${j}"> <span>${o}</span></label>`).join("")}</div>`).join("")}
        <button class="x-btn" data-n="submit">Periksa jawaban</button></div>`;
    }
    return back("Selesai") + `<div class="x-card"><h3>${title}</h3><div class="x-big">${r.score}%</div>
      <p class="${r.score >= cur.passScore ? "x-ok" : "x-bad"}">${r.score >= cur.passScore ? "Lulus ✔" : "Belum lulus. Pelajari lagi lalu coba ulang."}</p>
      ${qs.map((q, i) => `<div class="x-row"><span>${i + 1}. ${q.q}<br><small class="${r.ok[i] ? "x-ok" : "x-bad"}">${r.ok[i] ? "Benar ✔" : "Jawaban benar: " + q.o[q.a]}</small></span></div>`).join("")}
      <p><button class="x-btn" data-n="retry">Ulangi</button></p></div>`;
  }

  if (nv.lesson) {
    const idx = bb.lessons.findIndex((l) => l.id === nv.lesson);
    const l = bb.lessons[idx];
    return back(bb.title) + `<div class="x-card"><small class="muted">Pelajaran ${idx + 1} dari ${bb.lessons.length} • Bab ${bb.id}</small><h3>${l.title}</h3>${l.body.map((p) => `<p>${p}</p>`).join("")}</div>
      <div class="x-card" style="margin-top:14px"><b>Contoh di dunia TKJ</b><p>${l.example}</p></div>
      <div class="x-card" style="margin-top:14px"><b>Praktik</b><p>${l.practice}</p></div>
      <div class="x-card" style="margin-top:14px"><b>Kesimpulan</b><p>${l.summary}</p>
        <label class="x-check"><input type="checkbox" data-lesson="${key(l)}" ${isDone(l) ? "checked" : ""}> <span>Tandai selesai</span></label></div>
      <p style="margin-top:14px">${idx > 0 ? `<button class="x-btn x-ghost" data-n="ls:${bb.lessons[idx - 1].id}">← Sebelumnya</button> ` : ""}${idx < bb.lessons.length - 1 ? `<button class="x-btn" data-n="ls:${bb.lessons[idx + 1].id}">Berikutnya →</button>` : ""}</p>`;
  }

  if (bb) {
    const qb = best(`quiz:${courseId}:${bb.id}`);
    return back(lvl.title) + `<div class="x-card"><h3>Bab ${bb.id}: ${bb.title}</h3></div>
      <div class="x-card" style="margin-top:14px"><h3>Pelajaran</h3>
        ${bb.lessons.length ? bb.lessons.map((l, i) => `<div class="x-row"><span>${i + 1}. ${l.title}${isDone(l) ? " ✔" : ""}</span><button class="x-btn x-ghost" data-n="ls:${l.id}">Baca</button></div>`).join("") : `<p class="muted">Pelajaran untuk bab ini segera hadir.</p>`}</div>
      <div class="x-card" style="margin-top:14px"><h3>Kuis bab</h3>
        ${bb.quiz.length ? `<small class="muted">${bb.quiz.length} soal${qb != null ? " • skor terbaik " + qb + "%" : ""}</small><p><button class="x-btn" data-n="quiz:${bb.id}">Mulai kuis</button></p>` : `<p class="muted">Kuis segera hadir.</p>`}</div>`;
  }

  const ex = best(`exam:${courseId}:${lvl.id}`);
  return back("Semua tingkat") + `<div class="x-card"><h3>${lvl.title}</h3><p class="muted">${lvl.goal}</p></div>
    <div class="x-card" style="margin-top:14px"><h3>Daftar bab</h3>
      ${lvl.babs.map((b) => { const n = b.lessons.filter(isDone).length; return `<div class="x-row"><span>${b.id}. ${b.title}<br><small class="muted">${b.lessons.length ? n + "/" + b.lessons.length + " pelajaran" : "segera hadir"}</small></span><button class="x-btn x-ghost" data-n="bab:${b.id}">Buka</button></div>`; }).join("")}</div>
    <div class="x-card" style="margin-top:14px"><h3>Ujian akhir tingkat</h3>
      ${lvl.exam.length ? `<small class="muted">${lvl.exam.length} soal • lulus ${cur.passScore}%${ex != null ? " • skor terbaik " + ex + "%" : ""}</small><p><button class="x-btn" data-n="exam:${lvl.id}">Mulai ujian</button></p>` : `<p class="muted">Ujian segera hadir.</p>`}</div>`;
};

$("#pageContent").addEventListener("click", async (e) => {
  const t = e.target;
  if (t.dataset.course || t.dataset.back === "list") { nvReset(); go("courses"); return; }
  const n = t.dataset.n;
  if (!n || !courseId || !CURRICULUM[courseId]) return;
  const cur = CURRICULUM[courseId];
  const [act, id] = n.split(":");
  if (act === "lv") nv.level = id;
  else if (act === "bab") nv.bab = id;
  else if (act === "ls") nv.lesson = id;
  else if (act === "quiz") { nv.bab = id; nv.mode = "quiz"; nv.result = null; }
  else if (act === "exam") { nv.level = id; nv.bab = null; nv.mode = "exam"; nv.result = null; }
  else if (act === "retry") nv.result = null;
  else if (act === "up") {
    if (nv.mode) { nv.mode = null; nv.result = null; }
    else if (nv.lesson) nv.lesson = null;
    else if (nv.bab) nv.bab = null;
    else nv.level = null;
  } else if (act === "submit") {
    const lv = cur.levels.find((l) => l.id === nv.level);
    const b = lv.babs.find((x) => x.id === nv.bab);
    const qs = nv.mode === "exam" ? lv.exam : b.quiz;
    const ok = qs.map((q, i) => { const r = $(`input[name="nq${i}"]:checked`); return !!r && +r.value === q.a; });
    const score = pct(ok.filter(Boolean).length, qs.length);
    nv.result = { ok, score };
    const k = nv.mode === "exam" ? `exam:${courseId}:${lv.id}` : `quiz:${courseId}:${b.id}`;
    if (score > (progress[k] ?? -1)) await saveProgress(k, score);
  }
  go("courses");
});
