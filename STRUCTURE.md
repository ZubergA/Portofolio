# STRUCTURE.md — Struktur & Arsitektur Website

> Status: **Implemented** — semua section sudah ada di `index.html`.

---

## 1. Struktur Halaman

| # | Section | `id` HTML | Isi |
|---|---|---|---|
| – | Header (sticky) | – | Nama di kiri; nav di kanan |
| 1 | Hero | `home` | Nama besar, deskripsi singkat, tombol Download CV + Contact Me |
| 2 | About | `about` | Paragraf singkat, foto (opsional), Skills & Tools card |
| 3 | Projects | `projects` | 2–4 kartu proyek (judul, deskripsi, tag, link demo/kode) |
| 4 | Background | `background` | **Education** (timeline) · **Certifications** (card grid) · **Volunteer & Organizations** (timeline) |
| 5 | Contact | `contact` | Kalimat ajakan + link email, GitHub, LinkedIn |
| – | Footer | – | Nama + tahun, teks kanan opsional |

**Tombol navigasi di header:** `About · Projects · Background · Contact`
*(Klik nama di kiri header = kembali ke `#home`)*

---

## 2. Arsitektur File

```
/
├── index.html              ← satu-satunya halaman
├── css/
│   └── style.css           ← semua styling (variables → reset → base → components → utilities → media queries)
├── js/
│   └── main.js             ← vanilla JS: active nav link, mobile menu, reveal animation
├── assets/
│   ├── img/
│   │   ├── profile.jpg     ← foto profil (opsional, 260×260px+, WebP/JPG)
│   │   ├── proj-1.webp     ← thumbnail proyek (opsional)
│   │   └── og.jpg          ← Open Graph image (opsional, 1200×630px)
│   ├── cv.pdf              ← CV Anda (tombol Download CV mengarah ke sini)
│   └── favicon.svg         ← ikon tab browser (inisial nama di latar biru)
├── .nojekyll               ← mencegah Jekyll memproses situs di GitHub Pages
├── README.md               ← panduan singkat repo
├── CONTENT.md              ← template konten untuk diisi pemilik ← MULAI DI SINI
├── DESIGN.md               ← panduan visual & estetika
└── STRUCTURE.md            ← dokumen ini
```

---

## 3. Komponen Utama di CSS

| Kelas / Selector | Fungsi |
|---|---|
| `.site-header` | Header sticky, blur background, border bawah |
| `.hero-content` | Wrapper konten hero, posisi relatif di atas SVG deco |
| `#home::before` | Dot-grid dekoratif CSS di background hero |
| `.section-header` | Wrapper nomor editorial + judul section |
| `.section-label::before` | Garis aksen biru sebelum nomor (`01`, `02`, …) |
| `.section-divider` | Pemisah dengan titik biru di tengah (dipakai di dalam Background) |
| `.about-grid` | CSS Grid 2 kolom di desktop, 1 kolom di mobile |
| `.projects-grid` | CSS Grid: 1 col → 2 col (640px+) → 3 col (900px+) |
| `.timeline` | Layout pengalaman/pendidikan/volunteer dengan garis vertikal |
| `.cert-grid` | `auto-fill minmax(220px, 1fr)` untuk kartu sertifikat |
| `.reveal` | Elemen yang fade-in saat scroll (diaktifkan via IntersectionObserver di JS) |

---

## 4. JavaScript (`main.js`) — Fitur

Tanpa library. Total < 100 baris.

1. **Active nav link** — `IntersectionObserver` memantau tiap `section[id]`, memberi kelas `.is-active` pada link nav yang sesuai.
2. **Mobile menu** — toggle buka/tutup dengan `aria-expanded`, menutup otomatis setelah link diklik atau `Esc` ditekan.
3. **Reveal animation** — elemen `.reveal` mendapat kelas `.is-visible` sekali saat masuk viewport. Dimatikan otomatis jika `prefers-reduced-motion: reduce` aktif.

---

## 5. Breakpoint Responsif

| Lebar | Perilaku |
|---|---|
| < 640px | Satu kolom; nav jadi menu toggle; timeline satu kolom |
| 640–899px | Projects 2 kolom; nav inline |
| ≥ 900px | Container 960px; About 2 kolom (teks + skills card); Projects 3 kolom |

---

## 6. Font

| Peran | Font | Fallback |
|---|---|---|
| Judul & nama (display) | **Instrument Serif** | `Georgia, serif` |
| UI & isi | **Plus Jakarta Sans** | `system-ui, sans-serif` |

Dimuat via Google Fonts (`preconnect` + `display=swap`), hanya bobot yang dipakai: `400 / 500 / 600 / 700`.

---

## 7. Deploy ke GitHub Pages

1. Buat repo di GitHub.
2. Upload semua file ke branch `main` (`index.html` di root).
3. Buka **Settings → Pages → Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: `main`, folder `/ (root)` → **Save**
4. Tunggu 1–2 menit → situs live.

> Semua path sudah **relatif** sehingga aman di root domain (`username.github.io`) maupun subpath (`username.github.io/repo-name`).

---

## 8. Cara Edit Konten

1. Isi `CONTENT.md` terlebih dahulu.
2. Buka `index.html` — setiap section diberi komentar `<!-- ── 1. HERO ── -->` dst.
3. Cari teks `[...]` dan ganti dengan konten nyata.
4. Untuk mengubah warna/font, edit CSS custom properties di bagian `:root` di `css/style.css`.
5. Favicon: buka `assets/favicon.svg`, ganti huruf `N` dengan inisial nama Anda.

---

## 9. Checklist Pengujian Manual

- [ ] Klik tiap tombol nav → scroll ke section yang benar, judul tidak tertutup header.
- [ ] Muat ulang dengan `#projects` di URL → langsung ke section tersebut.
- [ ] Tab keyboard melewati semua link/tombol dengan urutan logis dan fokus terlihat.
- [ ] Menu mobile bisa dibuka/tutup; menutup otomatis setelah klik link atau tekan `Esc`.
- [ ] Uji di lebar 360px, 768px, 1280px — tidak ada scroll horizontal.
- [ ] Aktifkan "Reduce motion" di OS → tidak ada animasi atau smooth scroll.
- [ ] Semua link eksternal memakai `target="_blank" rel="noopener noreferrer"`.
- [ ] Tombol Download CV mengarah ke `assets/cv.pdf` dan langsung download.
