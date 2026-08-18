import Link from "next/link";
import { searchAnime } from "@/lib/anilist";
export default async function Home(){
  const data = await searchAnime("One Piece");
  const anime = data.Page.media;
  return <main><section className="hero"><div className="container"><h1>Sisi Otaku 🌸</h1><p className="lead">Temukan anime, jadwal tayang, karakter favorit, dan simpan anime pilihanmu dalam satu tempat.</p><form className="search" action="/search"><input className="input" name="q" placeholder="Cari anime..." /><button className="btn">Cari</button></form></div></section>
  <section className="section"><div className="container"><h2>🔥 Anime Populer</h2><div className="grid">{anime.map((a:any)=><Link className="card" href={`/anime/${a.id}`} key={a.id}><img className="cover" src={a.coverImage.large}/><div className="pad"><div className="title">{a.title.english||a.title.romaji}</div><div className="muted">{a.seasonYear||"—"} • {a.status||"—"}</div></div></Link>)}</div></div></section></main>
}