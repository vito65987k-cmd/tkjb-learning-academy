export const B23 = {
  lessons: [
    {
      id: "2.3.1",
      title: "Dasar Wi-Fi dan standar 802.11",
      body: [
        "Wi-Fi adalah teknologi jaringan lokal nirkabel (WLAN) yang memakai gelombang radio. Standar teknisnya bernama IEEE 802.11. Perangkat yang memancarkan sinyal Wi-Fi disebut access point (AP). Router Wi-Fi di rumah biasanya menggabungkan router, switch, dan access point dalam satu perangkat.",
        "Nama jaringan Wi-Fi yang kamu lihat saat memilih jaringan disebut SSID. Beberapa standar Wi-Fi yang umum: 802.11n (disebut juga Wi-Fi 4), 802.11ac (Wi-Fi 5), dan 802.11ax (Wi-Fi 6). Standar yang lebih baru umumnya lebih cepat dan lebih baik saat banyak perangkat terhubung.",
        "Kecepatan yang tertulis di kotak router adalah kecepatan teoretis. Kecepatan nyata biasanya lebih rendah karena jarak, dinding, gangguan sinyal, dan banyaknya perangkat yang berbagi sinyal yang sama."
      ],
      example: "Sekolah memasang access point di setiap lorong, dan semuanya memakai SSID yang sama. Siswa bisa berpindah tempat tanpa harus memilih jaringan Wi-Fi yang lain.",
      practice: "Buka pengaturan Wi-Fi di HP-mu dan catat nama SSID yang terhubung. Kalau tersedia, catat juga standar Wi-Fi (misalnya Wi-Fi 4, 5, atau 6) dan kecepatan link yang ditampilkan.",
      summary: "Wi-Fi memakai standar IEEE 802.11 dan gelombang radio. Access point memancarkan sinyal, SSID adalah nama jaringan, dan kecepatan nyata biasanya lebih rendah daripada kecepatan teoretis."
    },
    {
      id: "2.3.2",
      title: "Frekuensi 2,4 GHz dan 5 GHz serta channel",
      body: [
        "Wi-Fi bekerja pada beberapa pita frekuensi. Pita 2,4 GHz punya jangkauan lebih luas dan lebih mudah menembus dinding, tetapi kecepatannya lebih rendah dan lebih rawan gangguan, misalnya dari oven microwave, Bluetooth, dan Wi-Fi tetangga. Pita 5 GHz lebih cepat dan lebih sedikit gangguan, tetapi jangkauannya lebih pendek dan sinyalnya lebih mudah terhalang dinding.",
        "Setiap pita dibagi menjadi beberapa channel, seperti jalur di jalan raya. Pada pita 2,4 GHz ada sekitar 13 channel, dan channel yang berdekatan bisa saling tumpang tindih. Sebagai contoh umum pada lebar channel 20 MHz, channel 1, 6, dan 11 sering dipilih karena tidak saling tumpang tindih. Pilihan channel yang tepat dapat berbeda menurut negara, lebar channel, serta perangkat yang dipakai. Kalau banyak jaringan memakai channel yang sama atau berdekatan, sinyal saling mengganggu dan koneksi menjadi lambat.",
        "Banyak router modern bisa memancarkan dua pita sekaligus (dual band). Perangkat yang dekat dengan router sebaiknya memakai 5 GHz, sedangkan perangkat yang jauh bisa memakai 2,4 GHz. Namun, beberapa router memakai satu SSID untuk kedua pita frekuensi, sehingga pengguna tidak selalu bisa memilih pita secara terpisah dan perangkatlah yang memilihnya secara otomatis."
      ],
      example: "Di rumah, laptop di ruang tamu dekat router memakai 5 GHz dan terasa cepat. HP di kamar belakang memakai 2,4 GHz karena sinyal 5 GHz-nya terlalu lemah di sana.",
      practice: "Kalau routermu dual band, hubungkan HP ke 2,4 GHz dan 5 GHz secara bergantian (biasanya SSID-nya berbeda). Jalankan tes kecepatan di dua tempat: dekat router dan jauh dari router. Catat hasilnya.",
      summary: "2,4 GHz berjangkauan luas tetapi lebih lambat dan rawan gangguan. 5 GHz lebih cepat tetapi jangkauannya lebih pendek. Channel yang berbeda membantu mengurangi gangguan."
    },
    {
      id: "2.3.3",
      title: "Keamanan Wi-Fi: WPA2 dan WPA3",
      body: [
        "Wi-Fi tanpa password (terbuka) membuat siapa saja bisa bergabung, dan jaringan seperti ini umumnya tidak memberikan enkripsi pada tingkat jaringan nirkabel. Artinya, risiko data disadap menjadi lebih besar, walaupun tidak semua data otomatis terbaca karena sebagian layanan, misalnya situs yang memakai HTTPS, punya enkripsi sendiri. Karena itu jaringan Wi-Fi perlu diamankan dengan enkripsi.",
        "Standar keamanan Wi-Fi yang pernah dipakai: WEP (sudah usang dan mudah dibobol, jangan dipakai), WPA (lama), WPA2 (paling umum saat ini), dan WPA3 (paling baru dan lebih aman, terutama terhadap upaya menebak password). Gunakan WPA2 atau WPA3 jika perangkatmu mendukung.",
        "Langkah dasar mengamankan Wi-Fi: pakai password yang panjang dan sulit ditebak, ganti password admin bawaan router, ganti nama SSID bawaan, matikan fitur WPS jika tidak diperlukan, dan perbarui firmware router. Jangan menghubungkan HP ke Wi-Fi publik tanpa password untuk membuka akun penting. Hanya hubungkan perangkat ke jaringan milik sendiri atau jaringan yang kamu punya izinnya."
      ],
      example: "Guru TKJ mengatur Wi-Fi lab dengan WPA2 atau WPA3, password yang kuat, dan password admin router yang sudah diganti dari bawaan pabrik.",
      practice: "Lihat jenis keamanan jaringan Wi-Fi di rumahmu (biasanya tertulis di pengaturan Wi-Fi, misalnya WPA2). Lalu buat satu contoh password yang kuat. Jangan menulis password aslimu di catatan umum.",
      summary: "Amankan Wi-Fi dengan WPA2 atau WPA3 dan password yang kuat. Hindari WEP dan jaringan terbuka untuk hal penting."
    },
    {
      id: "2.3.4",
      title: "Praktik menguji kekuatan sinyal Wi-Fi",
      body: [
        "Kekuatan sinyal Wi-Fi diukur dalam dBm, berupa angka negatif. Semakin mendekati 0, semakin kuat sinyalnya. Perkiraan kasarnya: sekitar -50 dBm sangat baik, sekitar -67 dBm cukup baik untuk video, dan sekitar -80 dBm lemah dan koneksinya sering putus. Nilai-nilai ini hanya perkiraan, dan hasil pengukuran dapat berbeda menurut perangkat serta kondisi lingkungan.",
        "Langkah praktik: (1) pilih tiga titik ukur, yaitu dekat access point, di tengah ruangan, dan jauh atau di balik dinding, (2) di tiap titik, lihat kekuatan sinyal lewat pengaturan Wi-Fi HP atau aplikasi pemindai Wi-Fi (pasang dengan izin gurumu), (3) jalankan tes kecepatan atau ping, dan (4) catat hasilnya dalam tabel.",
        "Di Windows, perintah netsh wlan show interfaces menampilkan kekuatan sinyal dalam persen pada baris Signal. Jika sinyal di suatu titik lemah, kamu bisa mendekatkan access point, mengurangi penghalang, memakai 5 GHz di dekat access point, atau menambah access point. Lakukan pengukuran hanya di jaringan sendiri atau jaringan sekolah dengan izin guru."
      ],
      example: "Teknisi sekolah mengukur sinyal di kelas paling ujung dan mendapat sekitar -78 dBm, sehingga video sering putus. Setelah access point dipindah ke lorong yang lebih dekat, sinyal naik menjadi sekitar -60 dBm.",
      practice: "Ukur kekuatan sinyal Wi-Fi di tiga titik berbeda di rumah atau sekolahmu. Buat tabel berisi titik, kekuatan sinyal, dan hasil tes kecepatan atau ping. Tulis kesimpulanmu: di titik mana sinyalnya terbaik dan terburuk, dan apa penyebabnya.",
      summary: "Kekuatan sinyal Wi-Fi diukur dalam dBm, makin dekat 0 makin kuat. Ukur di beberapa titik lalu perbaiki penempatan access point jika sinyalnya lemah."
    }
  ],
  quiz: [
    { q: "Standar teknis yang dipakai Wi-Fi adalah…", o: ["Kabel UTP", "IEEE 802.11", "Protokol FTP"], a: 1 },
    { q: "Nama jaringan Wi-Fi yang tampil saat kita memilih jaringan disebut…", o: ["MAC", "Gateway", "SSID"], a: 2 },
    { q: "Pita frekuensi yang jangkauannya lebih luas tetapi lebih rawan gangguan adalah…", o: ["2,4 GHz", "5 GHz", "Keduanya sama"], a: 0 },
    { q: "Pita 5 GHz cenderung…", o: ["Lebih lambat dan jangkauannya lebih luas", "Lebih cepat tetapi jangkauannya lebih pendek", "Tidak bisa dipakai di HP"], a: 1 },
    { q: "Standar keamanan Wi-Fi yang paling baru dan paling aman di antara pilihan ini adalah…", o: ["WPA3", "WEP", "Tanpa password"], a: 0 },
    { q: "Nilai kekuatan sinyal yang paling kuat adalah…", o: ["-80 dBm", "-90 dBm", "-50 dBm"], a: 2 }
  ]
};
