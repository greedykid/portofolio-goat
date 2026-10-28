# Product Requirements Document (PRD)

## Website Portofolio Pribadi Berbasis Next.js

| Informasi | Detail |
|---|---|
| Nama produk | Personal Portfolio Website |
| Dokumen | Product Requirements Document (PRD) |
| Versi dokumen | 1.2 |
| Terakhir diperbarui | 28 Oktober 2026 |
| Status | Draft siap dijadikan acuan pengembangan |
| Platform | Website responsif, deployment di Vercel |
| Framework utama | Next.js dengan App Router |
| Bahasa utama website | Bahasa Indonesia |
| Target pengguna | Recruiter, HR, calon klien, kolaborator, dan pengunjung profesional |

---

## 1. Ringkasan Produk

Website portofolio pribadi merupakan website profesional untuk menampilkan profil, pendidikan, keahlian, pengalaman, sertifikat, akun media sosial, proyek, dan sarana bagi pengunjung untuk mengirim pesan. Website harus membantu pengunjung memahami identitas profesional pemilik, melihat bukti kompetensi, menemukan tautan profil profesional, dan menghubungi pemilik dengan mudah.

Website dibangun menggunakan Next.js dan dirancang dengan pendekatan **single-page portfolio**: konten utama berada pada satu halaman yang dibagi menjadi beberapa section dengan navigasi anchor. Struktur ini menjaga pengalaman menjelajah tetap sederhana, cepat, dan nyaman di desktop maupun perangkat seluler.

Konten profil sebaiknya dikelola dari satu file data terpusat agar informasi seperti skill, pengalaman, sertifikat, dan tautan media sosial mudah diperbarui tanpa mengubah komponen tampilan.

### 1.1 Profil Pemilik dan Konten Awal

Data berikut merupakan informasi awal yang sudah diberikan pemilik dan harus menjadi konten awal website. Jangan mengganti nama, username, teknologi, nama proyek, atau alamat email tanpa persetujuan pemilik.

| Informasi | Data awal |
|---|---|
| Nama pemilik | **Rian Hartokusumo** |
| Pendidikan terakhir | Lulusan S1 Sistem Informasi, Universitas Gunadarma |
| Headline yang direkomendasikan | Lulusan S1 Sistem Informasi — Web Developer |
| Email kontak | `rianharto1945@gmail.com` |
| Instagram | `ini.yannnn` — https://www.instagram.com/ini.yannnn/ |
| TikTok | `yannnzyyy` — https://www.tiktok.com/@yannnzyyy |
| Proyek/pengalaman 1 | Website penjualan untuk toko vape **More Vapor** |
| Proyek/pengalaman 2 | Website pemesanan untuk toko baju; nama toko belum diberikan |

**Draf ringkasan Tentang:**

> Saya Rian Hartokusumo, lulusan S1 Sistem Informasi Universitas Gunadarma yang memiliki minat di bidang web development. Saya telah membuat website penjualan untuk toko vape More Vapor dan website pemesanan untuk toko baju. Dalam pengembangan web, saya menggunakan teknologi seperti Laravel, PHP, MySQL, dan Bootstrap, serta tools pendukung produktivitas dan konten seperti Microsoft Office, Canva, dan CapCut.

Gunakan ringkasan ini sebagai draf awal yang dapat ditinjau pemilik sebelum website dipublikasikan. Tahun kelulusan, periode proyek, detail fitur proyek, tautan demo/repository, sertifikat, foto profil, dan CV belum diberikan; jangan mengarang data tersebut. Bagian yang belum memiliki data nyata harus bisa dibiarkan kosong atau disembunyikan secara terkontrol sampai pemilik melengkapinya.

## 2. Latar Belakang dan Masalah

Pemilik portofolio membutuhkan satu tempat yang profesional untuk merangkum informasi yang biasanya tersebar di CV, LinkedIn, GitHub, sertifikat digital, dan platform lainnya. Tanpa portofolio terpusat, recruiter atau calon klien perlu membuka banyak sumber untuk memahami kemampuan dan pengalaman pemilik.

Website ini menjawab kebutuhan tersebut dengan menyediakan:

- Profil dan ringkasan profesional yang mudah dipahami.
- Informasi pendidikan, skill, pengalaman, serta sertifikat yang tersusun konsisten.
- Tautan ke akun media sosial dan platform profesional.
- Bagian proyek untuk menunjukkan hasil pekerjaan secara konkret.
- Formulir pesan agar pengunjung dapat mengirim pertanyaan atau penawaran.

## 3. Tujuan Produk

### 3.1 Tujuan utama

1. Menjadi pusat informasi profesional pemilik portofolio.
2. Menampilkan kompetensi dan pengalaman melalui informasi yang terstruktur.
3. Mempermudah recruiter, HR, calon klien, atau kolaborator menghubungi pemilik.
4. Menyediakan website yang cepat, responsif, mudah diakses, dan ramah mesin pencari.
5. Memudahkan pemilik memperbarui isi portofolio tanpa perubahan besar pada kode.

### 3.2 Indikator keberhasilan

- Semua section wajib tampil dan dapat diakses melalui navigasi.
- Website dapat digunakan dengan baik pada ponsel, tablet, dan desktop.
- Seluruh tombol, tautan, serta formulir berfungsi sesuai tujuannya.
- Formulir memberikan status berhasil atau gagal yang jelas.
- Tidak terdapat error build, error runtime kritis, atau tautan internal yang rusak.
- Konten utama dapat ditemukan oleh mesin pencari melalui metadata yang sesuai.
- Konten inti tetap dapat dibaca ketika JavaScript interaktif belum selesai dimuat.

## 4. Ruang Lingkup

### 4.1 Fitur wajib (MVP)

1. **Tentang** — pengenalan, ringkasan profesional, foto profil opsional, dan tombol tindakan utama.
2. **Pendidikan** — riwayat pendidikan beserta institusi, program studi, dan periode.
3. **Skill** — daftar keahlian teknis dan nonteknis yang dikelompokkan.
4. **Pengalaman** — pengalaman kerja, magang, freelance, organisasi, atau pengalaman relevan lainnya.
5. **Sertifikat** — daftar sertifikat dengan penerbit, tanggal, dan tautan bukti bila tersedia.
6. **Akun media sosial** — tautan menuju platform profesional dan repositori.
7. **Kirim pesan** — formulir kontak tervalidasi dengan status pengiriman.

### 4.2 Fitur tambahan yang direkomendasikan

- **Proyek unggulan** untuk menampilkan aplikasi, website, penelitian, atau proyek yang pernah dibuat.
- Tombol unduh CV dalam format PDF.
- Navigasi aktif berdasarkan section yang sedang terlihat.
- Animasi ringan saat section masuk ke viewport.
- Tema gelap/terang, jika tidak mengurangi keterbacaan atau performa.
- Halaman khusus proyek pada fase berikutnya, misalnya `/projects/[slug]`.

### 4.3 Di luar ruang lingkup MVP

- Dashboard admin dan CMS untuk mengelola konten.
- Sistem login atau registrasi pengguna.
- Database untuk menyimpan seluruh data portofolio.
- Blog lengkap dengan sistem kategori dan komentar.
- Live chat atau chatbot pada website portofolio.
- Analitik pengunjung yang mengidentifikasi pengguna secara pribadi.
- Fitur multibahasa penuh.

Fitur di luar ruang lingkup dapat ditambahkan pada versi berikutnya setelah kebutuhan MVP terpenuhi.

## 5. Target Pengguna dan Kebutuhan

### 5.1 Recruiter atau HR

**Kebutuhan:** Memahami profil, pendidikan, skill, pengalaman, dan bukti kompetensi dengan cepat.

**Solusi:** Ringkasan profil yang jelas, section yang mudah dipindai, tautan CV, serta informasi kontak yang mudah ditemukan.

### 5.2 Calon klien atau pemberi proyek

**Kebutuhan:** Mengetahui layanan atau keahlian pemilik dan melihat contoh hasil pekerjaan.

**Solusi:** Kategori skill, bagian proyek unggulan, tautan demonstrasi, repositori, dan formulir kontak.

### 5.3 Kolaborator atau sesama profesional

**Kebutuhan:** Menemukan profil profesional dan kanal komunikasi yang sesuai.

**Solusi:** Tautan media sosial profesional dan informasi kontak.

### 5.4 Pemilik portofolio

**Kebutuhan:** Memperbarui informasi tanpa harus menulis ulang komponen satu per satu.

**Solusi:** Konten statis dikelola pada file data terpusat dan komponen dibuat reusable.

## 6. User Stories

- Sebagai pengunjung, saya ingin memahami siapa pemilik portofolio dan bidang yang dikuasainya.
- Sebagai recruiter, saya ingin melihat pendidikan, skill, dan pengalamannya agar dapat menilai kecocokannya dengan posisi yang tersedia.
- Sebagai pengunjung, saya ingin membuka sertifikat untuk memverifikasi kompetensi yang tercantum.
- Sebagai calon klien, saya ingin melihat proyek dan membuka demo atau repositori terkait.
- Sebagai pengunjung, saya ingin membuka akun media sosial profesional pemilik.
- Sebagai pengunjung, saya ingin mengirim pesan dan menerima konfirmasi bahwa pesan berhasil dikirim.
- Sebagai pemilik, saya ingin memperbarui informasi portofolio dari satu sumber data.
- Sebagai pengguna ponsel, saya ingin menggunakan website tanpa harus memperbesar layar atau menggulir secara horizontal.

## 7. Struktur Informasi dan Navigasi

### 7.1 Struktur halaman MVP

Halaman utama: `/`

Urutan section yang direkomendasikan:

1. Header dan navigasi.
2. Hero / Tentang.
3. Pendidikan.
4. Skill.
5. Pengalaman.
6. Proyek unggulan (opsional, tetapi direkomendasikan).
7. Sertifikat.
8. Media sosial.
9. Kirim pesan / Kontak.
10. Footer.

### 7.2 Navigasi

Navigasi desktop menggunakan menu horizontal. Navigasi mobile menggunakan menu ringkas yang dapat dibuka dan ditutup.

Label menu wajib:

- Tentang
- Pendidikan
- Skill
- Pengalaman
- Sertifikat
- Kontak

Menu **Proyek** dapat ditampilkan apabila section proyek diaktifkan. Bagian Media Sosial bisa menjadi section tersendiri atau ditampilkan sebagai kumpulan tautan di bagian kontak dan footer.

Setiap menu mengarah ke ID section terkait menggunakan anchor, misalnya `#tentang`, `#pendidikan`, `#skill`, `#pengalaman`, `#sertifikat`, `#media-sosial`, dan `#kontak`.

### 7.3 Perilaku navigasi

- Header tetap mudah dijangkau, misalnya dengan `sticky`.
- Klik menu menggulir ke section dengan transisi halus jika preferensi gerakan pengguna mengizinkan.
- Jarak scroll mempertimbangkan tinggi header agar judul section tidak tertutup.
- Menu mobile menutup setelah item navigasi dipilih.
- Menu aktif boleh diberi penanda visual berdasarkan section yang sedang terlihat.
- Navigasi dapat dioperasikan menggunakan keyboard.

## 8. Persyaratan Fungsional

Prioritas: **P0** = wajib untuk MVP, **P1** = direkomendasikan, **P2** = pengembangan berikutnya.

### 8.1 Header dan Navigasi

| ID | Prioritas | Persyaratan |
|---|---|---|
| FR-01 | P0 | Website menampilkan identitas singkat atau nama pemilik pada header. |
| FR-02 | P0 | Header menyediakan akses ke section utama. |
| FR-03 | P0 | Navigasi mobile dapat dibuka, ditutup, dan digunakan. |
| FR-04 | P1 | Menu aktif mengikuti section yang sedang dilihat. |
| FR-05 | P0 | Semua tautan navigasi mengarah ke ID section yang benar. |

### 8.2 Tentang / Hero

| ID | Prioritas | Persyaratan |
|---|---|---|
| FR-06 | P0 | Menampilkan nama pemilik dan headline profesional. |
| FR-07 | P0 | Menampilkan ringkasan profil singkat dengan bahasa profesional. |
| FR-08 | P0 | Menyediakan tombol CTA menuju kontak. |
| FR-09 | P1 | Menyediakan tombol unduh CV jika file CV sudah tersedia. |
| FR-10 | P1 | Menampilkan foto profil atau ilustrasi pendukung yang optimal dan memiliki teks alternatif yang sesuai. |

### 8.3 Pendidikan

| ID | Prioritas | Persyaratan |
|---|---|---|
| FR-11 | P0 | Menampilkan nama institusi dan program studi atau jenjang. |
| FR-12 | P0 | Menampilkan periode pendidikan dan status jika relevan. |
| FR-13 | P1 | Mendukung lebih dari satu riwayat pendidikan. |
| FR-14 | P1 | Mendukung deskripsi, fokus studi, atau pencapaian singkat. |

### 8.4 Skill

| ID | Prioritas | Persyaratan |
|---|---|---|
| FR-15 | P0 | Menampilkan skill dalam beberapa kategori. |
| FR-16 | P0 | Kategori dapat mencakup teknologi, tools, bidang keahlian, dan soft skills. |
| FR-17 | P0 | Tampilan skill tetap mudah dibaca dan tidak menyimpulkan tingkat kemahiran yang tidak terverifikasi. |
| FR-18 | P1 | Mendukung ikon atau label teknologi jika aset yang digunakan sesuai. |

### 8.5 Pengalaman

| ID | Prioritas | Persyaratan |
|---|---|---|
| FR-19 | P0 | Menampilkan jabatan atau peran, organisasi/perusahaan, dan periode. |
| FR-20 | P0 | Menampilkan deskripsi tanggung jawab atau hasil pekerjaan secara ringkas. |
| FR-21 | P0 | Mendukung lebih dari satu pengalaman. |
| FR-22 | P1 | Mendukung pengalaman magang, proyek freelance, organisasi, dan pengalaman relevan lain. |
| FR-23 | P1 | Menyediakan layout timeline atau kartu yang konsisten. |

### 8.6 Proyek Unggulan (Tambahan yang Direkomendasikan)

| ID | Prioritas | Persyaratan |
|---|---|---|
| FR-24 | P1 | Menampilkan nama proyek, ringkasan, teknologi, dan kontribusi pemilik. |
| FR-25 | P1 | Mendukung tautan demo, repositori, atau studi kasus. |
| FR-26 | P1 | Tautan eksternal dibuka dengan aman dan memiliki label yang jelas. |
| FR-27 | P1 | Gambar thumbnail dioptimalkan dan mempunyai teks alternatif. |

### 8.7 Sertifikat

| ID | Prioritas | Persyaratan |
|---|---|---|
| FR-28 | P0 | Menampilkan nama sertifikat, penerbit, dan tanggal atau tahun. |
| FR-29 | P0 | Mendukung sertifikat tanpa URL verifikasi, jika memang tidak tersedia. |
| FR-30 | P1 | Tautan sertifikat dapat membuka halaman verifikasi atau file bukti. |
| FR-31 | P1 | Sertifikat dengan gambar dapat diperbesar atau dibuka pada tab baru secara aksesibel. |

### 8.8 Akun Media Sosial

| ID | Prioritas | Persyaratan |
|---|---|---|
| FR-32 | P0 | Menampilkan tautan akun profesional yang dikonfigurasi oleh pemilik. |
| FR-33 | P0 | Setiap tautan mempunyai nama platform atau label yang bisa dipahami tanpa mengandalkan ikon saja. |
| FR-34 | P0 | Tautan eksternal memakai perilaku pembukaan yang aman. |
| FR-35 | P1 | Mendukung platform seperti LinkedIn, GitHub, Instagram, email, atau platform lain yang relevan. |

### 8.9 Formulir Kirim Pesan

| ID | Prioritas | Persyaratan |
|---|---|---|
| FR-36 | P0 | Formulir menyediakan nama, email, subjek, dan isi pesan. |
| FR-37 | P0 | Field wajib divalidasi pada sisi client dan server. |
| FR-38 | P0 | Format email diperiksa sebelum pengiriman. |
| FR-39 | P0 | Formulir menampilkan status mengirim, berhasil, dan gagal. |
| FR-40 | P0 | Formulir mengirim pesan melalui endpoint server yang aman. |
| FR-41 | P0 | Sistem menampilkan pesan kesalahan yang mudah dipahami tanpa membocorkan detail internal. |
| FR-42 | P0 | Tombol submit dinonaktifkan selama proses pengiriman untuk mencegah pengiriman ganda. |
| FR-43 | P1 | Sistem menyediakan perlindungan spam, misalnya honeypot dan rate limiting. |
| FR-44 | P0 | Pengunjung diberi informasi bahwa pesan akan diteruskan ke email pemilik portofolio. |
| FR-45 | P1 | Sistem dapat mengarahkan pengunjung ke tautan email langsung sebagai alternatif ketika layanan pengiriman tidak tersedia. |

### 8.10 Footer

| ID | Prioritas | Persyaratan |
|---|---|---|
| FR-46 | P0 | Menampilkan nama pemilik dan tahun copyright. |
| FR-47 | P0 | Menampilkan tautan navigasi atau media sosial yang relevan. |
| FR-48 | P1 | Menyediakan tombol kembali ke bagian atas halaman. |

## 9. Detail Konten per Section

### 9.1 Tentang

Konten yang digunakan untuk versi awal:

- Nama lengkap: **Rian Hartokusumo**.
- Headline: `Lulusan S1 Sistem Informasi | Web Developer`.
- Pendidikan yang relevan: lulusan S1 Sistem Informasi, Universitas Gunadarma.
- Ringkasan: gunakan draf pada bagian 1.1 dan minta pemilik meninjau sebelum publikasi.
- Foto profil opsional; jangan gunakan foto orang lain sebagai pengganti.
- CTA utama: `Hubungi Saya`.
- CTA sekunder: `Lihat Proyek`; `Unduh CV` hanya jika file CV telah tersedia.

Prinsip penulisan:

- Gunakan bahasa yang jelas, spesifik, dan profesional.
- Fokus pada bidang, kemampuan, dan nilai yang bisa diberikan.
- Hindari klaim seperti “ahli” atau angka pencapaian jika tidak dapat dibuktikan.

### 9.2 Pendidikan

Data pendidikan awal:

- Institusi: **Universitas Gunadarma**.
- Jenjang/program: **S1 Sistem Informasi**.
- Status: **Selesai / lulusan**.
- Tahun mulai dan tahun lulus: belum diberikan, sehingga tidak boleh ditebak atau ditampilkan sebagai fakta.

Setiap entri memuat:

- `institution`: nama institusi.
- `degree`: jenjang atau program studi.
- `startDate`: tahun/bulan mulai jika ingin ditampilkan.
- `endDate`: tahun selesai atau penanda masih berlangsung.
- `description`: deskripsi atau pencapaian opsional.
- `location`: lokasi opsional.

### 9.3 Skill

Skill awal yang wajib dimasukkan berdasarkan informasi pemilik, tanpa persentase atau level kemahiran yang belum dikonfirmasi:

| Kategori | Skill |
|---|---|
| Produktivitas | Microsoft Word, Microsoft Excel, Microsoft PowerPoint |
| Desain dan konten | Canva, CapCut |
| Web development | Web Development / Web Developer, Laravel, PHP, Bootstrap |
| Database | MySQL |

Gunakan kategori agar informasi mudah dipindai. Skill dapat ditampilkan sebagai chip atau tag. `Web Developer` lebih tepat diperlakukan sebagai bidang/peran profesional pada headline, sementara Laravel, PHP, MySQL, Bootstrap, dan Web Development ditampilkan sebagai bidang/teknologi pada bagian Skill. Kategori tambahan hanya boleh ditampilkan setelah pemilik mengonfirmasi bahwa skill tersebut memang dimiliki.

Hanya tampilkan skill yang benar-benar dipahami oleh pemilik. Hindari grafik persentase skill yang memberi kesan pengukuran objektif tanpa dasar. Gunakan chip, tag, atau daftar kategori.

### 9.4 Pengalaman

Pengalaman/proyek awal yang sudah dikonfirmasi pemilik:

**1. Website Penjualan — More Vapor**

- Jenis: proyek pengembangan web.
- Deskripsi awal: membuat website penjualan untuk toko vape bernama More Vapor.
- Teknologi, periode pengerjaan, fitur spesifik, dan tautan demo/repository: belum diberikan; isi setelah dikonfirmasi.

**2. Website Pemesanan Toko Baju**

- Jenis: proyek pengembangan web.
- Deskripsi awal: membuat website pemesanan untuk toko baju.
- Nama toko, teknologi, periode pengerjaan, fitur spesifik, dan tautan demo/repository: belum diberikan; isi setelah dikonfirmasi.

Tampilkan kedua entri tersebut sebagai **Proyek** atau **Pengalaman Proyek**, bukan sebagai pekerjaan formal, kecuali pemilik mengonfirmasi status pekerjaan formalnya.

Setiap entri memuat:

- Peran/jabatan.
- Nama perusahaan, institusi, organisasi, atau proyek.
- Jenis pengalaman bila relevan (kerja, magang, freelance, organisasi, proyek akademik).
- Periode.
- Lokasi atau model kerja opsional.
- 2–5 butir tanggung jawab atau hasil yang relevan.

Jika belum memiliki pengalaman kerja formal, bagian ini tetap dapat menampilkan magang, pengalaman organisasi, pekerjaan freelance, atau proyek relevan secara jujur dan diberi label yang tepat.

### 9.5 Sertifikat

Setiap sertifikat memuat:

- Nama sertifikat.
- Penerbit.
- Tanggal terbit atau tahun.
- Credential ID opsional.
- Tautan verifikasi atau file gambar/PDF opsional.
- Gambar thumbnail opsional.

Jangan menampilkan credential ID atau informasi pribadi yang tidak diperlukan.

### 9.6 Media Sosial

Akun yang harus dimasukkan ke versi awal:

- **Instagram:** `ini.yannnn` — URL `https://www.instagram.com/ini.yannnn/`.
- **TikTok:** `yannnzyyy` — URL `https://www.tiktok.com/@yannnzyyy`.

Setiap akun memuat:

- Nama platform.
- URL lengkap.
- Label tampilan opsional.
- Ikon opsional.
- Urutan tampilan.

Tampilkan hanya tautan yang masih aktif dan pantas ditampilkan secara profesional.

### 9.7 Kirim Pesan

Alamat email penerima pesan portofolio: **`rianharto1945@gmail.com`**. Gunakan alamat ini untuk `CONTACT_TO_EMAIL` di environment server. Alamat yang sama boleh ditampilkan sebagai kontak publik dan tautan `mailto:rianharto1945@gmail.com`. Jangan menampilkan pesan berhasil sebelum provider email mengonfirmasi pengiriman.

Field formulir:

| Field | Tipe | Wajib | Ketentuan |
|---|---|---:|---|
| Nama | Text | Ya | 2–80 karakter setelah trim |
| Email | Email | Ya | Format email valid, maksimal 254 karakter |
| Subjek | Text | Ya | 3–120 karakter setelah trim |
| Pesan | Textarea | Ya | 10–5.000 karakter setelah trim |
| Honeypot | Hidden/text yang disembunyikan secara aksesibel | Tidak untuk pengguna | Jika terisi, permintaan dicurigai sebagai spam |

Perilaku formulir:

1. Validasi input di browser untuk memberikan umpan balik langsung.
2. Server memvalidasi ulang semua input; validasi client tidak dianggap sebagai batas keamanan.
3. Server membersihkan whitespace dan menolak input yang melanggar batas panjang.
4. Pesan diteruskan ke alamat email penerima yang dikonfigurasi melalui environment variable.
5. Jangan mengirim alamat email rahasia atau API key ke browser.
6. Jika pengiriman berhasil, tampilkan konfirmasi dan reset formulir.
7. Jika pengiriman gagal, tampilkan pesan yang menyarankan pengunjung mencoba kembali atau memakai tautan email alternatif.
8. Jangan menampilkan stack trace atau respons internal provider kepada pengunjung.

## 10. Persyaratan UI/UX dan Visual Design

### 10.1 Arah desain

Gunakan tampilan profesional, modern, minimalis, dan berorientasi pada konten. Desain sebaiknya terasa seperti personal brand seorang profesional di bidang teknologi, bukan halaman promosi yang terlalu ramai.

Arah visual yang direkomendasikan:

- Latar utama putih atau abu-abu sangat muda dengan teks gelap.
- Satu warna aksen utama, misalnya biru atau indigo.
- Kontras warna yang cukup untuk teks dan tombol.
- Ruang kosong yang cukup antar-section.
- Tipografi sans-serif yang mudah dibaca.
- Kartu digunakan seperlunya; jangan membungkus semua teks di dalam kartu.
- Ikon seragam dan konsisten.
- Animasi halus dan tidak mengganggu pembacaan.

### 10.2 Layout

- Konten utama menggunakan container dengan lebar maksimum yang konsisten.
- Hero dapat memakai dua kolom pada desktop dan satu kolom pada layar kecil.
- Pendidikan dan pengalaman dapat memakai timeline atau kartu ringkas.
- Skill menggunakan kumpulan tag/chip per kategori.
- Sertifikat dan proyek dapat memakai grid responsif.
- Formulir memiliki label eksplisit, jarak input yang memadai, dan pesan validasi dekat dengan field terkait.

### 10.3 Responsive behavior

Target breakpoint dapat mengikuti default Tailwind CSS dan disesuaikan saat implementasi.

- **Mobile:** satu kolom, menu ringkas, tombol mudah disentuh, tanpa horizontal scrolling.
- **Tablet:** grid dua kolom bila sesuai dan tidak memadatkan konten.
- **Desktop:** komposisi lebih luas dengan pembatas lebar agar baris teks tetap nyaman dibaca.

Jangan mengandalkan hover sebagai satu-satunya cara untuk mengakses informasi atau tindakan.

### 10.4 State komponen

Komponen interaktif harus mempunyai state yang jelas:

- Normal.
- Hover (pada perangkat yang mendukung).
- Focus-visible untuk keyboard.
- Active/pressed.
- Disabled saat tindakan tidak tersedia.
- Loading untuk proses kirim pesan.
- Success dan error untuk formulir.

### 10.5 Aksesibilitas

- Gunakan struktur heading yang berurutan.
- Gunakan elemen HTML semantik seperti `header`, `nav`, `main`, `section`, `form`, dan `footer`.
- Semua input mempunyai label yang dapat diakses.
- Tautan dan tombol memiliki nama yang jelas.
- Gambar informatif mempunyai alt text; gambar dekoratif memakai alt kosong.
- Pastikan kontras teks memadai.
- Semua fungsi utama dapat digunakan melalui keyboard.
- Tampilkan focus indicator yang terlihat.
- Hormati `prefers-reduced-motion`.
- Jangan menggunakan warna sebagai satu-satunya penanda status.

## 11. Teknologi dan Arsitektur

### 11.1 Stack utama

| Kebutuhan | Pilihan | Catatan |
|---|---|---|
| Framework | Next.js App Router | Gunakan struktur `app/` untuk routing dan layout. |
| Bahasa | TypeScript | Tipe untuk data portofolio dan fungsi penting. |
| UI | React | Komponen reusable. |
| Styling | Tailwind CSS | Styling responsif dan design tokens. |
| Ikon | Lucide React | Gunakan ikon seperlunya dan konsisten. |
| Validasi form | Zod | Schema validasi dapat dipakai kembali di server dan client jika sesuai. |
| Pengiriman email | Resend atau penyedia email transaksional setara | API key disimpan hanya pada environment server. |
| Hosting dan deployment | Vercel | Platform deployment utama untuk Preview dan Production; terintegrasi dengan repository Git. |
| Version control | Git dan GitHub | Repository untuk source code dan kolaborasi. |

Versi package dipilih saat mulai implementasi dengan memeriksa dokumentasi resmi dan kompatibilitas package terkini. Hindari mengunci versi yang sudah usang hanya karena contoh tutorial lama.

### 11.2 Strategi rendering

- Jadikan halaman dan section konten sebagai Server Components secara default.
- Gunakan Client Components hanya untuk interaksi yang membutuhkan state browser, misalnya menu mobile, status formulir, tema, atau animasi tertentu.
- Optimalkan gambar dengan fitur image Next.js saat cocok.
- Gunakan font lokal atau `next/font` untuk mengurangi request eksternal yang tidak perlu.
- Konten portofolio dapat berupa data statis sehingga tidak memerlukan database pada MVP.

### 11.3 Pengiriman formulir

Gunakan Route Handler, misalnya `POST /api/contact`, atau mekanisme server-side resmi Next.js yang sesuai dengan struktur proyek. Endpoint harus:

- Menerima hanya metode yang diperlukan.
- Memvalidasi body request di sisi server.
- Mengirim email memakai provider yang dikonfigurasi.
- Menerapkan pembatasan frekuensi permintaan.
- Menangani error provider dengan aman.
- Mengembalikan status HTTP yang sesuai dan respons JSON sederhana.
- Tidak mencatat isi pesan lengkap atau data pribadi berlebihan ke log produksi.

Untuk MVP, pesan dapat langsung dikirim melalui email tanpa menyimpan salinan di database. Jika kebutuhan audit atau pengelolaan pesan bertambah, pertimbangkan database pada fase berikutnya dengan kebijakan retensi dan privasi yang jelas.

### 11.4 Penyimpanan data

Tidak diperlukan database untuk konten portofolio versi MVP. Simpan konten pada file TypeScript/JSON yang terpusat. Data hanya perlu dipisahkan ke database atau CMS apabila pemilik membutuhkan editor admin, pembaruan oleh non-developer, atau konten dinamis yang lebih banyak.

## 12. Struktur Direktori yang Direkomendasikan

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.webp
│   │   ├── projects/
│   │   └── certificates/
│   ├── files/
│   │   └── cv.pdf
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── site-header.tsx
│   │   │   └── site-footer.tsx
│   │   ├── sections/
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── education-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   ├── experience-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── certificates-section.tsx
│   │   │   ├── social-section.tsx
│   │   │   └── contact-section.tsx
│   │   └── ui/
│   │       ├── section-heading.tsx
│   │       ├── social-link.tsx
│   │       └── submit-button.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── lib/
│   │   ├── contact-schema.ts
│   │   ├── email.ts
│   │   └── utils.ts
│   └── types/
│       └── portfolio.ts
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

Struktur akhir boleh disesuaikan dengan versi Next.js dan konfigurasi `create-next-app` yang digunakan. `loading.tsx`, `error.tsx`, atau file konfigurasi lain dipakai jika memang dibutuhkan; jangan menambah kompleksitas tanpa kebutuhan. Untuk deployment MVP di Vercel, jangan mengaktifkan `output: 'export'` karena endpoint `POST /api/contact` membutuhkan eksekusi server-side.

## 13. Rancangan Data Konten

### 13.1 Identitas dan profil

```ts
export type Profile = {
  name: string;
  headline: string;
  location?: string;
  summary: string;
  profileImage?: string;
  cvUrl?: string;
  email?: string;
};
```

### 13.2 Pendidikan

```ts
export type Education = {
  id: string;
  institution: string;
  program: string;
  startDate?: string;
  endDate?: string;
  status?: "completed" | "ongoing";
  description?: string;
};
```

### 13.3 Skill

```ts
export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
};
```

### 13.4 Pengalaman

```ts
export type Experience = {
  id: string;
  role: string;
  organization: string;
  type?: "work" | "internship" | "freelance" | "organization" | "project";
  startDate?: string;
  endDate?: string;
  isCurrent?: boolean;
  description: string[];
};
```

Tanggal pengalaman/proyek bersifat opsional karena periode belum tentu tersedia. Jangan membuat tanggal dummy hanya untuk memenuhi tipe data.

### 13.5 Proyek

```ts
export type Project = {
  id: string;
  title: string;
  summary: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  repositoryUrl?: string;
  role?: string;
  featured?: boolean;
};
```

### 13.6 Sertifikat dan sosial media

```ts
export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
};

export type SocialLink = {
  id: string;
  platform: string;
  url: string;
  label?: string;
  icon?: string;
  order: number;
};
```

### 13.7 Sumber data tunggal

`src/data/portfolio.ts` menyimpan data yang diekspor dan dipakai oleh section terkait. Pisahkan tipe data ke `src/types/portfolio.ts` apabila jumlah tipe mulai bertambah. Hindari menulis konten profil yang sama berulang kali pada banyak komponen.

Contoh data awal berdasarkan informasi yang telah dikonfirmasi:

```ts
export const portfolioData = {
  profile: {
    name: "Rian Hartokusumo",
    headline: "Lulusan S1 Sistem Informasi | Web Developer",
    summary:
      "Lulusan S1 Sistem Informasi Universitas Gunadarma yang memiliki minat di bidang web development. Telah membuat website penjualan untuk toko vape More Vapor dan website pemesanan untuk toko baju.",
    email: "rianharto1945@gmail.com",
  },
  education: [
    {
      id: "gunadarma-si",
      institution: "Universitas Gunadarma",
      program: "S1 Sistem Informasi",
      status: "completed",
      // Tahun mulai dan lulus ditambahkan setelah dikonfirmasi.
    },
  ],
  skillCategories: [
    {
      id: "productivity",
      title: "Produktivitas",
      skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
    },
    {
      id: "creative-tools",
      title: "Desain dan Konten",
      skills: ["Canva", "CapCut"],
    },
    {
      id: "web-development",
      title: "Web Development",
      skills: ["Laravel", "PHP", "Bootstrap"],
    },
    {
      id: "database",
      title: "Database",
      skills: ["MySQL"],
    },
  ],
  experiences: [
    {
      id: "more-vapor",
      role: "Web Developer — Proyek Website Penjualan",
      organization: "More Vapor",
      type: "project",
      description: ["Membuat website penjualan untuk toko vape More Vapor."],
    },
    {
      id: "clothing-ordering-website",
      role: "Web Developer — Proyek Website Pemesanan",
      organization: "Toko Baju (nama belum diberikan)",
      type: "project",
      description: ["Membuat website pemesanan untuk toko baju."],
    },
  ],
  certificates: [], // Tambahkan data hanya jika sertifikat tersedia.
  socialLinks: [
    {
      id: "instagram",
      platform: "Instagram",
      url: "https://www.instagram.com/ini.yannnn/",
      label: "@ini.yannnn",
      order: 1,
    },
    {
      id: "tiktok",
      platform: "TikTok",
      url: "https://www.tiktok.com/@yannnzyyy",
      label: "@yannnzyyy",
      order: 2,
    },
  ],
};
```

Sesuaikan objek contoh tersebut dengan tipe TypeScript aktual sebelum digunakan. `certificates` sengaja kosong karena detail sertifikat belum diberikan; jangan membuat sertifikat fiktif. Field periode, URL demo, URL repository, teknologi per proyek, dan nama toko baju dapat ditambahkan setelah informasi dikonfirmasi.

## 14. Environment Variables

Sediakan file `.env.example` untuk mendokumentasikan variabel yang diperlukan tanpa menaruh nilai rahasia.

Contoh:

```dotenv
# Base URL website, untuk metadata atau tautan absolut
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email provider: hanya digunakan pada server
RESEND_API_KEY=
CONTACT_TO_EMAIL=rianharto1945@gmail.com
CONTACT_FROM_EMAIL=
```

Ketentuan keamanan dan konfigurasi Vercel:

- Jangan commit file `.env.local` ke repository.
- Jangan memberikan prefiks `NEXT_PUBLIC_` pada secret seperti API key.
- `NEXT_PUBLIC_SITE_URL` boleh tersedia di client karena bukan rahasia.
- Di Vercel, tambahkan variabel melalui **Project → Settings → Environment Variables** dan pilih environment yang tepat: **Development**, **Preview**, atau **Production**.
- Isi `NEXT_PUBLIC_SITE_URL` dengan URL lokal saat development dan URL publik utama yang benar untuk production. Jika menggunakan domain khusus, gunakan domain kanonis yang dipilih.
- Isi `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, dan `CONTACT_FROM_EMAIL` hanya jika integrasi email diaktifkan. Gunakan kredensial/provider yang sesuai untuk pengujian Preview agar pengujian tidak tanpa sengaja mengirim email operasional.
- Pastikan alamat pengirim yang digunakan sesuai domain yang sudah diverifikasi pada provider email.
- Perubahan environment variable di Vercel tidak mengubah deployment yang sudah ada; lakukan deployment ulang setelah variabel ditambah atau diubah.
- Validasi variabel penting sebelum mengirim email, lalu tangani konfigurasi yang hilang secara aman.

## 15. Keamanan dan Privasi

- Validasi input pada client dan server.
- Trim whitespace dan tetapkan batas panjang input untuk mengurangi input tidak valid.
- Hindari menyisipkan input pengunjung sebagai HTML mentah.
- Terapkan honeypot dan rate limiting pada endpoint kontak; CAPTCHA dapat dipertimbangkan jika spam tetap tinggi.
- Jangan mengungkap API key atau detail internal layanan email kepada browser.
- Jangan mencatat secret, credential, atau konten pribadi pengunjung secara berlebihan.
- Gunakan HTTPS pada deployment produksi.
- Periksa URL yang ditampilkan dan hindari tautan sertifikat, demo, atau media sosial yang tidak tepercaya.
- Jika menggunakan analytics atau cookies non-esensial di masa depan, jelaskan pemakaiannya dan tambahkan mekanisme persetujuan yang diperlukan.
- Tampilkan hanya data pribadi yang memang ingin dipublikasikan oleh pemilik.

## 16. SEO dan Metadata

### Persyaratan MVP

- Tetapkan `title` yang deskriptif dan unik.
- Tetapkan meta description yang merangkum bidang profesional pemilik.
- Tetapkan `metadataBase` menggunakan URL deployment produksi.
- Tambahkan Open Graph metadata untuk tampilan tautan saat dibagikan.
- Gunakan favicon dan gambar sosial yang sesuai.
- Buat `robots.txt` dan `sitemap.xml` sesuai kebutuhan website.
- Gunakan heading dan konten teks yang jelas; jangan menaruh seluruh identitas penting di dalam gambar.
- Pastikan semua tautan internal penting dapat diakses dan tidak rusak.
- Gunakan URL kanonis apabila diperlukan.
- Tambahkan structured data `Person` hanya dengan informasi yang benar-benar tersedia dan memang ingin dipublikasikan.

## 17. Performa

- Optimalkan ukuran gambar dan gunakan format modern seperti WebP/AVIF bila sesuai.
- Tetapkan dimensi atau rasio gambar untuk mengurangi layout shift.
- Hindari package besar jika fitur yang sama dapat dibuat sederhana.
- Gunakan Server Components secara default dan kurangi JavaScript client yang tidak perlu.
- Lazy-load gambar nonkritis di bawah fold jika sesuai.
- Jangan memutar video atau animasi berat secara otomatis.
- Gunakan font dengan strategi loading yang tepat.
- Pastikan animasi tidak menyebabkan layout shift atau mengganggu aksesibilitas.

Target awal yang disarankan pada audit Lighthouse untuk halaman utama yang sudah optimal:

- Performance: 90 atau lebih.
- Accessibility: 95 atau lebih.
- Best Practices: 95 atau lebih.
- SEO: 95 atau lebih.

Nilai tersebut merupakan target kualitas, bukan jaminan hasil; skor dapat dipengaruhi perangkat, jaringan, konfigurasi hosting, dan alat pengukuran.

## 18. Pengujian dan Kriteria Penerimaan

### 18.1 Functional acceptance criteria

- [ ] Header tampil dengan benar di desktop dan mobile.
- [ ] Semua menu mengarah ke section yang benar.
- [ ] Semua section wajib tampil jika terdapat data yang dikonfigurasi.
- [ ] Array data kosong tidak menyebabkan error runtime atau tampilan rusak.
- [ ] Tautan sosial, CV, sertifikat, dan proyek membuka alamat yang benar.
- [ ] Formulir menolak nama, subjek, email, atau pesan yang tidak valid.
- [ ] Formulir menampilkan indikator loading saat proses berlangsung.
- [ ] Formulir menampilkan konfirmasi ketika pengiriman berhasil.
- [ ] Formulir menampilkan pesan gagal yang ramah ketika provider email bermasalah.
- [ ] Pengiriman berulang cepat dibatasi oleh tombol loading dan perlindungan server.
- [ ] Endpoint kontak tidak mengirim email ketika validasi server gagal.
- [ ] Tidak ada secret yang ditampilkan di source JavaScript browser atau repository publik.

### 18.2 Responsive acceptance criteria

- [ ] Tampilan diuji pada lebar layar ponsel kecil, ponsel umum, tablet, dan desktop.
- [ ] Tidak terdapat horizontal scrolling yang tidak disengaja.
- [ ] Teks tetap terbaca dan tombol mudah dioperasikan dengan sentuhan.
- [ ] Navigasi mobile tidak menutupi konten secara permanen.
- [ ] Formulir dapat digunakan tanpa zoom manual.

### 18.3 Accessibility acceptance criteria

- [ ] Semua field memiliki label.
- [ ] Semua kontrol interaktif dapat dioperasikan dengan keyboard.
- [ ] Focus state terlihat.
- [ ] Gambar informatif memiliki alt text.
- [ ] Heading tersusun logis.
- [ ] Warna status disertai teks atau ikon pendukung.
- [ ] Animasi menghormati `prefers-reduced-motion`.

### 18.4 Quality assurance

Pengujian minimal:

- Manual functional testing pada setiap section.
- Pengujian formulir untuk input valid, invalid, dan provider gagal.
- Pemeriksaan layout pada beberapa viewport.
- Pemeriksaan console browser dan log server.
- Pemeriksaan tautan eksternal.
- `npm run lint` atau perintah lint yang dikonfigurasi.
- `npx tsc --noEmit` jika sesuai dengan script proyek.
- `npm run build` sebelum deployment.

Pengujian otomatis dengan Playwright atau Vitest dapat ditambahkan sesuai kebutuhan dan kompleksitas.

## 19. Deployment dan Operasional (Wajib Menggunakan Vercel)

### 19.1 Platform dan pola deployment

- **Vercel adalah platform deployment utama dan wajib untuk MVP.** Website tidak dianggap selesai hanya dengan berjalan di lokal.
- Source code disimpan pada repository GitHub yang terhubung ke project Vercel.
- Gunakan integrasi Git Vercel untuk deployment berkelanjutan (*continuous deployment*).
- Pertahankan dukungan Next.js server-side agar Route Handler `POST /api/contact` dapat berjalan. Jangan gunakan konfigurasi static export untuk deployment MVP ini.
- Gunakan URL bawaan `*.vercel.app` terlebih dahulu. Custom domain bersifat opsional dan dapat ditambahkan setelah deployment dasar berfungsi.

### 19.2 Alur deployment melalui GitHub (metode utama)

1. Pastikan source code sudah berada di repository GitHub dan `npm run build` berhasil di komputer lokal.
2. Masuk ke [Vercel Dashboard](https://vercel.com/dashboard), pilih **Add New → Project**, lalu impor repository GitHub yang benar. Berikan akses repository jika diminta.
3. Pastikan framework terdeteksi sebagai **Next.js**. Jika source code berada di root repository, gunakan root directory tersebut; jika berada di subfolder, tentukan subfolder proyek yang benar.
4. Periksa pengaturan instalasi/build. Gunakan deteksi otomatis Vercel kecuali proyek memiliki kebutuhan khusus. Build command standar mengikuti script proyek, umumnya `npm run build`; jangan mengisi output directory statis secara manual.
5. Tambahkan environment variables yang diperlukan sebelum deployment produksi, khususnya variabel layanan email jika fitur kirim pesan diaktifkan.
6. Jalankan deployment pertama dan buka URL deployment yang diberikan Vercel. Periksa build log bila deployment gagal.
7. Uji URL Preview sebelum perubahan digabungkan ke branch produksi. Setelah perubahan yang disetujui masuk ke production branch (umumnya `main`), Vercel membuat Production Deployment sesuai konfigurasi project.
8. Setelah production deployment selesai, buka URL produksi dan jalankan seluruh checklist penerimaan pada bagian 18.

Vercel menyediakan environment **Local**, **Preview**, dan **Production**. Preview dipakai untuk review perubahan tanpa mengubah website produksi; Production adalah website yang ditujukan kepada pengunjung.

### 19.3 Environment variables pada Vercel

Atur variabel melalui **Project → Settings → Environment Variables** dan pilih environment yang sesuai. Minimal:

| Variabel | Development | Preview | Production | Catatan |
|---|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | URL Preview atau nilai yang sesuai untuk pengujian | URL produksi utama | Bukan secret; gunakan URL kanonis yang benar. |
| `RESEND_API_KEY` | Kunci untuk pengujian lokal jika diperlukan | Kunci pengujian yang sesuai | Kunci produksi | Secret; jangan gunakan prefiks `NEXT_PUBLIC_`. |
| `CONTACT_TO_EMAIL` | Email penerima uji atau nilai lokal | Email penerima uji jika memungkinkan | `rianharto1945@gmail.com` | Dikelola di server; jangan mengirimkan nilai ini lewat kode client. |
| `CONTACT_FROM_EMAIL` | Sender yang diizinkan provider | Sender yang sesuai untuk Preview | Sender dari domain yang diverifikasi | Dikelola di server. |

Jika provider email tidak digunakan, variabel terkait email dapat dihilangkan, tetapi formulir kontak tidak boleh menampilkan status berhasil palsu. Konfigurasikan fallback yang jujur atau tandai integrasi belum aktif.

**Penting:** setelah environment variable dibuat atau diubah, jalankan deployment baru agar nilai tersebut digunakan. Jangan menaruh API key di `portfolio.ts`, file yang dikirim ke browser, atau repository GitHub.

### 19.4 Deployment opsional melalui Vercel CLI

Metode CLI bisa digunakan untuk pengujian manual atau keadaan ketika deployment melalui Git tidak praktis. Alur GitHub tetap menjadi metode utama.

```bash
npm install
npm run lint
npm run build
npm install -g vercel
vercel login
vercel link
vercel
```

Perintah `vercel` membuat deployment non-production untuk pemeriksaan. Setelah siap dan memang ingin merilis versi tersebut ke production, gunakan:

```bash
vercel --prod
```

Jalankan perintah dari root proyek Next.js yang benar. Pastikan project sudah ditautkan ke project Vercel dan environment variable yang diperlukan telah dikonfigurasi.

### 19.5 Custom domain (opsional)

- Website dapat menggunakan URL bawaan Vercel tanpa membeli domain.
- Bila domain pribadi tersedia, tambahkan melalui **Project → Settings → Domains**.
- Ikuti instruksi DNS yang ditampilkan Vercel; jangan menyalin record DNS dari contoh generik apabila dashboard menampilkan nilai yang berbeda.
- Pastikan domain telah diverifikasi dan HTTPS aktif sebelum mempromosikannya sebagai URL utama.
- Sesuaikan `NEXT_PUBLIC_SITE_URL` dengan URL kanonis yang dipilih dan lakukan deployment ulang jika variabelnya berubah.
- Periksa redirect antara domain apex dan `www` jika keduanya dipakai agar tidak ada dua URL utama yang bersaing untuk SEO.

### 19.6 Checklist setelah deployment

- [ ] Deployment berstatus berhasil/Ready dan URL dapat dibuka tanpa autentikasi.
- [ ] Halaman utama dan seluruh section wajib tampil pada desktop serta mobile.
- [ ] Metadata, favicon, gambar, file CV, dan semua tautan berjalan.
- [ ] Formulir kontak diuji pada URL Preview dan URL Production.
- [ ] Pesan uji benar-benar diterima di inbox penerima; jangan hanya mengandalkan pesan sukses di UI.
- [ ] Endpoint `/api/contact` menolak payload tidak valid dan menangani kegagalan provider secara aman.
- [ ] Environment variable untuk Preview dan Production tersedia sesuai kebutuhan.
- [ ] Tidak ada API key atau secret pada repository maupun client bundle.
- [ ] Build logs dan function/runtime logs telah diperiksa jika terjadi error.
- [ ] Custom domain dan HTTPS diverifikasi jika domain khusus diaktifkan.

Simpan aset statis yang ukurannya sesuai pada folder `public/`. Jika kelak memerlukan unggahan dinamis atau aset besar, evaluasi layanan penyimpanan khusus alih-alih mengandalkan folder tersebut sebagai sistem unggah pengguna.

## 20. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Konten profil belum lengkap | Website terasa kosong atau tidak meyakinkan | Siapkan data dan aset sebelum finalisasi desain; section dengan data kosong dapat disembunyikan secara terkontrol. |
| API email belum dikonfigurasi | Formulir tidak dapat mengirim pesan | Siapkan provider, verifikasi sender/domain, dan uji endpoint sebelum rilis. |
| Spam pada formulir | Pesan tidak relevan dan penggunaan kuota email | Terapkan validasi server, honeypot, rate limiting, dan CAPTCHA jika diperlukan. |
| Gambar atau CV terlalu besar | Performa menurun | Kompres gambar, batasi ukuran file, dan optimalkan format. |
| Terlalu banyak animasi | Performa dan aksesibilitas menurun | Gunakan animasi seperlunya dan hormati pengaturan reduced motion. |
| Informasi cepat usang | Portofolio tidak akurat | Simpan data pada file terpusat dan tinjau konten secara berkala. |
| Secret masuk ke repository | Potensi penyalahgunaan API | Gunakan environment variable, `.gitignore`, dan pemeriksaan sebelum commit. |

## 21. Tahapan Implementasi

### Tahap 1 — Setup proyek

- Buat proyek Next.js dengan App Router dan TypeScript.
- Konfigurasikan Tailwind CSS, ESLint, alias import, dan repository Git.
- Siapkan struktur folder dan design tokens awal.

### Tahap 2 — Kerangka UI

- Buat layout utama, header, navigasi, footer, dan seluruh section.
- Pastikan responsivitas dasar dan urutan konten sudah benar.
- Gunakan data contoh sementara jika materi final belum siap.

### Tahap 3 — Integrasi data

- Buat tipe dan data konten terpusat.
- Hubungkan pendidikan, skill, pengalaman, sertifikat, sosial media, dan proyek ke komponen.
- Tambahkan foto, thumbnail, sertifikat, atau CV yang sudah disiapkan.

### Tahap 4 — Formulir kontak

- Implementasikan schema validasi.
- Implementasikan endpoint server dan integrasi provider email.
- Tambahkan loading, success, error, honeypot, serta pembatasan permintaan.
- Uji pengiriman pada development dan production.

### Tahap 5 — SEO, aksesibilitas, dan optimasi

- Lengkapi metadata, Open Graph, sitemap, dan robots.
- Audit keyboard navigation, focus state, label, alt text, dan kontras.
- Optimalkan gambar, font, dan JavaScript.

### Tahap 6 — QA dan rilis

- Jalankan lint, pemeriksaan TypeScript, dan build produksi.
- Uji semua fungsi dan viewport target.
- Deploy ke Vercel Preview, lakukan review, lalu deploy ke Production setelah checklist lolos.
- Periksa kembali formulir dan semua tautan setelah rilis.

## 22. Definisi Selesai (Definition of Done)

Proyek dianggap selesai untuk versi MVP apabila:

1. Semua section wajib selesai dan menampilkan informasi yang valid.
2. Desain responsif dan dapat digunakan pada desktop maupun ponsel.
3. Navigasi, tautan eksternal, tombol CTA, dan unduhan CV (jika diaktifkan) bekerja.
4. Formulir kontak telah diintegrasikan dengan email provider dan melewati pengujian validasi serta error handling.
5. Tidak ada secret pada repository atau client bundle.
6. Metadata dan SEO dasar telah disiapkan.
7. Tidak terdapat error build atau error runtime kritis.
8. Checklist fungsional, responsivitas, dan aksesibilitas telah ditinjau.
9. Website sudah tersedia pada Vercel Production Deployment dan URL produksi dapat diakses publik.
10. README menjelaskan instalasi, konfigurasi environment variable, development server, serta langkah deployment ke Vercel melalui GitHub atau CLI.

## 23. Data yang Sudah Tersedia dan Data Lanjutan

Informasi berikut sudah disediakan pemilik dan harus dipakai sebagai konten awal:

- Nama: **Rian Hartokusumo**.
- Pendidikan: lulusan S1 Sistem Informasi, Universitas Gunadarma.
- Skill: Microsoft Word, Microsoft Excel, Microsoft PowerPoint, CapCut, Canva, Web Development/Web Developer, Laravel, PHP, MySQL, dan Bootstrap.
- Pengalaman proyek: website penjualan toko vape More Vapor dan website pemesanan toko baju.
- Instagram: `ini.yannnn` — https://www.instagram.com/ini.yannnn/.
- TikTok: `yannnzyyy` — https://www.tiktok.com/@yannnzyyy.
- Email kontak: `rianharto1945@gmail.com`.

Sebelum website diterbitkan, pemilik masih perlu menyiapkan atau mengonfirmasi:

- Foto profil (opsional) dan ringkasan Tentang final.
- Tahun mulai dan lulus kuliah, jika ingin ditampilkan.
- Nama toko baju untuk proyek pemesanan.
- Periode, teknologi yang digunakan, fitur, kontribusi spesifik, dan tautan demo/repository untuk kedua proyek.
- Nama sertifikat, penerbit, tanggal, dan URL bukti jika sertifikat tersedia.
- CV PDF (opsional).
- Domain website (opsional).

Jangan memasukkan informasi yang tidak ingin ditampilkan kepada publik atau mengarang detail yang belum dikonfirmasi.

## 24. Referensi Teknis

Dokumentasi resmi yang digunakan sebagai acuan implementasi:

- Next.js App Router: https://nextjs.org/docs/app
- Next.js Getting Started: https://nextjs.org/docs/app/getting-started
- Next.js TypeScript: https://nextjs.org/docs/app/api-reference/config/typescript
- Next.js Forms Guide: https://nextjs.org/docs/pages/guides/forms
- Tailwind CSS dengan Next.js: https://tailwindcss.com/docs/installation/framework-guides/nextjs
- Next.js di Vercel: https://vercel.com/docs/frameworks/full-stack/nextjs
- Environment Vercel (Local, Preview, Production): https://vercel.com/docs/deployments/environments
- Environment variables Vercel: https://vercel.com/docs/environment-variables
- Deployment Vercel: https://vercel.com/docs/deployments
- Konfigurasi custom domain di Vercel: https://vercel.com/docs/domains/working-with-domains/add-a-domain

**Catatan:** PRD ini menetapkan kebutuhan produk dan arah teknis, bukan mengunci semua detail implementasi. Sebelum coding dimulai, periksa dokumentasi terbaru untuk versi Next.js, Tailwind CSS, Vercel, serta provider email yang dipilih.
