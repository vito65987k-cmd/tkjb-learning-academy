export const B13 = {
  add: [
    {
      id: "1.3.3",
      title: "Alamat IP publik dan privat",
      body: [
        "Alamat IP privat dipakai di dalam jaringan lokal dan tidak dapat dijangkau langsung dari internet. Rentang privat IPv4 yang umum: 10.0.0.0 sampai 10.255.255.255, 172.16.0.0 sampai 172.31.255.255, dan 192.168.0.0 sampai 192.168.255.255. Banyak jaringan lokal boleh memakai alamat privat yang sama tanpa bentrok, karena jaringan-jaringan itu tidak saling terhubung langsung.",
        "Alamat IP publik diberikan oleh penyedia layanan internet (ISP) dan unik di seluruh internet. Router di rumah atau sekolah biasanya memakai satu alamat publik, lalu memakai NAT untuk membagikan akses internet kepada banyak perangkat yang beralamat privat."
      ],
      example: "HP, laptop, dan TV di rumahmu mendapat alamat 192.168.x.x dari router. Bagi internet, semuanya terlihat memakai satu alamat publik milik router.",
      practice: "Lihat alamat IP HP-mu di pengaturan Wi-Fi. Lalu cari tahu alamat IP publikmu lewat situs pengecek IP. Catat keduanya dan jelaskan mengapa berbeda.",
      summary: "IP privat dipakai di jaringan lokal, IP publik diberikan ISP dan dikenali di internet. Router memakai NAT untuk menghubungkan keduanya."
    },
    {
      id: "1.3.4",
      title: "Subnet mask dan default gateway",
      body: [
        "Subnet mask menentukan bagian mana dari alamat IP yang menunjukkan jaringan dan bagian mana yang menunjukkan perangkat. Pada mask 255.255.255.0, tiga angka pertama adalah bagian jaringan dan angka terakhir adalah bagian perangkat. Dua perangkat bisa berkomunikasi langsung jika berada di jaringan yang sama.",
        "Default gateway adalah alamat router yang dipakai perangkat untuk mengirim data ke luar jaringannya, misalnya ke internet. Contoh pengaturan lengkap: IP 192.168.1.10, subnet mask 255.255.255.0, gateway 192.168.1.1."
      ],
      example: "Komputer 192.168.1.10 dan printer 192.168.1.20 dengan mask 255.255.255.0 berada di jaringan yang sama (192.168.1.x), jadi bisa langsung berkomunikasi. Untuk membuka internet, komputer mengirim data lewat gateway 192.168.1.1.",
      practice: "Lihat pengaturan IP di komputer atau HP-mu, lalu catat IP, subnet mask, dan gateway-nya. Tentukan apakah perangkatmu dan perangkat temanmu berada di jaringan yang sama.",
      summary: "Subnet mask memisahkan bagian jaringan dan bagian perangkat. Default gateway adalah pintu keluar menuju jaringan lain."
    },
    {
      id: "1.3.5",
      title: "Model TCP/IP dan perbandingannya dengan OSI",
      body: [
        "Model TCP/IP adalah model yang benar-benar dipakai internet. Modelnya punya 4 lapisan: Network Access, Internet, Transport, dan Application. Model OSI yang 7 lapis lebih sering dipakai sebagai alat belajar dan untuk mencari letak masalah.",
        "Perbandingannya: lapisan Application pada TCP/IP mencakup Application, Presentation, dan Session pada OSI. Lapisan Network Access mencakup Data Link dan Physical. Lapisan Internet sejajar dengan Network (tempat alamat IP), dan Transport sejajar dengan Transport (TCP dan UDP).",
        "TCP memastikan semua data sampai dengan urutan benar, cocok untuk membuka web atau mengunduh file. UDP lebih ringan dan cepat tetapi tidak menjamin data sampai, cocok untuk panggilan video dan gim."
      ],
      example: "Saat membuka sebuah situs: browser memakai HTTP (Application), TCP mengatur pengiriman (Transport), IP menentukan alamat tujuan (Internet), dan kabel atau Wi-Fi membawa sinyalnya (Network Access).",
      practice: "Gambar tabel dua kolom di bukumu: tujuh lapisan OSI di kiri dan empat lapisan TCP/IP di kanan. Hubungkan lapisan yang sejajar dengan garis.",
      summary: "TCP/IP punya 4 lapisan dan dipakai internet, OSI punya 7 lapisan dan dipakai untuk belajar. TCP menjamin pengiriman, UDP mengutamakan kecepatan."
    }
  ],
  quiz: [
    { q: "Alamat IP berikut yang termasuk alamat privat adalah…", o: ["8.8.8.8", "192.168.1.5", "202.10.20.30"], a: 1 },
    { q: "Fungsi subnet mask adalah…", o: ["Menentukan bagian jaringan dan bagian perangkat pada alamat IP", "Mempercepat internet", "Menyimpan file"], a: 0 },
    { q: "Alamat router yang dipakai perangkat untuk keluar dari jaringan lokal disebut…", o: ["Subnet mask", "Default gateway", "Hostname"], a: 1 },
    { q: "Jumlah lapisan pada model TCP/IP versi 4 lapisan:", o: ["4", "7", "3"], a: 0 },
    { q: "Protokol transport yang menjamin data sampai dengan urutan benar:", o: ["UDP", "TCP", "ARP"], a: 1 },
    { q: "Alamat IP publik diberikan oleh…", o: ["Teman sekelas", "ISP", "Switch"], a: 1 }
  ]
};

export const B14 = {
  lessons: [
    {
      id: "1.4.1",
      title: "Melihat konfigurasi jaringan di perangkatmu",
      body: [
        "Sebelum memperbaiki jaringan, lihat dulu pengaturan perangkat. Di Windows, buka Command Prompt lalu ketik ipconfig untuk menampilkan alamat IP, subnet mask, dan gateway. Perintah ipconfig /all menampilkan detail tambahan seperti alamat MAC dan server DNS.",
        "Di Linux, gunakan perintah ip addr untuk melihat alamat IP tiap antarmuka jaringan. Perhatikan antarmuka yang aktif, misalnya wlan0 untuk Wi-Fi atau eth0 untuk kabel. Di Termux, hasilnya bisa berbeda tergantung versi Android. Kalau perintahnya tidak berhasil, lihat alamat IP lewat pengaturan Wi-Fi HP."
      ],
      example: "Teknisi yang menerima laporan 'internet mati' langsung menjalankan ipconfig. Alamat berawalan 169.254 menandakan komputer gagal mendapat alamat dari DHCP.",
      practice: "Di komputer lab atau laptop, jalankan ipconfig, lalu catat IP, subnet mask, dan gateway. Jalankan ipconfig /all dan catat alamat MAC-nya.",
      summary: "ipconfig (Windows) dan ip addr (Linux) menampilkan konfigurasi jaringan. Alamat 169.254.x.x menandakan komputer tidak mendapat alamat dari DHCP."
    },
    {
      id: "1.4.2",
      title: "Menguji koneksi dengan ping dan membaca hasilnya",
      body: [
        "Ping mengirim paket kecil ke alamat tujuan dan menunggu balasan. Hasilnya menunjukkan apakah tujuan terjangkau, berapa lama waktu tempuhnya (time, dalam ms), dan berapa paket yang hilang (packet loss).",
        "Urutan pengujian yang baik: (1) ping 127.0.0.1 untuk menguji pengaturan jaringan di komputermu sendiri, (2) ping alamat gateway untuk menguji jaringan lokal, (3) ping 8.8.8.8 untuk menguji jalur ke internet, (4) ping nama situs seperti google.com untuk menguji DNS. Pesan 'Request timed out' berarti tidak ada balasan."
      ],
      example: "Ping ke 8.8.8.8 berhasil tetapi ping ke google.com gagal. Artinya internet terjangkau, tetapi ada masalah pada DNS, yaitu layanan yang menerjemahkan nama situs menjadi alamat IP. Teknisi lalu memeriksa pengaturan DNS.",
      practice: "Lakukan empat tahap ping di atas dari perangkatmu, lalu catat hasil tiap tahap: berhasil atau gagal, waktu tempuh, dan packet loss. Kalau ada yang gagal, tulis dugaanmu.",
      summary: "Ping menguji keterjangkauan, waktu tempuh, dan packet loss. Uji bertahap dari komputer sendiri, gateway, internet, lalu nama situs."
    },
    {
      id: "1.4.3",
      title: "Menelusuri jalur dengan tracert dan traceroute",
      body: [
        "Tracert (Windows) atau traceroute (Linux) menampilkan perangkat-perangkat (hop) yang dilewati data menuju tujuan, beserta waktu tempuh tiap hop. Contohnya: tracert google.com.",
        "Dengan hasil ini, kamu bisa melihat di titik mana koneksi mulai lambat atau terputus. Hop pertama biasanya gateway di jaringanmu sendiri. Tanda bintang (*) berarti tidak ada balasan pada hop itu. Ini bisa menandakan masalah, tetapi kadang perangkat memang sengaja tidak membalas."
      ],
      example: "Koneksi ke sebuah situs terasa lambat. Hasil tracert menunjukkan waktu tempuh melonjak di hop ketiga, tepat setelah router sekolah. Teknisi mencurigai masalah di sisi penyedia internet, bukan di komputer.",
      practice: "Jalankan tracert (Windows) atau traceroute (Linux) ke google.com. Hitung jumlah hop dan catat hop pertamanya. Bandingkan hasilnya dengan temanmu.",
      summary: "Tracert menunjukkan jalur dan waktu tempuh tiap hop. Berguna untuk mencari letak koneksi yang lambat atau terputus."
    },
    {
      id: "1.4.4",
      title: "Alat teknisi dan langkah dasar troubleshooting",
      body: [
        "Alat dasar teknisi jaringan: LAN tester, crimping tool, tang potong, obeng, kabel UTP cadangan, dan konektor RJ-45. Utamakan keselamatan: matikan perangkat sebelum membuka casing, jaga area kerja tetap rapi, dan jangan menyentuh kabel listrik bertegangan.",
        "Troubleshooting dilakukan bertahap: (1) tanyakan gejalanya dengan jelas, (2) periksa yang paling sederhana dulu, yaitu kabel dan lampu indikator di port, (3) periksa pengaturan IP, (4) uji dengan ping, (5) ganti satu bagian lalu uji lagi, dan (6) catat masalah dan solusinya. Ubah satu hal pada satu waktu supaya penyebabnya jelas."
      ],
      example: "Satu komputer di lab tidak bisa terhubung. Teknisi memeriksa lampu port switch (mati), mengganti kabel dengan yang baru (lampu menyala), lalu ping ke gateway berhasil. Penyebabnya kabel rusak, dan teknisi mencatatnya di buku log.",
      practice: "Buat daftar cek troubleshooting satu halaman berisi enam langkah di atas. Lalu berpasangan dengan temanmu: satu orang membuat kerusakan sederhana (misalnya mencabut kabel), yang lain mencarinya memakai daftar cekmu.",
      summary: "Troubleshooting dilakukan bertahap dari yang paling sederhana, mengubah satu hal pada satu waktu, dan hasilnya dicatat."
    }
  ],
  quiz: [
    { q: "Perintah Windows untuk melihat alamat IP komputer:", o: ["ipconfig", "copy", "format"], a: 0 },
    { q: "Alamat 169.254.x.x pada komputer biasanya menandakan…", o: ["Koneksi sangat cepat", "Gagal mendapat alamat dari DHCP", "Alamat IP publik"], a: 1 },
    { q: "Perintah untuk menguji apakah gateway terjangkau:", o: ["ping alamat gateway", "shutdown", "dir"], a: 0 },
    { q: "Jika ping 8.8.8.8 berhasil tetapi ping google.com gagal, masalahnya kemungkinan pada…", o: ["Kabel putus", "DNS", "Monitor"], a: 1 },
    { q: "Perintah Windows untuk menelusuri jalur menuju tujuan:", o: ["tracert", "ipconfig", "cls"], a: 0 },
    { q: "Dalam troubleshooting, sebaiknya kita…", o: ["Mengubah banyak hal sekaligus", "Mengubah satu hal lalu menguji lagi", "Langsung mengganti semua perangkat"], a: 1 }
  ]
};
