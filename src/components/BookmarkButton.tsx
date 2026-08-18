 "use client";
import {useState} from "react";
import {supabaseBrowser} from "@/lib/supabase";
export default function BookmarkButton({anime}:{anime:{id:number,title:string,cover_url:string}}){
 const [msg,setMsg]=useState("");
 async function save(){
  const sb=supabaseBrowser(); const {data:{user}}=await sb.auth.getUser();
  if(!user){setMsg("Silakan login terlebih dahulu.");return}
  const {error}=await sb.from("bookmarks").upsert({user_id:user.id,anilist_id:anime.id,title:anime.title,cover_url:anime.cover_url},{onConflict:"user_id,anilist_id"});
  setMsg(error?error.message:"✓ Ditambahkan ke bookmark");
 }
 return <div style={{marginTop:12}}><button className="btn" onClick={save}>♡ Bookmark</button>{msg&&<div className="muted" style={{marginTop:8}}>{msg}</div>}</div>
}