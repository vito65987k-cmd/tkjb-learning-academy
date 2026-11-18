import { COURSES } from "./materi.js";

const oldNet = COURSES.find((c) => c.id === "net").lessons;
const L = (i, id) => ({ ...oldNet[i], id, legacy: i });
const bab = (id, title, lessons = [], quiz = []) => ({ id, title, lessons, quiz });
const lvl = (id, title, goal, titles) => ({ id, title, goal, babs: titles.map((t, i) => bab(`${id}.${i + 1}`, t)), exam: [] });

export const CURRICULUM = {
  net: {
    passScore: 70,
    levels: [
      {
        id: "1",
        title: "Tingkat 1 – Pemula",
        goal: "Mengenal jaringan, perangkat, alamat IP, dan cara menguji koneksi.",
        babs: [
          bab("1.1", "Konsep dan Perangkat Jaringan", [L(0, "1.1.1"), L(1, "1.1.2"), L(2, "1.1.3")], [
            { q: "Dua perangkat atau lebih yang saling terhubung untuk bertukar data disebut…", o: ["Jaringan komputer", "Sistem operasi", "Basis data"], a: 0 },
            { q: "Jaringan yang mencakup satu lab komputer sekolah termasuk jenis…", o: ["WAN", "LAN", "MAN"], a: 1 },
            { q: "Perangkat yang menghubungkan satu jaringan dengan jaringan lain, misalnya ke internet:", o: ["Switch", "Kabel UTP", "Router"], a: 2 },
            { q: "Perangkat yang menghubungkan banyak komputer dalam satu jaringan lokal:", o: ["Switch", "Printer", "Monitor"], a: 0 },
            { q: "Pada topologi star, semua komputer terhubung ke…", o: ["Satu kabel utama", "Satu switch di tengah", "Komputer pertama"], a: 1 },
          ]),
          bab("1.2", "Media Transmisi dan Kabel UTP"),
          bab("1.3", "Alamat IP dan Model OSI", [L(3, "1.3.1"), L(4, "1.3.2")]),
          bab("1.4", "Menguji Koneksi dan Alat Dasar"),
        ],
        exam: [
          { q: "Alamat berikut yang termasuk alamat IPv4 jaringan lokal adalah…", o: ["192.168.1.10", "300.400.1.1", "abc.def.ghi.jkl"], a: 0 },
          { q: "Jumlah lapisan pada model OSI:", o: ["5", "7", "4"], a: 1 },
          { q: "Perintah untuk menguji apakah komputer bisa menjangkau perangkat lain:", o: ["copy", "edit", "ping"], a: 2 },
          { q: "Protokol yang membagikan alamat IP secara otomatis:", o: ["HTTP", "DHCP", "FTP"], a: 1 },
          { q: "Jika kabel jaringan lepas, masalah ada di lapisan OSI…", o: ["Application", "Physical", "Session"], a: 1 },
          { q: "Media kabel yang paling umum di jaringan lokal:", o: ["Kabel listrik", "Kabel antena", "Kabel UTP"], a: 2 },
        ],
      },
      lvl("2", "Tingkat 2 – Dasar Lanjutan", "Subnetting, switching, Wi-Fi, dan layanan jaringan dasar.", ["Subnetting IPv4", "Ethernet dan Switching Dasar", "Wi-Fi dan Jaringan Nirkabel", "DNS, DHCP, dan Layanan Dasar"]),
      lvl("3", "Tingkat 3 – Menengah", "Routing, VLAN, server jaringan, dan keamanan dasar.", ["Routing dan Gateway", "VLAN dan Segmentasi", "Server Jaringan: Web, File, Proxy", "Keamanan Jaringan Dasar"]),
      lvl("4", "Tingkat 4 – Menengah Lanjutan", "IPv6, routing dinamis, monitoring, dan troubleshooting sistematis.", ["IPv6", "Routing Dinamis", "Monitoring dan Log", "Troubleshooting Sistematis"]),
      lvl("5", "Tingkat 5 – Mahir", "Merancang, mengamankan, dan mendokumentasikan jaringan sekolah atau kantor.", ["Merancang Jaringan Sekolah atau Kantor", "VPN dan Akses Jarak Jauh", "Optimasi dan Keandalan Jaringan", "Dokumentasi dan Proyek Akhir"]),
    ],
  },
};
