import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "../shared/VideoLength";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
const VideoCard = ({ item }) => { 
  // const VideoCard = ({ video }) => { 
  return (
    // <Link to={`video/${item?.video_id}`} >
    <Link to={`video/${item?.videoId}`} >
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl  overflow-hidden">
          <img src={item?.thumbnails?.[0]?.url} className="object-cover w-full h-full" alt="" />
        {/* {item.video_length && ( */}
        {item?.lengthSeconds && (
          // <VideoLength time={item?.video_length}/>
          <VideoLength time={item?.lengthSeconds}/>
          
        )}
        </div>
        <div className="flex text-white mt-3 ">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              {/* <img src={item?.thumbnails?.[1]?.url} className="h-full w-full object-cover" alt="image-logo" /> */}
              <img src={item?.author?.avatar[0]?.url} className="h-full w-full object-cover" alt="image-logo" />
            </div>
          </div>

          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2>">
              {item?.title.slice(0,30)}
            {
              item?.author?.badges[0]?.type=== "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-[12px] text-white/[0.5] ml-1"/>
              )
            }
            </span>
            <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
              {/* <span>{`${abbreviateNumber(item?.number_of_views,2)}`} views</span> */}
              <span>{`${abbreviateNumber(item?.stats?.views,2)}`} views</span>
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
    </Link>
  );
};

export default VideoCard;
