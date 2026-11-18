export const B11 = [
  {
    id: "1.1.4",
    title: "Model client-server dan peer-to-peer",
    body: [
      "Dalam jaringan, ada perangkat yang meminta layanan dan ada yang menyediakannya. Pada model client-server, server menyediakan layanan atau data (misalnya halaman web atau file), sedangkan client adalah perangkat yang memintanya (misalnya laptop atau HP). Satu server bisa melayani banyak client sekaligus.",
      "Pada model peer-to-peer (P2P), setiap komputer berperan sama: bisa meminta sekaligus berbagi data. Model ini sederhana dan cocok untuk jaringan kecil, tetapi lebih sulit dikelola dan diamankan saat jumlah komputer bertambah."
    ],
    example: "Saat kamu membuka sebuah situs lewat HP, HP-mu adalah client dan komputer pemilik situs adalah server. Di rumah, dua laptop yang saling berbagi folder tanpa server khusus adalah contoh peer-to-peer.",
    practice: "Tulis lima layanan yang kamu pakai sehari-hari (misalnya YouTube, WhatsApp, Google Drive). Untuk tiap layanan, tulis mana yang berperan sebagai client dan mana yang sebagai server.",
    summary: "Client meminta layanan, server menyediakannya. Peer-to-peer cocok untuk jaringan kecil, client-server untuk jaringan yang lebih besar dan terkelola."
  },
  {
    id: "1.1.5",
    title: "Istilah penting: bandwidth, latency, dan protokol",
    body: [
      "Bandwidth adalah kapasitas maksimum data yang dapat dikirim per detik, biasanya dalam satuan bit per detik (bps), Mbps, atau Gbps. Semakin besar bandwidth, semakin banyak data yang dapat lewat sekaligus, seperti jalan yang lebih lebar.",
      "Latency adalah waktu yang dibutuhkan data untuk sampai ke tujuan, diukur dalam milidetik (ms). Latency rendah penting untuk gim online dan panggilan video. Protokol adalah aturan bersama yang disepakati perangkat agar bisa saling berkomunikasi, misalnya HTTP untuk web dan DHCP untuk pembagian alamat IP.",
      "Hati-hati: Mbps (megabit per detik) berbeda dengan MBps (megabyte per detik). Karena 1 byte sama dengan 8 bit, jaringan 100 Mbps secara teori mengirim sekitar 12,5 MB per detik."
    ],
    example: "Dua jaringan Wi-Fi bisa sama-sama 20 Mbps, tetapi yang latency-nya 20 ms terasa jauh lebih lancar untuk video call daripada yang latency-nya 200 ms.",
    practice: "Jalankan tes kecepatan internet di HP-mu atau gunakan perintah ping ke 8.8.8.8, lalu catat bandwidth (kalau tersedia) dan latency-nya. Bandingkan hasilnya di dua tempat berbeda.",
    summary: "Bandwidth adalah kapasitas, latency adalah waktu tempuh, dan protokol adalah aturan komunikasi. Ingat 1 byte sama dengan 8 bit."
  }
];

export const B12 = {
  lessons: [
    {
      id: "1.2.1",
      title: "Media transmisi: kabel dan nirkabel",
      body: [
        "Media transmisi adalah jalur yang membawa sinyal data. Ada tiga kelompok utama: kabel tembaga (misalnya UTP dan koaksial), serat optik (data berupa cahaya), dan nirkabel (gelombang radio seperti Wi-Fi).",
        "Kabel tembaga murah dan mudah dipasang, tetapi jaraknya terbatas dan bisa terganggu interferensi listrik. Serat optik tahan gangguan listrik dan bisa menjangkau jarak jauh dengan kecepatan sangat tinggi, tetapi lebih mahal. Nirkabel praktis tanpa kabel, tetapi sinyalnya bisa melemah karena jarak dan penghalang seperti dinding."
      ],
      example: "Di sekolah, lab komputer memakai kabel UTP ke tiap komputer, antargedung memakai serat optik, dan siswa terhubung lewat Wi-Fi di halaman.",
      practice: "Keliling sekolah atau rumah dan catat media apa yang dipakai di tiga tempat berbeda (kabel, serat optik, atau Wi-Fi). Tulis alasan menurutmu mengapa media itu dipilih.",
      summary: "Media transmisi ada tiga: kabel tembaga, serat optik, dan nirkabel. Masing-masing punya kelebihan dalam biaya, jarak, dan kecepatan."
    },
    {
      id: "1.2.2",
      title: "Mengenal kabel UTP dan kategorinya",
      body: [
        "UTP (Unshielded Twisted Pair) berisi 8 kabel kecil yang dipilin berpasangan menjadi 4 pasang. Pilinan membantu mengurangi gangguan sinyal. Konektor yang dipakai disebut RJ-45.",
        "Kabel UTP punya kategori. Cat5e umum dipakai untuk kecepatan 1 Gbps, dan Cat6 mendukung kecepatan lebih tinggi pada jarak pendek. Panjang maksimal satu segmen kabel UTP untuk jaringan Ethernet adalah 100 meter."
      ],
      example: "Teknisi TKJ memilih kabel Cat6 untuk ruang server karena butuh kecepatan tinggi, sedangkan Cat5e cukup untuk komputer biasa di kelas.",
      practice: "Lihat tulisan di selubung kabel jaringan yang ada di sekitarmu dan catat kategorinya (misalnya CAT5E atau CAT6). Kalau ada sisa kabel bekas, kupas ujungnya dan hitung berapa pasang kabel di dalamnya.",
      summary: "UTP terdiri dari 4 pasang kabel berpilin dengan konektor RJ-45. Cat5e dan Cat6 adalah kategori yang paling umum, dengan jarak maksimal 100 meter."
    },
    {
      id: "1.2.3",
      title: "Urutan warna kabel: straight dan crossover",
      body: [
        "Konektor RJ-45 punya 8 pin. Standar susunan warna yang umum dipakai adalah T568B. Urutan dari pin 1 sampai 8: putih-oranye, oranye, putih-hijau, biru, putih-biru, hijau, putih-cokelat, cokelat.",
        "Kabel straight memakai standar yang sama di kedua ujung (misalnya T568B di dua sisi). Kabel ini dipakai untuk menghubungkan perangkat yang berbeda jenis, misalnya komputer ke switch. Kabel crossover memakai T568A di satu ujung dan T568B di ujung lain, untuk menghubungkan perangkat sejenis seperti komputer ke komputer. Perangkat modern umumnya punya fitur Auto-MDIX sehingga kabel straight pun sudah cukup."
      ],
      example: "Untuk menyambungkan komputer ke switch di lab, teknisi membuat kabel straight dengan T568B di kedua ujung.",
      practice: "Tulis urutan warna T568B dari pin 1 sampai 8 di bukumu tanpa melihat contoh, lalu periksa kembali. Minta gurumu menunjukkan arah pin 1 pada konektor RJ-45.",
      summary: "T568B: putih-oranye, oranye, putih-hijau, biru, putih-biru, hijau, putih-cokelat, cokelat. Straight untuk perangkat berbeda jenis, crossover untuk perangkat sejenis."
    },
    {
      id: "1.2.4",
      title: "Praktik membuat kabel UTP straight",
      body: [
        "Alat yang dibutuhkan: kabel UTP, konektor RJ-45, crimping tool, dan LAN tester. Langkahnya: (1) kupas selubung luar sekitar 2 cm, (2) urai dan luruskan kedelapan kabel, (3) susun sesuai urutan T568B, (4) potong rata ujungnya, (5) masukkan ke konektor sampai ujung kabel menyentuh bagian depan, (6) jepit dengan crimping tool, lalu (7) ulangi di ujung satunya.",
        "Setelah selesai, uji dengan LAN tester. Lampu penguji akan menyala berurutan dari 1 sampai 8 jika kabel benar. Kalau ada lampu yang tidak menyala atau urutannya salah, potong konektor dan ulangi. Hati-hati memakai alat tajam, dan jangan mengupas inti kabel terlalu dalam."
      ],
      example: "Teknisi memasang jaringan lab baru dan membuat puluhan kabel straight dengan panjang sesuai jarak komputer ke switch, lalu menguji tiap kabel sebelum dipasang.",
      practice: "Praktik bersama guru di lab: buat satu kabel straight T568B lalu uji dengan LAN tester. Catat hasil ujinya dan berapa kali kamu mengulang sebelum berhasil.",
      summary: "Kupas, urai, susun sesuai T568B, potong rata, masukkan, jepit, lalu uji. Selalu uji kabel dengan LAN tester sebelum dipakai."
    }
  ],
  quiz: [
    { q: "Panjang maksimal satu segmen kabel UTP pada jaringan Ethernet adalah…", o: ["10 meter", "100 meter", "1 kilometer"], a: 1 },
    { q: "Konektor yang dipakai pada kabel UTP disebut…", o: ["BNC", "RJ-45", "USB"], a: 1 },
    { q: "Media yang membawa data berupa cahaya adalah…", o: ["Kabel UTP", "Serat optik", "Wi-Fi"], a: 1 },
    { q: "Pin 1 pada standar T568B berwarna…", o: ["Putih-oranye", "Biru", "Cokelat"], a: 0 },
    { q: "Kabel straight umumnya dipakai untuk menghubungkan…", o: ["Dua kabel listrik", "Komputer ke switch", "Dua monitor"], a: 1 },
    { q: "Alat untuk menguji apakah kabel UTP sudah benar:", o: ["Crimping tool", "LAN tester", "Obeng"], a: 1 }
  ]
};
