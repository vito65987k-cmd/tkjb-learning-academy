export const B31 = {
  lessons: [
    {
      id: "3.1.1",
      title: "Apa itu routing dan cara kerja router",
      body: [
        "Routing adalah proses menentukan jalur yang dilalui data untuk berpindah dari satu jaringan ke jaringan lain. Perangkat yang melakukannya adalah router. Router bekerja di lapisan Network pada model OSI, yaitu lapisan tempat alamat IP berada.",
        "Dua komputer yang berada di jaringan yang sama bisa berkomunikasi langsung. Komputer menentukan hal ini dengan membandingkan alamat tujuan dengan alamat IP dan subnet mask miliknya sendiri. Kalau alamat tujuan berada di jaringan lain, komputer mengirim paketnya ke default gateway, yaitu router, bukan langsung ke tujuan. Router membaca alamat IP tujuan pada paket, lalu memutuskan ke mana paket itu diteruskan berikutnya. Titik tujuan berikutnya itu disebut next hop. Paket bisa melewati beberapa router (beberapa hop) sebelum sampai.",
        "Setiap antarmuka (interface) router berada di jaringan yang berbeda. Karena itu router juga memisahkan broadcast domain: pesan broadcast dari satu jaringan tidak diteruskan ke jaringan lain. Pada setiap paket ada nilai TTL yang berkurang 1 setiap melewati router. Kalau nilainya habis, paket dibuang. Nilai TTL inilah yang dimanfaatkan oleh perintah tracert."
      ],
      example: "Laptop 192.168.1.10 ingin menghubungi server 10.0.0.5. Karena server berada di jaringan lain, laptop mengirim paket ke gateway 192.168.1.1. Router lalu meneruskannya sampai ke jaringan server.",
      practice: "Gambar dua jaringan: LAN A (192.168.1.0/24) dan LAN B (192.168.2.0/24), dihubungkan oleh satu router. Tulis alamat IP router di sisi LAN A dan di sisi LAN B. Lalu tulis urutan jalur sebuah paket dari komputer di LAN A ke komputer di LAN B.",
      summary: "Routing menentukan jalur data antar jaringan. Router membaca alamat IP tujuan, meneruskan paket ke next hop, dan memisahkan broadcast domain."
    },
    {
      id: "3.1.2",
      title: "Tabel routing dan default route",
      body: [
        "Router memakai tabel routing sebagai petunjuk jalan. Setiap baris tabel biasanya berisi jaringan tujuan beserta prefix-nya, next hop (gateway), antarmuka keluar, dan metric (nilai biaya jalur). Jaringan yang terhubung langsung ke router otomatis masuk ke tabel.",
        "Saat sebuah paket datang, router mencari baris yang cocok dengan alamat tujuan. Kalau ada lebih dari satu yang cocok, router memilih yang paling spesifik, yaitu yang prefix-nya paling panjang. Contohnya, rute /24 lebih dipilih daripada rute /16 untuk alamat yang sama. Misalnya, tujuan 192.168.1.50 cocok dengan rute 192.168.1.0/24 dan juga dengan rute 192.168.0.0/16. Router memilih rute 192.168.1.0/24 karena lebih spesifik (prefix /24 lebih panjang daripada /16).",
        "Default route adalah rute cadangan yang dipakai kalau tidak ada baris lain yang cocok. Penulisannya 0.0.0.0/0 dan biasanya menunjuk ke penyedia internet (ISP). Kalau tidak ada rute yang cocok dan tidak ada default route, paket dibuang."
      ],
      example: "Sebuah router punya tiga baris tabel: 192.168.1.0/24 terhubung langsung lewat antarmuka eth0, 192.168.2.0/24 terhubung langsung lewat eth1, dan 0.0.0.0/0 lewat next hop 203.0.113.1 milik ISP.",
      practice: "Gunakan tabel pada contoh di atas. Tentukan ke mana router mengirim paket yang tujuannya 192.168.2.50, 8.8.8.8, dan 192.168.1.7. Tulis alasanmu untuk tiap jawaban.",
      summary: "Tabel routing memuat tujuan, next hop, antarmuka, dan metric. Rute paling spesifik dipilih lebih dulu, dan default route 0.0.0.0/0 dipakai bila tidak ada yang cocok."
    },
    {
      id: "3.1.3",
      title: "Routing statis",
      body: [
        "Rute statis adalah rute yang ditulis secara manual oleh administrator. Kelebihannya sederhana, tidak membebani router, dan mudah ditebak jalurnya, sehingga cocok untuk jaringan kecil. Kekurangannya harus diatur satu per satu dan tidak menyesuaikan diri secara otomatis kalau ada jalur yang putus. Pada jaringan besar, cara ini merepotkan.",
        "Next hop pada rute statis harus berada di jaringan yang terhubung langsung dengan router itu. Contoh di Linux: ip route add 192.168.2.0/24 via 192.168.1.254. Contoh di Windows: route add 192.168.2.0 mask 255.255.255.0 192.168.1.254. Kedua perintah ini hanya contoh bentuk konfigurasi, bukan untuk dijalankan sembarangan pada perangkat yang sedang aktif dipakai. Perangkat jaringan seperti router Cisco juga punya perintah sendiri, yang akan kamu temui di pelajaran Cisco.",
        "Routing dinamis, yaitu router saling bertukar informasi rute secara otomatis, dipelajari di Tingkat 4. Penting: jangan menambah atau menghapus rute pada komputer atau router yang dipakai untuk operasional jaringan. Praktik menambah rute hanya boleh dilakukan di perangkat milik sendiri atau di lab dengan izin gurumu."
      ],
      example: "Sekolah punya dua gedung, masing-masing dengan router sendiri. Administrator menambahkan rute statis di tiap router yang menunjuk ke jaringan gedung satunya lagi, sehingga komputer di kedua gedung bisa saling berkomunikasi.",
      practice: "Di kertas, tulis perintah rute statis (format Linux) agar sebuah router bisa menjangkau jaringan 192.168.2.0/24 lewat next hop 192.168.1.254. Lalu jelaskan satu kelebihan dan satu kekurangan rute statis.",
      summary: "Rute statis ditulis manual, sederhana, dan cocok untuk jaringan kecil. Kekurangannya tidak otomatis menyesuaikan diri dan sulit untuk jaringan besar."
    },
    {
      id: "3.1.4",
      title: "Praktik melihat tabel routing dan jalur data",
      body: [
        "Di Windows, perintah route print menampilkan tabel routing. Di Linux, gunakan ip route. Baris default route di Windows berupa 0.0.0.0 dengan mask 0.0.0.0, sedangkan di Linux tertulis default via diikuti alamat gateway. Di Termux atau HP Android, perintah ini bisa dibatasi oleh sistem, jadi lakukan praktik di komputer lab kalau gagal.",
        "Langkah praktik: (1) jalankan ipconfig (Windows) atau ip addr (Linux) dan catat alamat default gateway, (2) jalankan route print atau ip route, (3) cari baris default route dan cocokkan alamat gatewaynya dengan langkah 1, dan (4) jalankan tracert google.com atau traceroute google.com, lalu lihat hop pertama. Hop pertama sering kali sama dengan default gateway, tetapi bisa berbeda kalau kamu memakai VPN atau routing khusus.",
        "Pada praktik ini kamu hanya melihat, tidak mengubah. Jangan menambah atau menghapus rute di komputer yang bukan milikmu atau yang dipakai bersama tanpa izin gurumu."
      ],
      example: "Sebuah komputer tidak bisa membuka internet. Teknisi menjalankan route print dan melihat tidak ada baris default route. Ia lalu memperbaiki pengaturan gateway pada komputer itu, dan internet kembali normal.",
      practice: "Lakukan empat langkah praktik di atas. Tulis alamat default gateway-mu, tulis baris default route yang kamu temukan, dan jawab: apakah hop pertama tracert sama dengan default gateway?",
      summary: "route print (Windows) dan ip route (Linux) menampilkan tabel routing. Default route menunjuk ke gateway, dan hop pertama tracert sering kali adalah gateway itu."
    }
  ],
  quiz: [
    { q: "Perangkat yang menentukan jalur paket antar jaringan yang berbeda adalah…", o: ["Hub", "Kabel UTP", "Router"], a: 2 },
    { q: "Untuk memutuskan ke mana paket dikirim, router membaca…", o: ["Alamat IP tujuan", "Warna kabel", "Nama pengguna"], a: 0 },
    { q: "Rute yang dipakai bila tidak ada baris lain yang cocok disebut…", o: ["Rute broadcast", "Default route", "Rute loopback"], a: 1 },
    { q: "Default route ditulis sebagai…", o: ["255.255.255.255/32", "127.0.0.0/8", "0.0.0.0/0"], a: 2 },
    { q: "Rute statis adalah rute yang…", o: ["Dibuat otomatis oleh protokol", "Ditulis manual oleh administrator", "Hanya dipakai untuk internet"], a: 1 },
    { q: "Perintah Windows untuk melihat tabel routing adalah…", o: ["route print", "arp -a", "nslookup"], a: 0 }
  ]
};
