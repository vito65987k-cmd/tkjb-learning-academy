import { COURSES } from "./materi.js";

const oldNet = COURSES.find((c) => c.id === "net").lessons;
const L = (i, id) => ({ ...oldNet[i], id, legacy: i });
const bab = (id, title, lessons = [], quiz = []) => ({ id, title, lessons, quiz });
const lvl = (id, title, goal, titles) => ({ id, title, goal, babs: titles.map((t, i) => bab(`${id}.${i + 1}`, t)), exam: [] });

export const CURRICULUM = {
  net: {
    passScore: 70,
    levels: [
      {
        id: "1",
        title: "Tingkat 1 – Pemula",
        goal: "Mengenal jaringan, perangkat, alamat IP, dan cara menguji koneksi.",
        babs: [
          bab("1.1", "Konsep dan Perangkat Jaringan", [L(0, "1.1.1"), L(1, "1.1.2"), L(2, "1.1.3")], [
            { q: "Dua perangkat atau lebih yang saling terhubung untuk bertukar data disebut…", o: ["Jaringan komputer", "Sistem operasi", "Basis data"], a: 0 },
            { q: "Jaringan yang mencakup satu lab komputer sekolah termasuk jenis…", o: ["WAN", "LAN", "MAN"], a: 1 },
            { q: "Perangkat yang menghubungkan satu jaringan dengan jaringan lain, misalnya ke internet:", o: ["Switch", "Kabel UTP", "Router"], a: 2 },
            { q: "Perangkat yang menghubungkan banyak komputer dalam satu jaringan lokal:", o: ["Switch", "Printer", "Monitor"], a: 0 },
            { q: "Pada topologi star, semua komputer terhubung ke…", o: ["Satu kabel utama", "Satu switch di tengah", "Komputer pertama"], a: 1 },
          ]),
          bab("1.2", "Media Transmisi dan Kabel UTP"),
          bab("1.3", "Alamat IP dan Model OSI", [L(3, "1.3.1"), L(4, "1.3.2")]),
          bab("1.4", "Menguji Koneksi dan Alat Dasar"),
        ],
        exam: [
          { q: "Alamat berikut yang termasuk alamat IPv4 jaringan lokal adalah…", o: ["192.168.1.10", "300.400.1.1", "abc.def.ghi.jkl"], a: 0 },
          { q: "Jumlah lapisan pada model OSI:", o: ["5", "7", "4"], a: 1 },
          { q: "Perintah untuk menguji apakah komputer bisa menjangkau perangkat lain:", o: ["copy", "edit", "ping"], a: 2 },
          { q: "Protokol yang membagikan alamat IP secara otomatis:", o: ["HTTP", "DHCP", "FTP"], a: 1 },
          { q: "Jika kabel jaringan lepas, masalah ada di lapisan OSI…", o: ["Application", "Physical", "Session"], a: 1 },
          { q: "Media kabel yang paling umum di jaringan lokal:", o: ["Kabel listrik", "Kabel antena", "Kabel UTP"], a: 2 },
        ],
      },
      lvl("2", "Tingkat 2 – Dasar Lanjutan", "Subnetting, switching, Wi-Fi, dan layanan jaringan dasar.", ["Subnetting IPv4", "Ethernet dan Switching Dasar", "Wi-Fi dan Jaringan Nirkabel", "DNS, DHCP, dan Layanan Dasar"]),
      lvl("3", "Tingkat 3 – Menengah", "Routing, VLAN, server jaringan, dan keamanan dasar.", ["Routing dan Gateway", "VLAN dan Segmentasi", "Server Jaringan: Web, File, Proxy", "Keamanan Jaringan Dasar"]),
      lvl("4", "Tingkat 4 – Menengah Lanjutan", "IPv6, routing dinamis, monitoring, dan troubleshooting sistematis.", ["IPv6", "Routing Dinamis", "Monitoring dan Log", "Troubleshooting Sistematis"]),
      lvl("5", "Tingkat 5 – Mahir", "Merancang, mengamankan, dan mendokumentasikan jaringan sekolah atau kantor.", ["Merancang Jaringan Sekolah atau Kantor", "VPN dan Akses Jarak Jauh", "Optimasi dan Keandalan Jaringan", "Dokumentasi dan Proyek Akhir"]),
    ],
  },
};

import { B11, B12 } from "./net-1.js";
import { B13, B14 } from "./net-1b.js";
import { B21 } from "./net-2.js";
import { B22 } from "./net-2b.js";
import { B23 } from "./net-2c.js";
import { B24 } from "./net-2d.js";
import { EXAM2 } from "./net-2e.js";
import { B31 } from "./net-3.js";


(() => {
  const t1 = CURRICULUM.net.levels[0];
  const [b11, b12, b13, b14] = t1.babs;
  b11.lessons.push(...B11);
  b12.lessons = B12.lessons;
  b12.quiz = B12.quiz;
  b13.lessons.push(...B13.add);
  b13.quiz = B13.quiz;
  b14.lessons = B14.lessons;
  b14.quiz = B14.quiz;
  t1.exam.push(
    { q: "Alamat 192.168.0.5 termasuk jenis alamat…", o: ["Publik", "Privat", "Alamat MAC"], a: 1 },
    { q: "Model TCP/IP versi umum memiliki berapa lapisan?", o: ["4", "7", "9"], a: 0 },
    { q: "Perintah untuk menelusuri jalur data ke tujuan (Windows):", o: ["tracert", "format", "copy"], a: 0 },
    { q: "Pin 1 pada standar T568B berwarna…", o: ["Putih-oranye", "Hijau", "Cokelat"], a: 0 },
    { q: "1 byte sama dengan berapa bit?", o: ["4 bit", "8 bit", "16 bit"], a: 1 },
    { q: "Langkah pertama troubleshooting yang paling sederhana adalah memeriksa…", o: ["Kabel dan lampu indikator port", "Isi harddisk", "Wallpaper komputer"], a: 0 }
  );
})();

(() => {
  const t2 = CURRICULUM.net.levels[1];
  const [b21] = t2.babs;
  b21.lessons = B21.lessons;
  b21.quiz = B21.quiz;
})();

(() => {
  const b22 = CURRICULUM.net.levels[1].babs[1];
  b22.lessons = B22.lessons;
  b22.quiz = B22.quiz;
})();

(() => {
  const b23 = CURRICULUM.net.levels[1].babs[2];
  b23.lessons = B23.lessons;
  b23.quiz = B23.quiz;
})();

(() => {
  const b24 = CURRICULUM.net.levels[1].babs[3];
  b24.lessons = B24.lessons;
  b24.quiz = B24.quiz;
})();

(() => {
  CURRICULUM.net.levels[1].exam.push(...EXAM2);
})();

(() => {
  const b31 = CURRICULUM.net.levels[2].babs[0];
  b31.lessons = B31.lessons;
  b31.quiz = B31.quiz;
})();
