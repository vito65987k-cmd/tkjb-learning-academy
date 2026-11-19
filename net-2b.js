export const B22 = {
  lessons: [
    {
      id: "2.2.1",
      title: "Ethernet dan alamat MAC",
      body: [
        "Ethernet adalah standar jaringan kabel yang paling umum dipakai di LAN. Kecepatan yang sering ditemui adalah 100 Mbps (Fast Ethernet), 1 Gbps (Gigabit Ethernet), dan 10 Gbps. Data pada Ethernet dikirim dalam bentuk paket kecil yang disebut frame.",
        "Setiap kartu jaringan (NIC) punya alamat MAC. Alamat MAC panjangnya 48 bit (6 byte), ditulis sebagai 12 digit heksadesimal, misalnya 00:1A:2B:3C:4D:5E. Heksadesimal memakai angka 0 sampai 9 dan huruf A sampai F. Tiga byte pertama menunjukkan pembuat perangkat, dan tiga byte terakhir membedakan satu perangkat dengan perangkat lain.",
        "Alamat MAC dipakai untuk pengiriman di dalam jaringan lokal (lapisan Data Link), sedangkan alamat IP dipakai untuk menentukan alamat di jaringan (lapisan Network). Alamat MAC bawaan pabrik biasanya tetap, tetapi alamat itu dapat diubah atau diacak oleh fitur privasi perangkat atau pengaturan sistem. Banyak HP modern memakai alamat MAC acak untuk Wi-Fi demi privasi, jadi alamat yang tampil bisa berbeda dengan alamat yang tertulis di kotak perangkat."
      ],
      example: "Laptop di lab punya alamat IP 192.168.1.15 dan alamat MAC 00:1A:2B:3C:4D:5E. Alamat IP bisa berganti kalau pindah jaringan, sedangkan alamat MAC bawaan kartu jaringan biasanya tetap sama.",
      practice: "Di Windows, buka Command Prompt lalu ketik ipconfig /all dan cari baris Physical Address. Di HP, cari alamat MAC di pengaturan Wi-Fi. Catat alamatnya dan tulis tiga byte pertamanya.",
      summary: "Ethernet adalah standar LAN kabel yang mengirim data dalam frame. Alamat MAC panjangnya 48 bit, ditulis heksadesimal, dan dipakai di jaringan lokal."
    },
    {
      id: "2.2.2",
      title: "Cara kerja switch dan tabel MAC",
      body: [
        "Switch bekerja dengan membaca alamat MAC pada frame. Switch punya tabel MAC, yaitu catatan alamat MAC mana yang terhubung ke port mana. Switch mengisi tabel ini sendiri dengan cara belajar: setiap ada frame masuk, switch mencatat alamat MAC pengirim beserta port tempat frame itu datang.",
        "Saat menerima frame, switch melihat alamat MAC tujuannya. Kalau alamat itu sudah ada di tabel, frame hanya dikirim ke port yang tepat. Kalau alamat itu belum dikenal, atau frame itu pesan broadcast, switch mengirimkannya ke semua port lain dalam jaringan (VLAN) yang sama, kecuali port tempat frame itu datang. Cara ini disebut flooding. VLAN adalah pembagian jaringan di dalam switch yang akan dipelajari di Tingkat 3. Jika belum memakai VLAN, semua port berada dalam satu jaringan yang sama. Setelah perangkat tujuan membalas, switch mencatat port-nya.",
        "Karena itu switch lebih efisien daripada hub: data hanya dikirim ke perangkat yang dituju, kecuali pada kondisi tertentu seperti di atas."
      ],
      example: "Komputer A mengirim data ke komputer B. Awalnya switch belum tahu letak B, jadi frame dikirim ke semua port. Setelah B membalas, switch mencatat port B. Kiriman berikutnya dari A ke B hanya lewat port B.",
      practice: "Gambar 4 komputer (A, B, C, D) yang terhubung ke switch pada port 1 sampai 4. Buat tabel MAC sederhana yang berisi pasangan komputer dan nomor port. Tulis ke port mana frame dari A ke C dikirim.",
      summary: "Switch belajar alamat MAC dari frame yang masuk dan menyimpannya di tabel MAC. Frame dikirim ke port tujuan, atau ke semua port lain jika tujuannya belum dikenal."
    },
    {
      id: "2.2.3",
      title: "Hub, switch, collision domain, dan broadcast domain",
      body: [
        "Hub adalah perangkat lama yang mengirim setiap data ke semua port. Karena semua perangkat berbagi jalur yang sama, dua perangkat bisa mengirim bersamaan dan datanya bertabrakan (collision). Area tempat tabrakan bisa terjadi disebut collision domain. Pada hub, semua port berada dalam satu collision domain, sehingga jaringan menjadi lambat saat ramai.",
        "Pada switch, setiap port membentuk collision domain sendiri sehingga tabrakan hampir tidak terjadi. Namun, pesan broadcast (pesan untuk semua perangkat) tetap diteruskan ke semua port. Kumpulan perangkat yang menerima broadcast yang sama disebut broadcast domain. Satu switch biasa yang tidak memakai VLAN membentuk satu broadcast domain. VLAN dapat membagi broadcast domain menjadi beberapa bagian di dalam switch yang sama (VLAN dipelajari di Tingkat 3).",
        "Router memisahkan broadcast domain. Pesan broadcast dari satu jaringan tidak diteruskan router ke jaringan lain. Hub saat ini jarang dipakai karena sudah digantikan switch."
      ],
      example: "Di lab 20 komputer yang memakai satu switch, setiap kabel adalah collision domain sendiri, tetapi semua komputer berada dalam satu broadcast domain selama switch itu tidak memakai VLAN. Router sekolah memisahkan jaringan lab dari jaringan ruang guru.",
      practice: "Buat tabel di bukumu dengan tiga baris (hub, switch, router) dan kolom: bekerja di lapisan apa, memisahkan collision domain atau tidak, dan memisahkan broadcast domain atau tidak. Isi dengan pemahamanmu, lalu periksa bersama gurumu.",
      summary: "Hub membuat semua port berada dalam satu collision domain. Switch memisahkan collision domain tiap port, sedangkan router memisahkan broadcast domain."
    },
    {
      id: "2.2.4",
      title: "Praktik melihat alamat MAC dan tabel ARP",
      body: [
        "ARP (Address Resolution Protocol) menerjemahkan alamat IP menjadi alamat MAC di dalam jaringan lokal. Hasil terjemahannya disimpan sementara di tabel ARP. Di Windows, tabel ini dilihat dengan perintah arp -a. Di Linux, gunakan ip neigh.",
        "Langkah praktik: (1) jalankan ipconfig dan catat alamat gateway, (2) ping alamat gateway itu, misalnya ping 192.168.1.1 (ganti dengan alamat gateway milikmu), (3) jalankan arp -a, (4) cari baris yang berisi alamat gateway dan lihat alamat MAC (Physical Address) di sebelahnya.",
        "Tabel ARP hanya berisi perangkat yang baru saja berkomunikasi, dan isinya hilang setelah beberapa saat. Di Termux atau HP Android, perintah ini bisa tidak tersedia karena pembatasan sistem. Kalau gagal, lakukan praktik di komputer lab. Lakukan praktik hanya di jaringan milik sendiri atau jaringan sekolah dengan izin gurumu."
      ],
      example: "Teknisi ingin mengetahui perangkat mana yang memakai IP 192.168.1.20. Ia melakukan ping ke alamat itu, menjalankan arp -a, lalu mencocokkan alamat MAC yang muncul dengan label di perangkat.",
      practice: "Lakukan empat langkah di atas di komputer lab bersama gurumu. Catat alamat gateway, alamat MAC gateway, dan jumlah baris yang muncul di tabel ARP.",
      summary: "ARP menerjemahkan IP menjadi MAC di jaringan lokal. Perintah arp -a menampilkan tabel ARP, dan ping membantu mengisi tabel itu."
    }
  ],
  quiz: [
    { q: "Alamat MAC panjangnya berapa bit?", o: ["128 bit", "32 bit", "48 bit"], a: 2 },
    { q: "Switch mencatat pasangan alamat MAC dan port pada…", o: ["Tabel routing", "Tabel MAC", "Tabel DNS"], a: 1 },
    { q: "Jika switch belum tahu port tujuan sebuah alamat MAC, switch akan…", o: ["Mengirim ke semua port lain", "Membuang frame", "Mengirim kembali ke pengirim"], a: 0 },
    { q: "Pada switch, setiap port membentuk…", o: ["Satu jaringan baru", "Satu router", "Collision domain tersendiri"], a: 2 },
    { q: "Perangkat yang memisahkan broadcast domain adalah…", o: ["Hub", "Router", "Kabel UTP"], a: 1 },
    { q: "Perintah Windows untuk melihat tabel ARP:", o: ["arp -a", "ping", "tracert"], a: 0 }
  ]
};
