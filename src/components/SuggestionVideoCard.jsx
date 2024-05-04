import React from 'react'
import { Link } from "react-router-dom";
import VideoLength from "../shared/VideoLength";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from 'react-icons/bs';

const SuggestionVideoCard = ({item}) => {
  return (
    <>
      <Link to={`/video/${item?.videoId}`} >
      <div className="flex  mb-3">
        <div className="relative h-24 lg:h-20 xl:h-24 min-w-[168px] lg:w-32 lg:min-w[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800   overflow-hidden">
          <img src={item?.thumbnails?.[0]?.url} className="object-cover w-full h-full" alt="img-image" />
        {/* {item.video_length && ( */}
        {item?.lengthSeconds && (
          // <VideoLength time={item?.video_length}/>
          <VideoLength time={item?.lengthSeconds}/>
          
        )}
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm lg:text-xs xl:text-sm line-clamp-2 font-bold text-white">
            {item?.title}
          </span>
            <span className="text-[12px] lg:text-[10px] xl:text-[12px]  line-clamp-2 font-semibold mt-2 text-white/[0.7] flex items-center>">
              {item?.title.slice(0,30)}
            {
              item?.author?.badges[0]?.type=== "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-[12px] lg:text-[10px] xl:text-[12px] text-white/[0.5] ml-1"/>
              )
            }
            </span>
            <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
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
    </Link>
    </>
  )
}

export default SuggestionVideoCard
