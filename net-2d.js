export const B24 = {
  lessons: [
    {
      id: "2.4.1",
      title: "DNS: buku telepon internet",
      body: [
        "DNS (Domain Name System) menerjemahkan nama situs yang mudah diingat, seperti google.com, menjadi alamat IP yang dipakai komputer. Tanpa DNS, kita harus menghafal alamat IP setiap situs.",
        "Cara kerjanya secara sederhana: browser menanyakan alamat IP sebuah nama ke server DNS, lalu server DNS menjawab dengan alamat IP-nya. Hasil jawaban sering disimpan sementara (cache) supaya pertanyaan berikutnya lebih cepat. Server DNS biasanya diberikan otomatis oleh router atau penyedia internet (ISP). Kita juga bisa memakai DNS publik, misalnya 8.8.8.8 milik Google atau 1.1.1.1 milik Cloudflare.",
        "DNS memakai port 53. Kalau DNS bermasalah, internet bisa terasa mati padahal koneksi sebenarnya normal: ping ke alamat IP berhasil, tetapi ping ke nama situs gagal."
      ],
      example: "Saat kamu mengetik google.com di browser, komputermu bertanya ke server DNS, lalu server menjawab dengan alamat IP situs itu. Setelah itu browser terhubung ke alamat IP tersebut.",
      practice: "Di Command Prompt, jalankan ipconfig /all dan cari baris DNS Servers. Catat alamatnya. Lalu bandingkan ping 8.8.8.8 dengan ping google.com dan tulis apa yang kamu perhatikan.",
      summary: "DNS menerjemahkan nama situs menjadi alamat IP. Server DNS biasanya diberikan otomatis, dan DNS yang bermasalah membuat nama situs tidak bisa dibuka walaupun koneksi normal."
    },
    {
      id: "2.4.2",
      title: "DHCP dan proses DORA",
      body: [
        "DHCP (Dynamic Host Configuration Protocol) membagikan pengaturan jaringan secara otomatis kepada perangkat, yaitu alamat IP, subnet mask, gateway, dan alamat DNS. Server DHCP biasanya ada di router. Dengan DHCP, teknisi tidak perlu mengatur alamat di setiap komputer satu per satu.",
        "Prosesnya terdiri dari empat tahap yang disingkat DORA: (1) Discover, perangkat berteriak mencari server DHCP, (2) Offer, server menawarkan sebuah alamat IP, (3) Request, perangkat meminta alamat yang ditawarkan itu, dan (4) Acknowledge, server mengonfirmasi dan alamat resmi dipakai.",
        "Alamat dari DHCP dipinjamkan untuk waktu tertentu yang disebut lease (masa sewa). Sebelum masa sewa habis, perangkat meminta perpanjangan. Kalau perangkat gagal mendapat alamat, Windows memberi alamat darurat berawalan 169.254.x.x. Perangkat yang butuh alamat tetap, misalnya printer, bisa diberi alamat statis di luar rentang DHCP atau dibuat reservasi di router."
      ],
      example: "Siswa membawa laptop ke lab dan menyambungkannya ke jaringan. Dalam beberapa detik laptop itu mendapat alamat IP, gateway, dan DNS dari router lewat DHCP tanpa diatur manual.",
      practice: "Di Command Prompt, jalankan ipconfig /all. Cari baris DHCP Server, Lease Obtained, dan Lease Expires. Catat alamat server DHCP dan kapan masa sewa alamatmu berakhir.",
      summary: "DHCP membagikan pengaturan jaringan secara otomatis lewat empat tahap DORA: Discover, Offer, Request, Acknowledge. Alamat dipinjamkan dalam masa sewa (lease)."
    },
    {
      id: "2.4.3",
      title: "Layanan jaringan lain: HTTP, HTTPS, FTP, dan email",
      body: [
        "Setiap layanan jaringan memakai port, yaitu nomor yang berfungsi seperti pintu di sebuah komputer. Alamat IP menunjukkan komputer mana yang dituju, sedangkan port menunjukkan layanan mana yang dituju.",
        "Beberapa layanan dan port umum: HTTP untuk web biasa (port 80), HTTPS untuk web yang dienkripsi (port 443), FTP untuk transfer file (port 21), SMTP untuk mengirim email (port 25, dan 587 untuk pengiriman dari aplikasi email), POP3 dan IMAP untuk menerima email (port 110 dan 143), serta DNS (port 53).",
        "HTTPS lebih aman daripada HTTP karena datanya dienkripsi, sehingga lebih sulit dibaca orang lain. Cara mengenali HTTPS di browser adalah ikon gembok di samping alamat situs. Namun, gembok hanya menunjukkan bahwa koneksinya terenkripsi. Gembok bukan jaminan bahwa situs itu pasti terpercaya, karena situs penipuan pun bisa memakai HTTPS.",
        "FTP biasa tidak dienkripsi. SFTP adalah protokol transfer file yang aman dan berbeda dari FTP biasa, karena datanya dienkripsi. FTPS adalah FTP yang ditambah enkripsi. Untuk data penting, gunakan SFTP atau FTPS."
      ],
      example: "Sekolah memiliki server yang menjalankan situs sekolah (HTTPS), tempat mengunggah file tugas (SFTP), dan layanan email sekolah. Satu server bisa menjalankan beberapa layanan sekaligus karena tiap layanan memakai port yang berbeda.",
      practice: "Buat tabel di bukumu berisi empat kolom: layanan, kegunaan, port, dan apakah dienkripsi. Isi untuk HTTP, HTTPS, FTP, SMTP, dan DNS. Lalu buka tiga situs di browser dan catat mana yang memakai HTTPS.",
      summary: "Port adalah pintu layanan di sebuah komputer. HTTP memakai port 80, HTTPS 443, FTP 21, SMTP 25, dan DNS 53. HTTPS lebih aman karena datanya dienkripsi."
    },
    {
      id: "2.4.4",
      title: "Praktik nslookup dan memperbarui alamat IP",
      body: [
        "Perintah nslookup menanyakan alamat IP dari sebuah nama situs langsung ke server DNS. Contoh: nslookup google.com. Hasilnya menampilkan server DNS yang menjawab dan alamat IP situs itu.",
        "Di Windows, ada tiga perintah yang berguna: ipconfig /release melepas alamat IP dari DHCP, ipconfig /renew meminta alamat IP baru dari DHCP, dan ipconfig /flushdns membersihkan cache DNS. Hati-hati: koneksi akan terputus sebentar saat release dan renew dijalankan.",
        "Langkah praktik: (1) jalankan nslookup google.com dan catat server DNS serta alamat IP yang muncul, (2) jalankan ipconfig /all dan catat alamat IP serta server DHCP, (3) jalankan ipconfig /release lalu ipconfig /renew, dan (4) jalankan ipconfig lagi lalu bandingkan alamat IP sebelum dan sesudah. Alamat bisa sama atau berbeda. Di Linux dan Termux, nslookup mungkin harus dipasang dahulu dan cara memperbarui alamat berbeda-beda, jadi tanyakan dahulu kepada gurumu. Praktik ipconfig /release dan /renew hanya boleh dilakukan pada komputermu sendiri atau komputer lab yang secara khusus diizinkan oleh gurumu. Jangan melakukannya pada komputer yang sedang dipakai bersama orang lain atau yang dibutuhkan untuk operasional jaringan, karena koneksinya bisa terputus dan mengganggu pengguna lain."
      ],
      example: "Komputer di lab mendapat alamat berawalan 169.254. Teknisi menjalankan ipconfig /renew dan komputer mendapat alamat normal. Di komputer lain, situs terasa lambat dibuka, jadi teknisi menjalankan ipconfig /flushdns lalu mencoba lagi.",
      practice: "Lakukan empat langkah praktik di atas bersama gurumu di komputer lab. Catat alamat IP sebelum dan sesudah renew, dan jawab: apakah alamatnya berubah, dan mengapa menurutmu begitu?",
      summary: "nslookup menanyakan alamat IP ke server DNS. ipconfig /release dan /renew memperbarui alamat dari DHCP, dan /flushdns membersihkan cache DNS."
    }
  ],
  quiz: [
    { q: "Fungsi utama DNS adalah…", o: ["Membagikan alamat IP otomatis", "Menerjemahkan nama situs menjadi alamat IP", "Menguji kabel jaringan"], a: 1 },
    { q: "Contoh alamat DNS publik yang umum dipakai adalah…", o: ["8.8.8.8", "192.168.1.1", "169.254.1.1"], a: 0 },
    { q: "Urutan empat tahap proses DHCP yang benar adalah…", o: ["Offer, Discover, Acknowledge, Request", "Request, Offer, Discover, Acknowledge", "Discover, Offer, Request, Acknowledge"], a: 2 },
    { q: "Lama waktu sebuah alamat IP dipinjamkan oleh DHCP disebut…", o: ["Subnet", "Lease (masa sewa)", "Gateway"], a: 1 },
    { q: "Layanan web yang datanya dienkripsi dan memakai port 443 adalah…", o: ["FTP", "HTTP", "HTTPS"], a: 2 },
    { q: "Perintah Windows untuk menanyakan alamat IP sebuah nama situs ke server DNS:", o: ["nslookup", "tracert", "arp -a"], a: 0 }
  ]
};
