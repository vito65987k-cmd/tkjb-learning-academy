RENCANA KERJA PROYEK

TKJ B LEARNING ACADEMY

Versi: 1.0
Status: Draf
Project Owner: Muhamad Rafito
Repository: https://github.com/vito65987k-cmd/tkjb-learning-academy
Website: https://vito65987k-cmd.github.io/tkjb-learning-academy/

---

1. TUJUAN RENCANA KERJA

Dokumen ini menjadi panduan resmi pengembangan TKJ B Learning Academy agar pekerjaan berjalan terarah, bertahap, terukur, dan terdokumentasi.

Seluruh pekerjaan harus mengikuti "TIM_KONTRAK.md".

2. TAHAPAN PROYEK

FASE 0 — PERSIAPAN TIM DAN DOKUMENTASI

Tujuan: Menyiapkan aturan dan dokumen dasar proyek.

Pekerjaan:

1. Menyimpan "TIM_KONTRAK.md".
2. Membuat "RENCANA_KERJA_PROYEK.md".
3. Memastikan pembagian tugas tim.
4. Menetapkan format laporan pekerjaan.

Penanggung jawab: ChatGPT sebagai Project Coordinator.
Persetujuan: Muhamad Rafito.

Hasil: Dokumen dasar proyek tersedia di repository.

FASE 1 — AUDIT REPOSITORY

Tujuan: Memahami kondisi repository sebelum melakukan perubahan kode.

Pembagian pekerjaan:

- ChatGPT: Mengumpulkan struktur file dan menyusun laporan audit.
- AI Assistant via API: Menganalisis logika program, dependensi modul, dan potensi bug.
- Gemini: Melakukan review independen terhadap arsitektur dan UI/UX.
- Claude: Meninjau temuan dan menyusun pilihan implementasi tanpa langsung mengubah kode.
- Muhamad Rafito: Menyediakan bahan, memeriksa laporan, dan menyetujui hasil audit.

Hasil yang diharapkan:

- "LAPORAN_AUDIT_REPOSITORY.md"
- "ANALISIS_TEKNIS_REPOSITORY.md"
- "REVIEW_ARSITEKTUR_GEMINI.md"
- "RENCANA_IMPLEMENTASI.md"

FASE 2 — AUDIT FITUR DAN PROGRES BELAJAR

Tujuan: Memastikan fitur pembelajaran berjalan sesuai fungsinya.

Hal yang diperiksa:

1. Penandaan materi selesai.
2. Perhitungan progres belajar.
3. Nilai kuis dan ujian.
4. Navigasi materi berikutnya.
5. Dashboard pembelajaran.
6. Penyimpanan catatan.
7. Perpindahan akun dan pemisahan data.

Penanggung jawab: Tim analisis dan review.
Persetujuan: Muhamad Rafito.

Hasil: "LAPORAN_AUDIT_PROGRES.md"

FASE 3 — AUDIT KEAMANAN DAN DATABASE

Tujuan: Memeriksa keamanan akun dan penyimpanan data.

Hal yang diperiksa:

1. Supabase Auth.
2. Row Level Security (RLS).
3. Pemisahan data antar pengguna.
4. Penggunaan anon/public key.
5. Penanganan kegagalan koneksi.
6. Konsistensi data lokal dan database.

Aturan: Jangan memasukkan service_role key atau secret key ke frontend.

Hasil: "LAPORAN_AUDIT_KEAMANAN.md"

FASE 4 — PENENTUAN PRIORITAS PERBAIKAN

Tujuan: Memilih masalah yang harus diselesaikan terlebih dahulu.

Kategori prioritas:

- P0 — Kritis: Masalah keamanan, kehilangan data, atau fungsi utama yang rusak.
- P1 — Tinggi: Masalah progres, akun, kuis, ujian, dan navigasi utama.
- P2 — Menengah: Peningkatan tampilan, kenyamanan, dan pengalaman belajar.
- P3 — Rendah: Fitur tambahan yang tidak mendesak.

Hasil: "DAFTAR_PERBAIKAN_PRIORITAS.md"

Semua perubahan harus mendapat persetujuan Project Owner.

FASE 5 — IMPLEMENTASI PERBAIKAN

Tujuan: Memperbaiki masalah yang sudah disetujui.

Tanggung jawab Claude:

1. Menjelaskan rencana perubahan.
2. Menyebutkan file yang akan diubah.
3. Melakukan perubahan secara bertahap.
4. Menjelaskan kode yang diperbarui.
5. Menyediakan langkah pengujian.
6. Mencatat perubahan.

Aturan: Tidak melakukan perubahan besar tanpa persetujuan.

FASE 6 — PENGUJIAN DAN REVIEW

Tujuan: Memastikan hasil implementasi tidak merusak fitur lain.

Pengujian meliputi:

1. Login dan logout.
2. Dashboard.
3. Materi pembelajaran.
4. Kuis dan ujian.
5. Progres belajar.
6. Catatan pribadi.
7. Penyimpanan Supabase.
8. Tampilan perangkat mobile dan desktop.

Peran tim:

- Claude: Menyediakan skenario dan penjelasan pengujian.
- AI Assistant via API: Memeriksa logika dan kemungkinan risiko.
- Gemini: Melakukan review independen.
- ChatGPT: Menyusun checklist dan laporan.
- Muhamad Rafito: Melakukan pengujian akhir dan memberikan persetujuan.

Hasil: Laporan pengujian dan daftar masalah yang masih tersisa.

FASE 7 — DOKUMENTASI DAN RILIS

Tujuan: Menyiapkan proyek agar mudah dipahami dan dipelihara.

Pekerjaan:

1. Memperbarui README.
2. Memperbarui catatan perubahan.
3. Melengkapi dokumentasi teknis.
4. Mencatat hasil pengujian.
5. Memeriksa kembali keamanan.
6. Mendapatkan persetujuan rilis dari Project Owner.

Hasil: Dokumentasi proyek diperbarui dan versi siap dirilis.

---

3. ATURAN PELAKSANAAN

1. Setiap pekerjaan memiliki satu penanggung jawab utama.
2. Anggota lain dapat memberikan review.
3. Tidak ada perubahan kode sebelum ruang lingkup disetujui.
4. Setiap laporan harus berdasarkan bukti.
5. Pekerjaan yang belum diuji tidak boleh disebut selesai.
6. Jika informasi tidak tersedia, statusnya harus ditulis belum bisa diverifikasi.
7. Perubahan harus dilakukan secara bertahap.
8. Project Owner memiliki keputusan akhir.

4. FORMAT LAPORAN PEKERJAAN

Setiap anggota tim menggunakan format berikut:

- Nama pekerjaan:
- Penanggung jawab:
- Tujuan:
- File terkait:
- Temuan:
- Bukti:
- Rekomendasi:
- Status:
- Langkah berikutnya:

Status pekerjaan:

- Belum dimulai.
- Sedang dikerjakan.
- Menunggu review.
- Menunggu persetujuan.
- Sedang diuji.
- Selesai.
- Tertunda.

5. KRITERIA PENYELESAIAN PROYEK

Proyek atau tahap pekerjaan dinyatakan selesai apabila:

1. Tujuan pekerjaan terpenuhi.
2. Hasil telah diperiksa.
3. Pengujian yang relevan berhasil.
4. Tidak ada masalah kritis yang belum ditangani.
5. Dokumentasi diperbarui.
6. Project Owner menyetujui hasilnya.

6. PENUTUP

Rencana kerja ini menjadi pedoman pelaksanaan pengembangan TKJ B Learning Academy.

Perubahan rencana dapat dilakukan berdasarkan hasil audit, kebutuhan pembelajaran, dan persetujuan Project Owner.

Dokumen: RENCANA_KERJA_PROYEK.md
Proyek: TKJ B Learning Academy
Project Owner: Muhamad Rafito
