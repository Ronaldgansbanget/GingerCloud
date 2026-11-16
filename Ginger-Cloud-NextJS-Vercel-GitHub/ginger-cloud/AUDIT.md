# Ginger Cloud: Delivery Audit

Audit kode sumber dan visual pada 16 November 2026. Karena daftar asli "Section 14" tidak disertakan dalam brief, daftar berikut memakai 14 pre-flight checks yang relevan untuk landing page marketing ini. Semua hasil Pass di bawah didasarkan pada pengecekan sumber, parser TypeScript/CSS, dan pratinjau browser yang dijalankan tanpa server Next.js.

## Em-dash audit

**PASS**: 0 karakter U+2014 (em dash) dan 0 karakter U+2013 (en dash) dalam seluruh berkas teks proyek. Tanda hubung ASCII biasa untuk code dan CSS tetap digunakan.

## Pre-Flight Check: 14 points

- [x] **PASS 01 | Brand**: Seluruh konten produk menampilkan Ginger Cloud, tanpa konten seafood.
- [x] **PASS 02 | Positioning**: Marshmallow vegan dan inspirasi wedang jahe dinyatakan jelas di hero dan halaman.
- [x] **PASS 03 | Product options**: Hanya dua varian yang diperkenalkan, Original Sweet dan Ginger.
- [x] **PASS 04 | Section count**: Ada 9 elemen `section` semantik dalam `main`, ditambah ribbon dan footer.
- [x] **PASS 05 | Layout diversity**: Split hero, centered manifesto, product card grid, editorial split, numbered steps, mosaic, story panel, FAQ columns, dan CTA form.
- [x] **PASS 06 | Theme lock**: Warna, font, radius, dan spacing dikelola dalam satu stylesheet dengan variabel tema konsisten.
- [x] **PASS 07 | Image assets**: Keempat file WebP tersimpan lokal dan berhasil dimuat di pratinjau browser.
- [x] **PASS 08 | Responsive widths**: Pratinjau Chromium pada 1440px dan 390px menunjukkan 0px horizontal overflow.
- [x] **PASS 09 | Hero discipline**: Headline dipisah dalam tepat 2 baris dan CTA terlihat di viewport desktop maupun mobile.
- [x] **PASS 10 | Accessible navigation**: Ada skip link, label navigasi, tombol menu dengan `aria-expanded`, dan tautan anchor valid.
- [x] **PASS 11 | FAQ architecture**: FAQ menggunakan button, `aria-expanded`, `aria-controls`, panel terpasang, dan kontrol state.
- [x] **PASS 12 | Order architecture**: Pemilihan rasa dan jumlah tersedia; alur WhatsApp memakai variabel lingkungan atau fallback salin pesan.
- [x] **PASS 13 | Project structure**: Terdapat `package.json`, `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, TypeScript config, dan file env contoh.
- [x] **PASS 14 | Source parsing**: Parser TypeScript membaca TSX tanpa kesalahan sintaks, sementara PostCSS berhasil mem-parsing stylesheet.

## Section-Layout-Repetition audit

| Section | Layout family |
| --- | --- |
| 1. Beranda | Split editorial hero, copy + photographic stage |
| 2. Vegan promise | Centered typography + three-icon benefit row |
| 3. Dua rasa | Two oversized contrasting product cards |
| 4. Wedang jahe | Split editorial image + text |
| 5. Soft packages | Three-step timeline / numbered row |
| 6. Cloud moments | Asymmetric editorial mosaic |
| 7. Cerita brand | Decorative overlap + narrative panel |
| 8. FAQ | Two-column intro + accordion |
| 9. Pemesanan | Full color CTA banner + form card |

**PASS**: 7 lebih layout family digunakan; split editorial tampil lagi dengan komposisi dan arah visual yang berbeda.

## Hero discipline audit

- **PASS | Headline lines**: 2 baris eksplisit, "Selembut awan." dan "Sehangat jahe.".
- **PASS | Supporting text**: 17 kata, lebih ringkas daripada batas praktis 25 kata.
- **PASS | CTA visible**: Di pratinjau 1440x900 CTA terletak sekitar y=577 sampai 635; di 390x844 sekitar y=473 sampai 568.

## Batas verifikasi

Kompilasi penuh `npm install && npm run build` **belum dijalankan** karena lingkungan pengujian tidak bisa mengunduh dependensi Next.js. Pengujian yang dilakukan adalah pemeriksaan sintaks TSX, parse CSS, kelengkapan berkas, serta render statis berbasis markup yang ditranspilasi untuk memeriksa layout di Chromium. Jalankan `npm run build` setelah `npm install`, atau cek log build saat Vercel melakukan deploy. Jangan menafsirkan audit statis sebagai jaminan build produksi berhasil.

Foto produk adalah visual konsep, bukan label atau bukti formula final. Klaim produk dan persyaratan perizinan perlu dipastikan sebelum pemasaran publik.
