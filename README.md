# TKJ B Learning Academy

Website belajar responsif untuk kelas 10 TKJ B, berdasarkan jadwal pada poster.

## Isi
- Login dan registrasi melalui Supabase Auth
- Dashboard
- Jadwal Senin–Minggu
- Kelas dan materi pengantar
- Kuis dasar
- Catatan lokal di browser
- Pelacakan progres melalui database Supabase

## Mulai
Baca `LANGKAH_PEMULA.md` untuk panduan lengkap, termasuk konfigurasi Supabase dan penerbitan melalui GitHub Pages.

## Teknologi
HTML, CSS, JavaScript ES modules, Supabase JS v2.

## Catatan keamanan
Gunakan hanya Supabase anon/public key pada `config.js`. Jangan pernah memasukkan service_role key ke kode browser. Aktifkan RLS dan jalankan `supabase-schema.sql`.
