import { ApiJikan, getNestedAnimeResponse } from "./api/jikan-api";
import Banner from "../components/main/Banner";
import Navbar from "../components/navbar";
import MovieList from "../components/main/movieList";
import Footer from "../components/footer";

export default async function Home() {
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
