# CONTENT.md — Panduan Mengisi Konten Website

> **Untuk Anda (pemilik):** isi bagian bertanda `[...]`. Setelah diisi, kabari AI untuk memasukkan konten ke dalam `index.html`.
>
> **Aturan:** jangan mengarang, jangan menambah klaim yang tidak nyata. Jika tidak relevan, tulis `[skip]` dan bagian tersebut akan dihapus.

---

## 0. Pengaturan Umum

| Field                           | Isi                                                       |
| ------------------------------- | --------------------------------------------------------- |
| **Bahasa situs**                | English _(sudah diset)_                                   |
| **Nama lengkap**                | `[Nama Lengkap Anda]`                                     |
| **Nama pendek (untuk header)**  | `[mis. nama depan saja]`                                  |
| **Profesi / peran**             | `[mis. Informatics Student / UI Designer / Data Analyst]` |
| **Lokasi (opsional)**           | `[Kota, Negara]`                                          |
| **URL situs (jika sudah tahu)** | `[https://username.github.io/…]`                          |

---

## 1. Hero (`#home`)

- **Nama yang ditampilkan di halaman:** `[Cannavaro Lie]`
  _(tulisan besar di atas — bisa nama depan + belakang, atau nama panggilan)_

- **Satu kalimat deskripsi:**
  `["Computer Science Under Graduate | Make it work, make it right, make it fast. Perfect!"]`
  _Contoh yang baik: "I build data pipelines and turn messy spreadsheets into something actually useful."_

---

## 2. About (`#about`)

- **Paragraf 1** — siapa Anda dan apa yang sedang ditekuni:

  ```
  [Hi, I'm Varo, a fifth-semester Computer Science student at Bina Nusantara University. I'm passionate about software development and solving problems through code. Throughout my studies, I've worked on several projects, and team-based assignments that sharpened my collaboration skills. I'm also interested with AI and it's evolution, exploring how AI solve problems.]
  ```

- **Paragraf 2** _(opsional)_ — latar belakang, minat, hal di luar akademik/kerja:

  ```
  [skip dulu]
  ```

- **Foto profil:**
  - Simpan file foto ke `assets/img/profile.jpg` (atau `.webp`)
  - Tulis nama file di sini: `[profile.jpg / skip]` (akan di skip dulu)

- **Skills & Tools** _(urutkan dari yang paling relevan)_:
  - `[Python]`
  - `[TypeScript]`
  - `[Tailwind CSS]`
  - `[HTML]`
  - `[Next.js]`
  - `[React.js]`
  - `[Scikit-learn]`
  - `[Docker]`
  - `[Git]`
  - `[Skill 6]`

- **Link CV:**
  - Simpan file CV ke `assets/cv.pdf`
  - Tombol **Download CV** di hero sudah mengarah ke `assets/cv.pdf` secara otomatis. (akan di skip dulu)

---

## 3. Projects (`#projects`)

Disarankan 2–4 proyek. Hapus blok yang tidak dipakai.

## 1. Money Manager System

| Field | Isi |

| **Judul** | Money Manager System |
| **Tahun** | 2026 |
| **Deskripsi** | Aplikasi web manajemen keuangan pribadi untuk mencatat, melacak, dan menganalisis transaksi. Fitur: register & login, input pemasukan/pengeluaran, saldo dompet, riwayat transaksi, banyak buku transaksi |
| **Teknologi / tag** | `Next.js` `React.js` `JavaScript` `HTML` `CSS` `Node.js` `Express` |
| **Link demo** | https://money-manager-system-fork.vercel.app |
| **Link repo** | https://github.com/ZubergA/Money-Manager-System-fork |
| **Gambar thumbnail** | `[assets/img/Moneymanager.png]` |

## 2. Film Sentiment Analysis (NLP)

| Field | Isi |

| **Judul** | Film Sentiment Analysis – NLP AOL Sem 4 |
| **Tahun** | 2026 |
| **Deskripsi** | Aplikasi analisis sentimen ulasan film berbasis dataset IMDB. Teks dibersihkan (hapus HTML, stopword, stemming), lalu dibandingkan beberapa model klasifikasi untuk memilih yang terbaik berdasarkan accuracy, F1, dan AUC-ROC. Terdapat deteksi entitas (orang, judul film, organisasi) lewat NER, dengan backend REST API dan dashboard web. |
| **Teknologi / tag** | `Python` `FastAPI` `scikit-learn` `TF-IDF` `Logistic Regression` `Naive Bayes` `SVM` `Random Forest` `NLTK` `spaCy` `Pandas` `NumPy` `Docker` `Next.js` `React` `TypeScript` `Tailwind CSS` `Recharts` |
| **Link demo** | https://nlp-sentiment-aol.vercel.app |
| **Link repo** | https://github.com/ZubergA/nlp-sentiment-aol |
| **Gambar thumbnail** | `[assets/img/Cinevibes.png]` |

## 3. FreshSense

| Field | Isi |

| **Judul** | FreshSense – AI Klasifikasi Buah |
| **Tahun** | 2025 |
| **Deskripsi** | Web app untuk mengecek kondisi buah dari foto. Pengguna drag & drop atau upload gambar, lalu hasil prediksi, tingkat keyakinan, dan saran ditampilkan. Inferensi dijalankan oleh model yang di-host di Hugging Face Space. |
| **Teknologi / tag** | `HTML` `CSS` `JavaScript` `Gradio Client` `Hugging Face Spaces` `Image Classification` |
| **Link demo** | https://fresh-sense-web.vercel.app |
| **Link repo** | https://github.com/ZubergA/FreshSense-Web |
| **Gambar thumbnail** | `[assets/img/Freshsense.png]` |

## 4. Website HCI

| Field                | Isi                                                                 |
| -------------------- | ------------------------------------------------------------------- |
| **Judul**            | Christian Wijaya – Website Project HCI                              |
| **Tahun**            | 2025                                                                |
| **Deskripsi**        | Proyek website Human–Computer Interaction.                          |
| **Teknologi / tag**  | `HCI` `Web Design` `UI/UX`                                          |
| **Link demo**        | – (belum ada)                                                       |
| **Link repo**        | https://github.com/ZubergA/Christian-Wijaya-website-HCI-21-05-2025- |
| **Gambar thumbnail** | `[assets/img/CWijaya.png]`                                          |

### Project 1 (template)

| Field                       | Isi                                           |
| --------------------------- | --------------------------------------------- |
| **Judul**                   | `[Nama Proyek]`                               |
| **Tahun**                   | `[2025]`                                      |
| **Deskripsi (1–2 kalimat)** | `[Apa ini dan masalah apa yang diselesaikan]` |
| **Teknologi / tag**         | `[Tag 1]`, `[Tag 2]`, `[Tag 3]`               |
| **Link demo**               | `[URL atau skip]`                             |
| **Link repo / kode**        | `[URL atau skip]`                             |
| **Gambar thumbnail**        | `[assets/img/proj-1.webp atau skip]`          |

---

## 4. Background (`#background`)

Section ini terbagi menjadi tiga sub-kategori. Isi yang relevan, tulis `[skip]` untuk kategori yang tidak ada.

---

### 4a. Education

Urutkan dari yang terbaru. Satu item = satu jenjang pendidikan.

#### Education 1 _(terbaru)_

- **Periode:** `[2024 – Present]`
- **Judul / gelar / jurusan:** `[Computer Science]`
- **Institusi:** `[Bina Nusantara University]`
- **Detail opsional (1–2 poin):**
  - `[GPA: 3.38]`

#### Education 2 _(SMA / sebelumnya)_

- **Periode:** `[2021 - 2024]`
- **Judul:** `[Science]`
- **Institusi:** `[SMA Pangudi Luhur Santo Yohanes]`

---

### 4b. Certifications

Satu item = satu sertifikat. Bisa sebanyak yang Anda punya.

#### Certification 1

- **Tahun:** `[2025]`
- **Nama sertifikat:** `[Pelatihan Azure AI Fundamentals: Microsoft AI-900T00-A Belajar AI dari Dasar]`
- **Penerbit / platform:** `[Microsoft]`

#### Certification 2

- **Tahun:** `[2026]`
- **Nama sertifikat:** `[IBM Skills build University Education]`
- **Penerbit:** `[On progress..]`

#### Certification 3

- **Tahun:** `[ ]`
- **Nama sertifikat:** `[ ]`
- **Penerbit:** `[ ]`

---

### 4c. Volunteer & Organizations

#### Item 1

- **Periode:** `[November 2025 - present]`
- **Posisi / peran:** `[Trainee of Member Support]`
- **Organisasi / acara:** `[Nippon Club]`
- **Kontribusi (1–2 poin):**
  - `[Serve as Nippon Club's member support by managing discord server and whatshapps community, manage several gatherings]`

#### Item 2

- **Periode:** `[June 2026]`
- **Posisi:** `[Volunteer]`
- **Organisasi:** `[Tzu Chi]`
  - `[Volunteered with Tzu Chi Alam Sutera to sort recyclable waste, separating materials such as clear and colored plastic, and paper for proper processing. Worked alongside fellow volunteers to support the foundation's environmental conservation efforts. The experience strengthened my teamwork, discipline, and awareness of sustainable living.]`

#### Item 2

- **Periode:** `[June 2026 ]`
- **Posisi:** `[Volunteer]`
- **Organisasi:** `[Tzu Chi]`
  - `[Volunteered with Tzu Chi Cengkareng to sort recyclable waste, separating materials such as clear and colored plastic, paper, and reuseable items for proper processing. Worked alongside fellow volunteers to support the foundation's environmental conservation efforts. The experience strengthened my teamwork, discipline, and awareness of sustainable living.]`

---

## 5. Contact (`#contact`)

- **Kalimat ajakan:** `[I'm looking for Internship, feel free to contact me!]`
- **Email:** `[cannavarolie1@email.com]`
- **GitHub:** `[https://github.com/ZubergA]`
- **LinkedIn:** `[https://www.linkedin.com/in/cannavaro-lie-0b22b3326]`
- **Instagram :** `[https://www.instagram.com/al.zuberg]`

---

## 6. Footer

- **Teks:** `[© 2026 Cannavaro Lie]`
- **Teks kanan (opsional):** _(Make it work, make it right, make it fast. Perfect!)_

---

## 7. Meta / SEO

| Field                                 | Isi                                                                                                                                                                      |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Judul tab browser**                 | `[Cannavaro Lie - Computer Science Under Graduate]`                                                                                                                      |
| **Meta description (≤ 160 karakter)** | `[ Hi, I'm Varo, a fifth-semester Computer Science student at Bina Nusantara University. I'm passionate about software development and solving problems through code. ]` |
| **Gambar Open Graph (opsional)**      | `[assets/img/og.jpg, ukuran 1200×630 ( nanti saya isi )]`                                                                                                                |

---

## 8. Catatan Tambahan _(opsional)_

- **Website referensi yang Anda suka:** `[ ]`
- **Hal yang TIDAK diinginkan:** `[ ]`
- **Catatan lain untuk AI:** `[ ]`
