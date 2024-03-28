import { ApiJikan } from "./api/jikan-api";
import Banner from "../components/main/Banner";
import Navbar from "../components/navbar";
import MovieList from "../components/main/movieList";
import Footer from "../components/footer";

export default async function Home() {
  const TopAnime = await ApiJikan("top/anime", "limit=8");
  const TopManga = await ApiJikan("top/manga", "limit=8");

  return (
    <>
      <Banner item={TopAnime} />
      <div className="pb-40">
        <MovieList item={TopAnime} title="Trending Now" />
        <MovieList item={TopManga} title="Popular" />
      </div>
      <Footer />
    </>
  );
}
