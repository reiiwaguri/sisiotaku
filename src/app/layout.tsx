import "./globals.css";
import Link from "next/link";

export const metadata = {title:"Sisi Otaku", description:"Portal informasi anime Indonesia"};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <><header className="nav"><div className="container navin">
    <Link className="brand" href="/">🌸 Sisi Otaku</Link>
    <nav className="navlinks">
      <Link href="/schedule">Jadwal</Link><Link href="/birthday">Birthday</Link><Link href="/search">Search</Link><Link href="/bookmark">♡ Bookmark</Link><Link href="/login">Login</Link>
    </nav>
  </div></header>{children}<footer className="section"><div className="container muted">Sisi Otaku • Data anime dari AniList • © 2026</div></footer></>
}