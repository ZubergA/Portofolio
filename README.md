# README.md — Personal Portfolio Website

Website portofolio single-page. Dibangun dengan HTML + CSS + Vanilla JS. Siap deploy ke GitHub Pages.

---

## Cara Mengisi Konten

1. **Buka [`CONTENT.md`](CONTENT.md)** — isi semua bagian `[...]` sesuai panduan.
2. Setelah diisi, buka `index.html` dan ganti placeholder yang sesuai.
   - Setiap section diberi komentar `<!-- ── 1. HERO ── -->` dst. agar mudah ditemukan.
3. Simpan file CV Anda ke **`assets/cv.pdf`** — tombol *Download CV* sudah mengarah ke sana.
4. Simpan foto profil ke **`assets/img/profile.jpg`** lalu uncomment blok foto di section About.

---

## Struktur File

```
/
├── index.html          ← halaman utama
├── css/style.css       ← semua styling
├── js/main.js          ← interaktivitas (menu, active nav, animasi)
├── assets/
│   ├── cv.pdf          ← CV Anda (letakkan di sini)
│   ├── favicon.svg     ← ikon tab browser
│   └── img/            ← foto profil, thumbnail proyek
├── .nojekyll
└── CONTENT.md          ← mulai dari sini untuk mengisi konten
```

---

## Mengubah Tampilan

Semua warna, font, dan spacing dikontrol dari satu tempat: bagian `:root` di [`css/style.css`](css/style.css).

```css
:root {
  --bg:            #F5F9FD;   /* latar utama */
  --accent:        #7FA8D6;   /* biru pastel dekorasi */
  --accent-strong: #3F6B9E;   /* biru untuk teks & tombol */
  --text:          #1F2D3D;   /* teks utama */
  /* ... */
}
```

**Mengubah favicon:** buka `assets/favicon.svg`, ganti huruf di dalam `<text>` dengan inisial Anda.

---

## Deploy ke GitHub Pages

1. Buat repo di GitHub.
2. Upload semua file ke branch `main`.
3. Buka **Settings → Pages** → Source: *Deploy from a branch* → `main` / `/ (root)` → **Save**.
4. Tunggu 1–2 menit. Situs live di `https://username.github.io/nama-repo`.

---

## Stack

| | |
|---|---|
| HTML | Semantik, satu file `index.html` |
| CSS | Vanilla, custom properties, mobile-first |
| JS | Vanilla, < 100 baris, tanpa library |
| Font | Instrument Serif + Plus Jakarta Sans (Google Fonts) |
| Hosting | GitHub Pages (static) |
