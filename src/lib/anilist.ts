const API = "https://graphql.anilist.co";

async function gql(query: string, variables: Record<string, unknown> = {}) {
  const res = await fetch(API, {
    method: "POST",
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify({query, variables}),
    next: { revalidate: 300 }
  });
  if (!res.ok) throw new Error("AniList request failed");
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0]?.message || "AniList error");
  return json.data;
}

export async function searchAnime(search: string) {
  return gql(`query($search:String){ Page(perPage:20){ media(search:$search,type:ANIME,sort:POPULARITY_DESC){ id title{romaji english native} coverImage{large} genres description(asHtml:false) episodes status seasonYear averageScore } } }`, {search});
}

export async function animeById(id: number) {
  return gql(`query($id:Int){ Media(id:$id,type:ANIME){ id title{romaji english native} coverImage{extraLarge} bannerImage genres description(asHtml:false) episodes status seasonYear averageScore studios(isMain:true){nodes{name}} characters(sort:ROLE,perPage:12){edges{role node{id name{full native} image{large} dateOfBirth{day month}}}} } }`, {id});
}

export async function weeklySchedule() {
  return gql(`query{ Page(perPage:50){ airingSchedules(notYetAired:true,sort:TIME,airingAt_greater:0){ airingAt episode media{ id title{romaji english native} coverImage{medium} genres description(asHtml:false) episodes status } } } }`);
}

export async function birthdayCharacters(month: number, day: number) {
  return gql(`query($month:Int,$day:Int){ Page(perPage:50){ characters(birthday_month:$month,birthday_day:$day,sort:SEARCH_MATCH){ id name{full native} image{large} dateOfBirth{day month} media(perPage:3){nodes{id title{romaji english}}} } } }`, {month, day});
}