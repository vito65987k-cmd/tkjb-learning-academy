export const COURSES = [
  {
    id: "net",
    title: "Dasar Jaringan Komputer",
    desc: "Mengenal cara komputer saling terhubung, dari perangkat dan alamat sampai praktik dasar.",
    goals: ["Menjelaskan apa itu jaringan komputer dan manfaatnya", "Mengenal perangkat jaringan dan fungsinya", "Memahami alamat IP dan cara kerja komunikasi data", "Mencoba perintah dasar untuk menguji koneksi"],
    lessons: [
      {
        title: "Apa itu jaringan komputer",
        body: ["Jaringan komputer adalah dua perangkat atau lebih yang saling terhubung agar bisa bertukar data dan berbagi sumber daya, seperti file, printer, dan internet.", "Jaringan dibedakan menurut jangkauannya: LAN untuk area kecil seperti satu lab, MAN untuk satu kota, dan WAN untuk wilayah luas seperti internet."],
        example: "Komputer di lab TKJ terhubung ke satu switch dan memakai satu printer bersama. Itu contoh LAN.",
        practice: "Hitung ada berapa perangkat yang terhubung ke jaringan di rumah atau sekolahmu (HP, laptop, TV, printer), lalu tulis di Catatan saya.",
        summary: "Jaringan komputer menghubungkan perangkat agar bisa berbagi data. LAN, MAN, dan WAN dibedakan dari jangkauannya."
      },
      {
        title: "Perangkat jaringan dan kabel",
        body: ["Router menghubungkan jaringan satu dengan jaringan lain. Switch menghubungkan banyak komputer dalam satu jaringan. Access point memancarkan sinyal Wi-Fi.", "Media penghubungnya bisa kabel UTP (paling umum), serat optik untuk jarak jauh, atau nirkabel (Wi-Fi)."],
        example: "Teknisi TKJ memasang kabel UTP dari switch ke tiap komputer di lab, lalu menghubungkan switch ke router untuk akses internet.",
        practice: "Cari router atau modem di rumah atau sekolah. Catat nama perangkatnya dan berapa port kabel yang ada.",
        summary: "Router, switch, dan access point punya tugas berbeda. Kabel UTP adalah media yang paling sering dipakai."
      },
      {
        title: "Topologi jaringan",
        body: ["Topologi adalah bentuk susunan perangkat dalam jaringan. Yang paling umum adalah topologi bintang (star), di mana semua komputer terhubung ke satu switch di tengah.", "Topologi lain: bus (satu kabel utama), ring (melingkar), dan mesh (banyak jalur saling terhubung)."],
        example: "Lab komputer sekolah umumnya memakai topologi star. Kalau satu kabel putus, hanya satu komputer yang terputus.",
        practice: "Gambar topologi star untuk lima komputer dan satu switch di buku catatanmu.",
        summary: "Topologi star paling umum dipakai karena mudah dipasang dan mudah dicari kerusakannya."
      },
      {
        title: "Alamat IP dasar",
        body: ["Alamat IP adalah alamat unik tiap perangkat di jaringan, supaya data sampai ke tujuan yang tepat. Contohnya 192.168.1.10.", "Alamat IPv4 terdiri dari empat angka antara 0 sampai 255. Alamat 192.168.x.x dipakai untuk jaringan lokal. Alamat bisa diberikan otomatis oleh DHCP atau diatur manual."],
        example: "Di lab, router memberi alamat otomatis lewat DHCP. Printer biasanya diberi alamat tetap supaya selalu mudah ditemukan.",
        practice: "Buka pengaturan Wi-Fi di HP-mu dan cari alamat IP-nya. Catat, lalu bandingkan dengan teman.",
        summary: "Setiap perangkat butuh alamat IP yang unik. DHCP membagikannya secara otomatis."
      },
      {
        title: "Model OSI dan menguji koneksi",
        body: ["Model OSI membagi komunikasi data menjadi 7 lapisan: Physical, Data Link, Network, Transport, Session, Presentation, dan Application. Model ini membantu mencari di lapisan mana masalah terjadi.", "Untuk menguji koneksi, gunakan perintah ping. Contoh: ping 8.8.8.8 untuk mengecek apakah komputer bisa menjangkau internet."],
        example: "Kalau komputer tidak bisa membuka internet, teknisi memeriksa dari bawah: kabel terpasang (Physical), lalu alamat IP (Network), baru aplikasinya.",
        practice: "Di Termux atau Command Prompt, ketik ping 8.8.8.8 dan lihat hasilnya. Catat berapa milidetik waktunya.",
        summary: "Model OSI membantu mencari letak masalah. Ping adalah alat uji koneksi yang paling dasar."
      }
    ]
  },
  {
    id: "eng",
    title: "Bahasa Inggris Pemula",
    desc: "Bahasa Inggris dasar untuk percakapan sehari-hari dan istilah teknologi.",
    goals: ["Mengenal kosakata dasar", "Memperkenalkan diri dalam bahasa Inggris", "Memahami istilah teknologi sederhana"],
    lessons: []
  },
  {
    id: "cisco",
    title: "Cisco Networking Academy",
    desc: "Belajar jaringan lewat materi Cisco Networking Academy.",
    goals: ["Memahami konsep jaringan menurut Cisco", "Mengenal Packet Tracer", "Menyiapkan dasar untuk sertifikasi"],
    lessons: []
  },
  {
    id: "jp",
    title: "Bahasa Jepang Pemula",
    desc: "Bahasa Jepang dasar: salam, perkenalan diri, dan huruf hiragana.",
    goals: ["Mengucapkan salam dan perkenalan", "Mengenal huruf hiragana", "Memahami kalimat sederhana"],
    lessons: []
  },
  {
    id: "py",
    title: "Python Pemula",
    desc: "Dasar pemrograman Python dari nol sampai membuat program kecil.",
    goals: ["Memahami variabel dan tipe data", "Memakai percabangan dan perulangan", "Membuat program sederhana"],
    lessons: []
  },
  {
    id: "linux",
    title: "Linux / Termux",
    desc: "Dasar Linux dan Termux di HP Android.",
    goals: ["Mengenal struktur direktori Linux", "Memakai perintah dasar terminal", "Memahami hak akses file"],
    lessons: []
  },
  {
    id: "sec",
    title: "Cybersecurity Pemula",
    desc: "Dasar keamanan digital dan etika di dunia siber.",
    goals: ["Memahami pentingnya password yang kuat", "Mengenal jenis serangan umum", "Membiasakan perilaku aman online"],
    lessons: []
  }
];
