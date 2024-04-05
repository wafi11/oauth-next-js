import { ApiJikan } from "./api/jikan-api";
import Banner from "../components/main/Banner";
import MovieList from "../components/main/movieList";
import { cookies } from "next/headers";
import getCurrentUser from "./libs/auth/route";
import Link from "next/link";

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
  const currentUser = await getCurrentUser();
  const TopAnime = await ApiJikan("top/anime", "limit=8");
  const result = await TopAnime.data;
  const TopManga = await ApiJikan("top/anime", "page=2");
  const result2 = await TopManga.data;

  return (
    <>
      {currentUser ? (
        <>
          <Banner item={result2} />
          <div className="pb-40">
            <MovieList item={result} title="Trending Now" />
            <MovieList item={result2} title="Popular" />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center text-center mt-40">
          <h1 className="text-gray-800 dark:text-teal-500 text-3xl">
            Anda Belum Login,
          </h1>
          <h2 className="text-gray-800 dark:text-teal-500 text-3xl">
            Silahkan login terlebih dahulu
          </h2>
          <Link
            href="/login"
            className="bg-black text-gray-300 p-3 rounded-lg w-[100px] h-50">
            Login
          </Link>
        </div>
      )}
    </>
  );
}
