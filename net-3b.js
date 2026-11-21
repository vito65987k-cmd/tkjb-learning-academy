export const B32 = {
  lessons: [
    {
      id: "3.2.1",
      title: "Mengapa jaringan perlu disegmentasi",
      body: [
        "Segmentasi jaringan adalah membagi satu jaringan besar menjadi beberapa bagian yang lebih kecil. Setiap bagian bisa diatur sendiri-sendiri. Kamu sudah mengenal salah satu caranya, yaitu membagi jaringan menjadi beberapa subnet pada Tingkat 2.",
        "Ada beberapa alasan melakukan segmentasi. Pertama, keamanan: akses antar bagian bisa dibatasi, misalnya komputer siswa tidak bebas menjangkau komputer tata usaha. Kedua, performa: pesan broadcast hanya beredar di dalam satu bagian sehingga jaringan tidak terbebani. Ketiga, pengelolaan: aturan dan pengaturan bisa dibedakan untuk tiap kelompok. Keempat, masalah di satu bagian tidak mudah merembet ke bagian lain.",
        "Tanpa segmentasi, semua perangkat berada dalam satu broadcast domain dan saling bisa menjangkau. Cara memisahkan jaringan tanpa harus membeli switch tambahan untuk tiap kelompok adalah dengan VLAN, yang akan dibahas di pelajaran berikutnya."
      ],
      example: "Sebuah sekolah memisahkan jaringan siswa, jaringan guru, jaringan tata usaha, dan jaringan kamera CCTV. Gangguan di jaringan siswa tidak ikut mengganggu pekerjaan administrasi.",
      practice: "Tulis empat kelompok perangkat yang ada di sekolahmu atau di rumahmu (misalnya komputer siswa, komputer guru, printer, dan kamera CCTV). Untuk tiap kelompok, tulis satu alasan mengapa kelompok itu sebaiknya dipisahkan dari kelompok lain.",
      summary: "Segmentasi membagi jaringan besar menjadi bagian kecil. Manfaatnya: keamanan lebih baik, broadcast berkurang, pengelolaan lebih mudah, dan masalah tidak mudah menyebar."
    },
    {
      id: "3.2.2",
      title: "Konsep VLAN dan broadcast domain",
      body: [
        "VLAN (Virtual LAN) adalah cara membagi satu switch menjadi beberapa jaringan logis yang terpisah. Setiap VLAN punya nomor yang disebut VLAN ID, dan setiap VLAN membentuk broadcast domain sendiri. Ingat pelajaran di Bab 2.2: satu switch biasa yang tidak memakai VLAN membentuk satu broadcast domain. VLAN membagi broadcast domain itu menjadi beberapa bagian.",
        "Komputer yang berada di VLAN yang sama bisa berkomunikasi langsung. Komputer di VLAN yang berbeda tidak bisa saling menjangkau langsung. Agar bisa, data harus lewat router atau switch layer 3, dan proses ini disebut inter-VLAN routing. Biasanya satu VLAN dipasangkan dengan satu subnet.",
        "Keuntungan VLAN: pengelompokan perangkat tidak bergantung pada lokasi fisik atau jumlah switch. Catatan: VLAN adalah pemisahan logis. VLAN membantu keamanan, tetapi bukan pengganti firewall, dan konfigurasinya tetap harus dilakukan dengan benar."
      ],
      example: "Sebuah switch 24 port dibagi tiga: port 1 sampai 12 untuk VLAN 10 (siswa), port 13 sampai 20 untuk VLAN 20 (guru), dan port 21 sampai 24 untuk VLAN 30 (tata usaha). Tiap VLAN memakai subnet sendiri, misalnya 192.168.10.0/24, 192.168.20.0/24, dan 192.168.30.0/24.",
      practice: "Gunakan contoh di atas dan jawab: (1) apakah dua komputer di VLAN 10 bisa saling berkomunikasi langsung, (2) apa yang dibutuhkan agar komputer di VLAN 10 bisa menjangkau komputer di VLAN 20, dan (3) berapa broadcast domain yang ada pada switch itu.",
      summary: "VLAN membagi satu switch menjadi beberapa jaringan logis, masing-masing dengan broadcast domain sendiri. Komunikasi antar VLAN membutuhkan router atau switch layer 3."
    },
    {
      id: "3.2.3",
      title: "Port access, port trunk, dan tag 802.1Q",
      body: [
        "Port access adalah port switch yang dihubungkan ke satu perangkat akhir, seperti komputer atau printer. Port access hanya menjadi milik satu VLAN, dan perangkat yang terhubung tidak perlu tahu soal VLAN.",
        "Port trunk adalah port yang menghubungkan switch ke switch lain atau ke router, dan membawa banyak VLAN sekaligus lewat satu kabel. Agar penerima tahu sebuah frame milik VLAN yang mana, frame diberi tanda berupa VLAN ID. Standar pemberian tanda ini disebut IEEE 802.1Q (tag 802.1Q).",
        "Dengan trunk, dua switch di tempat yang berbeda tetap bisa berbagi VLAN yang sama hanya dengan satu kabel antar switch. Inter-VLAN routing juga bisa memakai satu kabel trunk ke router."
      ],
      example: "Gedung A dan gedung B masing-masing punya switch. Keduanya dihubungkan oleh satu kabel trunk. Komputer siswa di gedung A dan di gedung B sama-sama berada di VLAN 10, sehingga tetap dalam satu jaringan.",
      practice: "Gambar dua switch yang dihubungkan satu kabel. Beri tiap switch dua komputer: satu di VLAN 10 dan satu di VLAN 20. Tandai mana port access dan mana port trunk, lalu tulis VLAN apa saja yang dibawa oleh port trunk.",
      summary: "Port access melayani satu perangkat di satu VLAN. Port trunk membawa banyak VLAN dengan tag IEEE 802.1Q antar switch atau ke router."
    },
    {
      id: "3.2.4",
      title: "Praktik merancang pembagian VLAN di atas kertas",
      body: [
        "Merancang VLAN dilakukan sebelum mengatur perangkat. Langkahnya: (1) daftar kelompok perangkat yang perlu dipisah, (2) beri tiap kelompok VLAN ID dan nama, (3) tentukan subnet untuk tiap VLAN, memakai ilmu subnetting dari Tingkat 2, (4) tentukan port switch untuk tiap VLAN, (5) tentukan port trunk, dan (6) tentukan alamat gateway untuk tiap VLAN.",
        "Contoh rancangan: VLAN 10 Siswa memakai 192.168.10.0/24 dengan gateway 192.168.10.1. VLAN 20 Guru memakai 192.168.20.0/24 dengan gateway 192.168.20.1. VLAN 30 Tata Usaha memakai 192.168.30.0/24 dengan gateway 192.168.30.1. VLAN 40 CCTV memakai 192.168.40.0/24 dengan gateway 192.168.40.1.",
        "Praktik ini hanya berupa rancangan di kertas atau di aplikasi simulasi jika gurumu menyediakannya. Jangan mengubah pengaturan VLAN pada switch jaringan sekolah yang sedang aktif tanpa izin guru atau teknisi, karena kesalahan konfigurasi bisa memutus jaringan."
      ],
      example: "Teknisi sekolah menggambar rancangan lengkap di kertas, memeriksanya bersama guru, dan baru mengatur switch di luar jam belajar setelah rancangannya disetujui.",
      practice: "Rancang VLAN untuk lab sekolah dengan tiga kelompok: komputer siswa, komputer guru, dan printer. Buat tabel berisi VLAN ID, nama, subnet, gateway, dan nomor port. Tulis juga port mana yang menjadi trunk. Periksa hasilnya bersama gurumu.",
      summary: "Rancang VLAN dengan mendaftar kelompok, memberi VLAN ID, subnet, port, trunk, dan gateway. Jangan mengubah switch yang sedang aktif tanpa izin."
    }
  ],
  quiz: [
    { q: "Salah satu manfaat segmentasi jaringan adalah…", o: ["Menghapus semua broadcast", "Mengurangi broadcast dan membatasi akses antar bagian", "Membuat internet gratis"], a: 1 },
    { q: "Satu VLAN umumnya membentuk satu…", o: ["Broadcast domain", "Server", "Kabel"], a: 0 },
    { q: "Agar komputer di VLAN berbeda bisa saling berkomunikasi, dibutuhkan…", o: ["Kabel yang lebih panjang", "Hub", "Router atau switch layer 3"], a: 2 },
    { q: "Port yang membawa banyak VLAN sekaligus disebut…", o: ["Port access", "Port trunk", "Port console"], a: 1 },
    { q: "Standar yang dipakai untuk memberi tag VLAN pada frame di port trunk adalah…", o: ["IEEE 802.1Q", "IEEE 802.11", "Protokol DHCP"], a: 0 },
    { q: "Pada rancangan VLAN, setiap VLAN biasanya diberi…", o: ["Merek switch sendiri", "Kabel listrik sendiri", "Subnet sendiri"], a: 2 }
  ]
};
