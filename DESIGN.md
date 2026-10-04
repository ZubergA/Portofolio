# DESIGN.md: Panduan Visual

## 1. Arah Estetika

**Kata kunci:** tenang, lapang, rapi, lembut, berkarakter.

Bayangkan halaman jurnal atau katalog kecil yang dicetak di kertas putih kebiruan: banyak ruang kosong, tipografi yang jadi bintang utamanya, dan biru pastel sebagai aksen yang menenangkan. **Karakter datang dari tipografi, spasi, dan detail kecil, bukan dari efek visual.**

## 2. Palet Warna

Definisikan sebagai CSS custom properties di `:root`.

| Token | Hex | Fungsi |
|---|---|---|
| `--bg` | `#F5F9FD` | Latar utama halaman |
| `--surface` | `#EAF2FB` | Latar kartu / section selang-seling |
| `--surface-2` | `#DCE9F7` | Hover kartu, chip, penanda halus |
| `--border` | `#CFDFF1` | Garis pemisah & border tipis |
| `--accent` | `#7FA8D6` | Biru pastel utama (dekorasi, garis, highlight) |
| `--accent-strong` | `#3F6B9E` | Biru untuk **teks link & tombol** (kontras ≥ 4.5:1) |
| `--text` | `#1F2D3D` | Teks utama (biru-abu sangat gelap, bukan hitam pekat) |
| `--text-muted` | `#5B6B7D` | Teks sekunder, tanggal, keterangan |

**Aturan warna**
- Biru pastel `--accent` dipakai untuk dekorasi, bukan untuk teks kecil (kontrasnya rendah). Teks berwarna memakai `--accent-strong`.
- Maksimal **satu warna aksen.** Jangan tambah ungu, pink, atau hijau.
- Latar section boleh selang-seling antara `--bg` dan `--surface` agar ritme halaman terasa, tanpa perlu garis tebal.
- Tanpa gradient mencolok. Jika ingin gradient, hanya satu yang sangat halus (`--bg` → `--surface`) di area hero, tidak lebih.

## 3. Tipografi

Pakai **maksimal 2 font family** dari Google Fonts, dengan fallback yang layak.

| Peran | Font | Fallback |
|---|---|---|
| Judul & nama (display) | **Instrument Serif** | `Georgia, serif` |
| Isi & UI | **Plus Jakarta Sans** *(diimplementasikan — clean, geometric)* | `system-ui, sans-serif` |

> Hindari Inter, Roboto, dan Poppins sebagai default. Itu yang membuat banyak situs terlihat seragam.

**Skala (gunakan `clamp()` agar responsif)**
- Nama di hero: `clamp(2.75rem, 7vw, 5rem)`, serif, `line-height: 1.05`, `letter-spacing: -0.01em`
- Judul section (H2): `clamp(1.75rem, 3.5vw, 2.5rem)`, serif
- Judul kartu (H3): `1.15rem`, sans-serif, `font-weight: 600`
- Isi: `1rem`–`1.0625rem`, `line-height: 1.7`
- Label kecil (tanggal, kategori): `0.8125rem`, uppercase opsional dengan `letter-spacing: 0.08em`

**Lebar baca:** paragraf maksimal `65ch`.

## 4. Layout & Spasi

- Container: `max-width: 960px`, padding samping `clamp(1.25rem, 5vw, 2rem)`, terpusat.
- Jarak antar section: `clamp(4rem, 10vw, 7rem)` vertikal.
- Skala spasi berbasis 4/8px (`--space-1` … `--space-8`).
- Border radius: **kecil dan konsisten** (`8px` untuk kartu & tombol). Hindari bentuk pil raksasa di mana-mana.
- Gunakan garis tipis `1px solid var(--border)` sebagai pemisah, bukan bayangan tebal.
- Bayangan (jika perlu): satu saja, sangat halus, contoh `0 1px 2px rgba(31,45,61,.06)`.

## 5. Komponen

**Header**
- Sticky di atas, tinggi ±64px, latar `--bg` dengan opasitas ±85% + `backdrop-filter: blur(8px)` (halus saja), border bawah 1px `--border`.
- Kiri: nama (serif). Kanan: tombol navigasi.
- Link nav: teks biasa, tanpa kotak. Link aktif ditandai garis bawah tipis 2px `--accent`.
- Mobile: tombol menu sederhana (teks "Menu" atau ikon 2 garis) yang membuka daftar link. Tanpa animasi berlebihan.

**Tombol**
- Primer: latar `--accent-strong`, teks putih, radius 8px, padding nyaman. Hover: sedikit lebih gelap.
- Sekunder: border 1px `--accent-strong`, latar transparan.
- Fokus keyboard wajib terlihat jelas (`outline: 2px solid var(--accent-strong); outline-offset: 3px`).

**Kartu proyek**
- Latar `--surface`, border 1px `--border`, radius 8px, padding `1.5rem`.
- Hover: naik 2px (`translateY(-2px)`) dan border menjadi `--accent`. Durasi 180ms. Cukup itu.

**Chip / tag skill**
- Latar `--surface-2`, teks `--text`, radius 6px, padding kecil, font 0.8125rem. Bukan pil bulat berwarna-warni.

## 6. Gerak (Motion)

- Smooth scroll via CSS (`scroll-behavior: smooth`).
- Animasi masuk (opsional): elemen *fade-in + geser 12px ke atas* sekali saat masuk viewport, durasi ≤ 500ms. Gunakan `IntersectionObserver`, tanpa library.
- **Wajib** matikan semua animasi/transisi di bawah `@media (prefers-reduced-motion: reduce)`.
- Tidak ada parallax, tidak ada animasi berulang yang terus bergerak, tidak ada kursor kustom.

## 7. Sentuhan "Estetik" yang Diizinkan

Pilih **maksimal 2–3** dari daftar ini agar tidak berlebihan:

- Satu bentuk organik besar dan sangat transparan (SVG, biru pastel ±25% opasitas) di sudut hero, sebagai dekorasi latar.
- Nomor section bergaya editorial (`01`, `02`, …) dalam font kecil berwarna `--text-muted` di sebelah judul.
- Garis horizontal tipis dengan titik kecil berwarna aksen sebagai pemisah section.
- Huruf miring (italic) pada satu kata di judul hero untuk memberi karakter.
- Tekstur noise sangat halus pada latar (opasitas ≤ 3%).

## 8. Hal yang Dihindari (Anti "AI Slop")

Ini daftar larangan. Jika hasil akhir mengandung hal-hal berikut, anggap gagal:

- ❌ Gradient ungu–biru–pink atau gradient mencolok apa pun
- ❌ Efek glassmorphism berlebihan, kartu berkilau, glow neon, bayangan berwarna tebal
- ❌ Emoji sebagai ikon section atau bullet (🚀 ✨ 💡)
- ❌ Hero generik bergaya "👋 Hi, I'm … — passionate developer crafting delightful experiences"
- ❌ Kalimat klise: *passionate, crafting, seamless, cutting-edge, innovative solutions, digital experiences, leverage*
- ❌ Blob/orb melayang yang bergerak, partikel, grid latar berkedip
- ❌ Semua kartu diberi ikon bulat di atas + judul + 2 baris teks secara seragam
- ❌ Animasi mengetik (typewriter) pada judul
- ❌ Badge "Available for work" berdenyut hijau, kecuali pemilik memintanya
- ❌ Tiga kolom fitur berukuran sama di mana-mana; variasikan ritme layout
- ❌ Teks rata tengah untuk paragraf panjang
- ❌ Lebih dari 2 font family atau lebih dari 1 warna aksen
- ❌ Statistik karangan ("100+ proyek", "5 tahun pengalaman") jika tidak diberikan pemilik

## 9. Gambar & Ikon

- Tidak perlu banyak gambar. Jika ada: rasio konsisten, `border-radius: 8px`, `loading="lazy"`, atribut `alt` bermakna.
- Ikon: gunakan **SVG inline** sederhana bergaya garis (stroke 1.5px) hanya di tempat yang perlu (GitHub, LinkedIn, email). Jangan memakai library ikon besar.
- Favicon: SVG sederhana (inisial nama di atas latar `--accent`).
