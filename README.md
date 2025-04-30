# Admin Login - Nusantara Data

Ini adalah aplikasi login untuk admin di platform Nusantara Data, dibangun dengan menggunakan **Next.js** dan berbagai teknologi modern.

## Fitur

1. **Login**: Pengguna harus login terlebih dahulu untuk mengakses dashboard. Menggunakan form login dengan validasi.
2. **Protected Route**: Halaman dashboard dilindungi, hanya bisa diakses setelah berhasil login.
3. **Data Dummy untuk Chart**: Data dummy disediakan untuk menampilkan chart pada dashboard admin.
   

## Teknologi yang Digunakan

- **Next.js** - Framework React untuk pengembangan aplikasi web.
- **TypeScript** - Superset JavaScript untuk pengetikan statis.
- **Shadcn** - Library UI untuk komponen yang stylish dan reusable. Shadcn juga mengintegrasikan **Recharts** untuk membuat grafik/chart dengan mudah dalam aplikasi.
- **Axios** - HTTP client untuk mengirimkan request API.
- **Tanstack Query** - Library untuk mengelola data fetching **dan mutation** (seperti POST, DELETE, PUT) dengan fitur seperti cache.
- **Tailwind CSS** - Framework CSS berbasis utility untuk membangun antarmuka yang cepat dan responsif.
- **Zod** - Library untuk validasi skema data.
- **Lucide-React** - Library ikon untuk React.


## penggunaan

- Login Dulu: Untuk dapat mengakses dashboard, kamu perlu login terlebih dahulu dengan memasukkan username dan password yang valid.
- Setelah berhasil login, kamu akan diarahkan ke dashboard admin.

## Cara Memulai

Sebelum memulai, pastikan kamu sudah menginstall **pnpm**. Jika belum, kamu bisa menginstallnya dengan cara:

```bash
npm install -g pnpm
```

## Menjalankan Proyek

1. Setelah menginstall dependensi, kamu bisa menjalankan proyek ini dengan: ```bash
pnpm dev
```
2. Buka **http://localhost:3000** di browser untuk melihat hasilnya.
