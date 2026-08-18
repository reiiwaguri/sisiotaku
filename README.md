# Sisi Otaku 🌸

Portal informasi anime berbasis Next.js + Supabase + AniList, siap dipasang di Vercel.

## Fitur
- Beranda anime dan pencarian AniList
- Jadwal mingguan berdasarkan hari
- Detail anime: genre, sinopsis, studio, episode, status, karakter
- Karakter yang ulang tahun hari ini dari AniList
- Register/login pengguna via Supabase Auth
- Bookmark anime
- Admin login menggunakan kode rahasia server-side
- Admin dapat membuat artikel/postingan dengan gambar
- Admin dapat menyimpan link streaming eksternal yang dikonfigurasi sendiri
- Responsive/mobile friendly

## 1. Jalankan lokal
```bash
npm install
cp .env.example .env.local
npm run dev
```

Isi Supabase URL dan anon key pada `.env.local`.

## 2. Supabase
Buat project Supabase, lalu buka SQL Editor dan jalankan `supabase/schema.sql`.

Aktifkan Email Auth di Authentication > Providers > Email.

Buat Storage bucket bernama `post-images` dan set bucket menjadi public, atau sesuaikan policy storage sesuai kebutuhan.

## 3. Admin
Set `ADMIN_LOGIN_CODE` di environment Vercel/server. Jangan masukkan kode admin ke client-side code.

Login admin ada di `/admin/login`.

## 4. Vercel
Push project ini ke GitHub, lalu Import repository di Vercel.
Tambahkan semua variable dari `.env.example` pada Project Settings > Environment Variables.

Build command:
`npm run build`

## 5. Catatan
AniList dipanggil dari server route agar query lebih aman dan tidak mengekspos detail implementasi ke browser.
Link streaming adalah field yang dikelola admin; gunakan hanya sumber yang legal/berizin.
