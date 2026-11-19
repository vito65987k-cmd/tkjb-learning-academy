export const B21 = {
  lessons: [
    {
      id: "2.1.1",
      title: "Bilangan biner dan alamat IP",
      body: [
        "Komputer bekerja dengan bilangan biner, yaitu hanya angka 0 dan 1. Alamat IPv4 sebenarnya terdiri dari 32 bit. Bit-bit itu dibagi menjadi 4 kelompok yang masing-masing berisi 8 bit, disebut oktet, lalu ditulis dalam angka desimal yang dipisah titik, misalnya 192.168.10.1.",
        "Satu oktet punya 8 bit, jadi nilainya bisa dari 0 sampai 255 (ada 256 kemungkinan). Nilai tiap posisi bit dari kiri ke kanan adalah 128, 64, 32, 16, 8, 4, 2, 1. Untuk mengubah desimal ke biner, tulis angka 1 pada nilai yang dipakai dan angka 0 pada nilai yang tidak dipakai. Contoh: 192 = 128 + 64, jadi biner-nya 11000000. Contoh lain: 168 = 128 + 32 + 8, jadi biner-nya 10101000.",
        "Dengan cara yang sama, 10 menjadi 00001010 dan 1 menjadi 00000001. Maka alamat 192.168.10.1 dalam biner adalah 11000000.10101000.00001010.00000001."
      ],
      example: "Subnet mask 255.255.255.0 dalam biner adalah 11111111.11111111.11111111.00000000. Angka 255 berarti kedelapan bit-nya bernilai 1.",
      practice: "Ubah angka 10, 100, dan 200 menjadi biner 8 bit dengan cara menjumlahkan nilai posisi (128, 64, 32, 16, 8, 4, 2, 1). Lalu periksa hasilmu dengan kalkulator di HP (mode programmer) atau bertanya kepada gurumu.",
      summary: "IPv4 terdiri dari 32 bit yang dibagi menjadi 4 oktet. Satu oktet bernilai 0 sampai 255. Nilai posisi bit: 128, 64, 32, 16, 8, 4, 2, 1."
    },
    {
      id: "2.1.2",
      title: "Notasi CIDR dan subnet mask",
      body: [
        "Subnet mask menandai bagian mana dari alamat IP yang menjadi bagian jaringan. Bit bernilai 1 adalah bagian jaringan, bit bernilai 0 adalah bagian perangkat (host). Bit 1 selalu berurutan dari kiri.",
        "Notasi CIDR menulis jumlah bit 1 pada mask setelah garis miring. Contoh: /24 berarti 24 bit pertama adalah bagian jaringan, setara dengan mask 255.255.255.0. Begitu pula /16 setara 255.255.0.0, dan /8 setara 255.0.0.0.",
        "Beberapa mask yang sering dipakai pada oktet terakhir: /25 = 255.255.255.128, /26 = 255.255.255.192, /27 = 255.255.255.224, /28 = 255.255.255.240, /29 = 255.255.255.248, dan /30 = 255.255.255.252. Semakin besar angka setelah garis miring, semakin kecil jaringannya."
      ],
      example: "Alamat 192.168.1.10/24 berarti tiga oktet pertama (192.168.1) adalah bagian jaringan, dan oktet terakhir (10) adalah bagian perangkat. Alamat jaringannya 192.168.1.0.",
      practice: "Tulis mask desimal untuk /16, /26, dan /28. Petunjuk: hitung bit 1 pada oktet yang berubah, lalu jumlahkan nilai posisinya (128, 64, 32, 16, ...).",
      summary: "CIDR menulis jumlah bit jaringan, misalnya /24 = 255.255.255.0. Semakin besar angkanya, semakin kecil jaringannya."
    },
    {
      id: "2.1.3",
      title: "Menghitung jumlah host dan subnet",
      body: [
        "Jumlah bit host dihitung dari 32 dikurangi angka prefix. Jumlah seluruh alamat dalam satu jaringan adalah 2 pangkat jumlah bit host. Dua alamat tidak bisa dipakai perangkat: alamat pertama (alamat jaringan) dan alamat terakhir (alamat broadcast). Jadi jumlah host yang bisa dipakai adalah 2 pangkat bit host dikurangi 2.",
        "Contoh /24: bit host = 8, jadi 256 alamat dan 254 host. Contoh /26: bit host = 6, jadi 64 alamat dan 62 host. Contoh /30: bit host = 2, jadi 4 alamat dan 2 host (sering dipakai untuk sambungan antar dua router).",
        "Untuk membagi jaringan, kita meminjam bit dari bagian host. Jika meminjam n bit, kita mendapat 2 pangkat n subnet. Dari /24 meminjam 2 bit menjadi /26, sehingga didapat 4 subnet dengan ukuran blok 64 alamat: mulai dari .0, .64, .128, dan .192."
      ],
      example: "Pada 192.168.1.0/26: alamat jaringan 192.168.1.0, host yang bisa dipakai 192.168.1.1 sampai 192.168.1.62, dan alamat broadcast 192.168.1.63. Subnet berikutnya dimulai dari 192.168.1.64.",
      practice: "Hitung jumlah host yang bisa dipakai pada jaringan /27, /28, dan /29. Tulis langkahmu: bit host, jumlah alamat, lalu kurangi 2.",
      summary: "Host yang bisa dipakai = 2 pangkat bit host dikurangi 2. Meminjam n bit menghasilkan 2 pangkat n subnet."
    },
    {
      id: "2.1.4",
      title: "Praktik membagi satu jaringan menjadi beberapa subnet",
      body: [
        "Skenario: sekolah memiliki jaringan 192.168.10.0/24 dan ingin membaginya menjadi 4 subnet yang sama besar untuk Lab 1, Lab 2, ruang guru, dan Wi-Fi siswa.",
        "Langkah: (1) tentukan jumlah subnet yang dibutuhkan, yaitu 4, (2) cari jumlah bit yang dipinjam, yaitu 2 bit karena 2 pangkat 2 sama dengan 4, (3) tentukan prefix baru, yaitu /24 + 2 = /26 dengan mask 255.255.255.192, (4) hitung ukuran blok, yaitu 256 dikurangi 192 sama dengan 64, lalu (5) tulis rentang tiap subnet.",
        "Hasilnya: Subnet 1 = 192.168.10.0/26 (host .1 sampai .62, broadcast .63). Subnet 2 = 192.168.10.64/26 (host .65 sampai .126, broadcast .127). Subnet 3 = 192.168.10.128/26 (host .129 sampai .190, broadcast .191). Subnet 4 = 192.168.10.192/26 (host .193 sampai .254, broadcast .255). Tiap subnet punya 62 host yang bisa dipakai."
      ],
      example: "Dengan pembagian ini, tiap ruangan punya subnet sendiri. Teknisi lebih mudah mengatur dan mencari masalah karena alamat IP tiap ruangan sudah terpisah dan jelas.",
      practice: "Bagi jaringan 192.168.20.0/24 menjadi 2 subnet yang sama besar. Tulis prefix barunya, alamat jaringan, rentang host, dan alamat broadcast tiap subnet. Periksa hasilnya bersama gurumu.",
      summary: "Langkah subnetting: tentukan jumlah subnet, pinjam bit, cari prefix baru, hitung ukuran blok, lalu tulis rentang alamat tiap subnet."
    }
  ],
  quiz: [
    { q: "Alamat IPv4 terdiri dari berapa bit?", o: ["32 bit", "8 bit", "128 bit"], a: 0 },
    { q: "Nilai terbesar yang bisa ada pada satu oktet adalah…", o: ["256", "255", "128"], a: 1 },
    { q: "Untuk membagi jaringan /24 menjadi 4 subnet yang sama besar, prefix barunya adalah…", o: ["/25", "/27", "/26"], a: 2 },
    { q: "Notasi /24 setara dengan subnet mask…", o: ["255.255.0.0", "255.255.255.0", "255.255.255.128"], a: 1 },
    { q: "Jumlah host yang bisa dipakai pada jaringan /26 adalah…", o: ["62", "64", "30"], a: 0 },
    { q: "Alamat broadcast pada jaringan 192.168.1.0/26 adalah…", o: ["192.168.1.62", "192.168.1.64", "192.168.1.63"], a: 2 }
  ]
};
