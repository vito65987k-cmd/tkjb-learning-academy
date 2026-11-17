# TKJ B Learning Academy — Panduan dari nol

Selamat datang! Proyek ini adalah website pembelajaran untuk jadwal pada poster kelas 10 TKJ B.

## A. Yang perlu disiapkan
1. Komputer/laptop (lebih mudah untuk pertama kali).
2. Browser Chrome atau Firefox.
3. Akun GitHub (untuk menyimpan kode dan menerbitkan website).
4. Akun Supabase gratis (untuk login dan database).
5. Koneksi internet saat konfigurasi dan penerbitan.

Website ini memakai HTML, CSS, JavaScript, dan Supabase. Tidak perlu memasang framework yang rumit.

## B. Jalankan website di komputer
Cara paling mudah:
1. Ekstrak file ZIP.
2. Buka folder `tkjb-learning-academy`.
3. Pasang Visual Studio Code jika belum ada.
4. Buka folder tersebut di VS Code.
5. Pasang ekstensi **Live Server**.
6. Klik kanan `index.html` lalu pilih **Open with Live Server**.

Catatan: halaman desain bisa dibuka, tetapi login dan database belum aktif sampai Supabase dikonfigurasi.

## C. Buat database dan sistem akun dengan Supabase
1. Buka https://supabase.com/ lalu daftar atau masuk.
2. Buat project baru, misalnya `tkjb-learning-academy`.
3. Simpan password database project di tempat aman.
4. Buka menu **SQL Editor**.
5. Pilih **New query**.
6. Buka file `supabase-schema.sql`, salin semua isinya, tempel ke SQL Editor, lalu tekan **Run**.
7. Buka **Project Settings → API** (atau bagian Data API/API Keys pada tampilan terbaru).
8. Salin **Project URL** dan **anon/public key**. Jangan gunakan `service_role` key.
9. Buka file `config.js`.
10. Ganti `ISI_SUPABASE_PROJECT_URL` dengan Project URL dan `ISI_SUPABASE_ANON_PUBLIC_KEY` dengan anon/public key.
11. Simpan file.
12. Di Supabase, buka **Authentication → URL Configuration**. Untuk uji lokal, tambahkan URL Live Server, biasanya `http://127.0.0.1:5500`, ke Redirect URLs bila diperlukan.
13. Coba daftar akun dari website. Jika verifikasi email aktif, buka email verifikasi terlebih dahulu, lalu masuk.

**Keamanan:** anon/public key memang digunakan di browser, tetapi keamanan data harus dijaga dengan Row Level Security (RLS). SQL yang disediakan membatasi progres agar setiap pengguna hanya dapat membaca dan mengubah datanya sendiri. Jangan pernah menaruh `service_role` key di `config.js`.

## D. Terbitkan website agar mendapat link
Pilihan mudah: GitHub Pages untuk website statis.
1. Buat akun di https://github.com/.
2. Buat repository baru bernama `tkjb-learning-academy`.
3. Upload `index.html`, `styles.css`, `app.js`, `config.js`, dan `supabase-schema.sql`.
4. Buka **Settings → Pages**.
5. Pada bagian Build and deployment, pilih **Deploy from a branch**.
6. Pilih branch `main` dan folder `/ (root)`, lalu Save.
7. Tunggu proses selesai. GitHub akan memberikan link seperti `https://USERNAME.github.io/tkjb-learning-academy/`.
8. Salin link tersebut dan bagikan.

Setelah mendapat link, kembali ke Supabase → Authentication → URL Configuration. Tambahkan alamat website GitHub Pages ke **Site URL** dan **Redirect URLs**. Simpan.

## E. Cara memakai website
- Dashboard: melihat ringkasan belajar.
- Jadwal belajar: melihat rencana Senin sampai Minggu.
- Kelas & materi: membuka materi per bidang.
- Latihan & kuis: menguji pemahaman dasar.
- Catatan saya: menyimpan catatan di browser perangkat.
- Progres belajar: menandai materi selesai dan memantau kemajuan.

## F. Rute belajar sampai mahir
1. Minggu 1–2: pahami dasar komputer, jaringan, istilah, dan perangkat.
2. Minggu 3–4: latihan IP address, subnet mask dasar, dan topologi sederhana.
3. Minggu 5–6: mulai Python, variabel, kondisi, perulangan, dan program kecil.
4. Minggu 7–8: Linux/terminal dan manajemen file.
5. Minggu 9–10: keamanan akun, phishing, backup, dan praktik keamanan yang legal.
6. Setelah itu: buat proyek nyata, dokumentasikan, evaluasi, dan ulangi materi yang belum dikuasai.

Jangan terburu-buru. Mahir berarti mampu menjelaskan, mempraktikkan, memecahkan masalah, dan membuat proyek sendiri.

## G. Batasan versi awal
- Login/registrasi dan progres memerlukan konfigurasi Supabase.
- Catatan pada versi awal disimpan di browser perangkat tersebut, bukan tersinkron ke akun.
- Materi dan kuis masih materi pengantar. Materi lanjutan/proyek bisa ditambahkan bertahap.
- Jangan gunakan website ini untuk menguji jaringan, akun, atau sistem tanpa izin pemiliknya.
