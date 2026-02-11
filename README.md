# Privat TTT Landing Page

Landing page modern untuk layanan kelas privat **Privat TTT (Tahsin, Tajwid, & Tahfidz)**.

## Overview
Proyek ini adalah landing page statis (single-file) dengan fokus pada:
- desain clean, modern, dan premium,
- struktur informasi yang jelas untuk konversi,
- performa ringan tanpa framework.

## Tech Stack
- **HTML5**
- **CSS3** (internal style dengan design tokens)
- **Vanilla JavaScript** (minimal, untuk interaksi navbar/mobile menu)
- **Google Fonts**

## Fitur Utama
- Navbar sticky dengan state saat scroll.
- Mobile hamburger menu (collapsible).
- Hero section dengan CTA utama.
- Section Program, Keunggulan, Testimoni.
- Section Harga (3 paket, paket tengah di-highlight).
- Final CTA ke WhatsApp.
- Footer final dengan informasi kontak.
- Micro-interactions ringan (hover/lift pada button & card).

## Struktur File
```text
.
├── index.html   # Seluruh markup, styling, dan JS minimal
└── README.md
```

## Menjalankan Secara Lokal
Karena proyek ini statis, cukup jalankan HTTP server sederhana:

```bash
python3 -m http.server 4173
```

Lalu buka:

```text
http://localhost:4173
```

## Catatan Pengembangan
- Tidak menggunakan dependency/build tool.
- Fokus pada mobile-first dan readability.
- Semua style dan script berada di `index.html` untuk kemudahan deployment sederhana.

## Deployment
Dapat di-deploy langsung ke layanan static hosting, misalnya:
- GitHub Pages
- Netlify
- Vercel (static)

---
Dibuat untuk kebutuhan branding dan akuisisi calon murid Privat TTT.
