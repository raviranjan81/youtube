import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "../shared/VideoLength";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";

const SearchResultsVideoCard = ({ item }) => {
  return (
    <Link to={`/video/${item?.videoId}`}>
      <div className="flex flex-col md:flex-col mb-8 md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4">
       <div className="flex">
       <div className="relative flex shrink-0 h-48 md:h-28 lg:h-64 w-full md:w-48 xl:w-80 rounded-xl bg-slate-800 overflow-hidden">
          <img
            src={item?.thumbnails?.[0]?.url}
            className="object-cover w-full h-full"
            alt="img-image"
          />
          {/* {item.video_length && ( */}
          {item?.lengthSeconds && (
            // <VideoLength time={item?.video_length}/>
            <VideoLength time={item?.lengthSeconds} />
          )}
        </div>
        <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
          <span className="text-lg md:text-2xl font-semibold line-clamp-2 text-white">
            {item?.title}
          </span>
          <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-white/[0.7] md:pr-24 md:my-4 ">
            {item?.descriptionSnippet}
          </span>
          <div className="hidden md:flex items-center">
            <div className="flex items-start mr-3">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  src={item?.author?.avatar[0]?.url}
                  className="w-full h-full object-cover"
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <span className="text-sm font-semibold mt-2 text-white/[0.7] flex items-center">
                {item?.author?.title}
                {item?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-[12px] text-white/[0.5] ml-1" />
                )}
              </span>
              <div className="flex text-sm font-semibold text-white/[0.7] truncate overflow-hidden">
                {/* <span>{`${abbreviateNumber(item?.number_of_views,2)}`} views</span> */}
                <span>
                  {`${abbreviateNumber(item?.stats?.views, 2)}`} views
                </span>
                <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                  .
                </span>
                <span className="truncate">
                  {/* {item?.published_time} */}
                  {item?.publishedTimeText}
                </span>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </Link>
  );
};

export default SearchResultsVideoCard;
