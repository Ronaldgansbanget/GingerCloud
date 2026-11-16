# Ginger Cloud

Website marketing 1 halaman untuk **Ginger Cloud**, brand marshmallow vegan dengan inspirasi **wedang jahe**, dalam dua pilihan rasa: **Original Sweet** dan **Ginger**.

Visual memakai pastel cyan, cream, peach, tipografi rounded editorial, elemen cloud, dan foto konsep produk yang disimpan secara lokal.

## Persyaratan

- Node.js 20.9 atau lebih baru
- npm
- Akun GitHub dan Vercel untuk publikasi

## Menjalankan di komputer

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka `http://localhost:3000`.

Di Windows, salin file `.env.example` dan beri nama `.env.local` secara manual jika perintah `cp` tidak tersedia.

## Menyambungkan tombol pemesanan ke WhatsApp

Ubah `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
```

Angka di atas hanya **contoh format**, bukan nomor Ginger Cloud. Ganti dengan nomor resmi bisnis Anda, hanya angka tanpa `+`, spasi, atau tanda baca.

Saat nomor belum diisi, tombol pesanan otomatis akan **menyalin teks permintaan pemesanan** alih-alih mengarah ke nomor yang tidak diketahui. Semua teks pesan bisa diubah di `app/page.tsx` pada variabel `orderMessage`.

Di Vercel, buka **Project > Settings > Environment Variables** dan tambahkan `NEXT_PUBLIC_WHATSAPP_NUMBER` dengan nomor Anda, lalu lakukan Redeploy.

## Upload ke GitHub

1. Buat repository kosong, misalnya `ginger-cloud`.
2. Ekstrak ZIP proyek ini ke folder komputer.
3. Jalankan perintah berikut dari folder `ginger-cloud`:

```bash
git init
git add .
git commit -m "Initial Ginger Cloud website"
git branch -M main
git remote add origin https://github.com/USERNAME/ginger-cloud.git
git push -u origin main
```

Ganti `USERNAME` sesuai nama pengguna GitHub Anda. Jangan mengunggah file `.env.local` karena sudah masuk `.gitignore`.

## Deploy ke Vercel

1. Masuk ke https://vercel.com.
2. Pilih **Add New > Project**.
3. Impor repository GitHub `ginger-cloud`.
4. Framework akan dikenali sebagai **Next.js**.
5. Bila sudah punya nomor WA, isi Environment Variable `NEXT_PUBLIC_WHATSAPP_NUMBER`.
6. Klik **Deploy**.

Pembaruan yang di-push ke branch utama GitHub akan memicu deployment Vercel secara otomatis sesuai konfigurasi project.

## Struktur folder

```text
ginger-cloud/
  app/
    globals.css        # Seluruh tema, animasi, dan responsive layout
    layout.tsx         # Metadata dan root layout
    page.tsx           # Homepage dan interaksi
  public/
    favicon.svg
    images/
      ginger-cloud-hero.webp
      original-sweet.webp
      ginger-twist.webp
      ginger-ingredients.webp
  .env.example
  .gitignore
  next-env.d.ts
  next.config.ts
  package.json
  tsconfig.json
  README.md
```

## Mengubah konten

- Nama brand dan teks halaman: `app/page.tsx`
- Warna, jarak, font, layout, animasi: `app/globals.css`
- Judul SEO dan deskripsi: `app/layout.tsx`
- Gambar: `public/images/`
- Menu dan FAQ: `app/page.tsx`

## Catatan penting sebelum promosi publik

- **Visual produk adalah konsep**, bukan dokumentasi produk fisik final.
- Pastikan komposisi, klaim vegan, bahan penstabil, alergen, izin edar, informasi kemasan, dan proses produksi disesuaikan dengan produk akhir. Website tidak menyatakan adanya sertifikasi vegan atau izin tertentu.
- Belum ada harga, stok, nomor resmi, atau toko online yang diberikan sehingga informasi ini sengaja tidak direkayasa.
- Font diambil dari Google Fonts saat pengguna terhubung internet. Fallback font tersedia.

## Teknologi

Next.js App Router, React, TypeScript, CSS vanilla, dan `next/image` untuk foto lokal. Tidak menggunakan UI kit generik atau komponen komersial.
