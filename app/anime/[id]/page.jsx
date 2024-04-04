import Image from "next/image";
import { ApiJikan } from "../../api/jikan-api/index";
import Footer from "../../../components/footer/index";
import VideoApi from "../../../components/utils/VideoApi";
import { FaYoutubeSquare } from "react-icons/fa";
import ButtonColetion from "../../../components/utils/ButtonColetion";
import getCurrentUser, { authUserSession } from "../../libs/auth/route";
import CommentBox from "../../../components/utils/comment/CommentBox";
import CommentInput from "../../../components/utils/comment/CommentInput";
import { DataCollection } from "../../libs/DataCollection";

const page = async ({ params: { id } }) => {
  const Response = await ApiJikan(`anime/${id}`);
  const Anime = await Response.data;
  const collection = await DataCollection();
  const currentUser = await authUserSession();
  const user = await getCurrentUser();

  return (
    <div className="w-full h-full justify-center items-center bg-[#233250] pb-5 relative">
      <div className=" w-full px-6 sm:px-10 ">
        <div className="flex flex-col pt-24 justify-center items-center gap-4">
          <h2 className="font-bold text-3xl text-white text-center pt-5">
            {Anime.title} ~ {Anime.year}
          </h2>
        </div>
        <div
          className="grid sm:flex h-full sm:h-[400px] 
        mt-5 rounded-lg justify-center items-center bg-[#424769] gap-8 pb-5 sm:pb-0">
          <Image
            src={Anime.images.jpg.large_image_url}
            width={100}
            height={150}
            alt="../"
            className="bg-cover h-full w-full sm:w-1/2 "
          />
          <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-3 text-neutral-200 dark:text-white overflow-x-hidden px-7 ">
            <div className="grid gap-2 ">
              <h4 className=" font-medium text-md">{Anime.synopsis}</h4>
              <div className="flex flex-row pt-8 gap-8">
                <p className="text-md font-light">Rank : {Anime.rank}</p>
                <p className="text-md font-light">Score : {Anime.score}</p>
                <p className="text-md font-light">Rating: {Anime.rating}</p>
                <p className="text-md font-light">
                  Episodes : {Anime.episodes}
                </p>
              </div>
              <div>
                <div className="flex flex-row gap-7">
                  <VideoApi youtubeId={Anime.trailer.youtube_id} />
                  {currentUser && (
                    <ButtonColetion
                      anime_mal_id={id}
                      email={currentUser?.user.email}
                      anime_image={Anime.images.jpg.large_image_url}
                      anime_title={Anime.title}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white w-full overflow-hidden">
          <CommentInput anime_mal_id={id} />
        </div>
        <div className="w-full rounded-lg border-2 border-purple-600 p-4 my-8 mx-auto max-w-xl">
          <CommentBox
            anime_mal_id={id}
            email={currentUser?.user.email}
            anime_image={Anime.images.jpg.large_image_url}
            anime_title={Anime.title}
            username={currentUser?.user.name}
          />
        </div>
      </div>
    </div>
  );
};
export default page;
