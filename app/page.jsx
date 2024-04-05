import { ApiJikan } from "./api/jikan-api";
import Banner from "../components/main/Banner";
import MovieList from "../components/main/movieList";
import { cookies } from "next/headers";

export function getCookieData() {
  const cookieData = cookies().getAll();
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000)
  );
}

export default async function Home() {
  const cookieData = await getCookieData();
  const TopAnime = await ApiJikan("top/anime", "limit=8");
  const result = await TopAnime.data;
  const TopManga = await ApiJikan("top/anime", "page=2");
  const result2 = await TopManga.data;

  return (
    <>
      <Banner item={result2} />
      <div className="pb-40">
        <MovieList item={result} title="Trending Now" />
        <MovieList item={result2} title="Popular" />
      </div>
    </>
  );
}
