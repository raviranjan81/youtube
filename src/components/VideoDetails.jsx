import React, { useState, useEffect, useContext } from "react";
import ReactPlayer from "react-player/youtube";
import { abbreviateNumber } from "js-abbreviation-number";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/Api";
import { Context } from "../context/ContextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";

const VideoDetails = () => {
  const { setLoading } = useContext(Context);
  const { id } = useParams();
  const [relatedVideos, setRelatedVideos] = useState();
  const [video, setVideo] = useState(null);
  
  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      console.log("vdo", res);
      setVideo(res);
      setLoading(false);
    });
  };
  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`)
      .then((res) => {
        if (res) {
          setRelatedVideos(res);
          console.log(res);
        } else {
          console.error("Empty response or invalid data received.");
        }
      })
      .catch((error) => {
        console.error("Error fetching related videos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <div>
      <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
          <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
            <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                width="100%"
                height="100%"
                style={{ backgroundColor: "#000000" }}
                playing={true}
              />
            </div>

            <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
              {video?.title}
            </div>
            <div className="flex justify-between flex-col md:flex-row mt-4">
             
                <div className="flex">
                <div className="flex items-start">
                  <div className="flex h-11 w-11 rounded-full overflow-hidden">
                    <img
                      className="object-cover h-full w-full"
                      src={video?.author?.avatar[0].url}
                      alt="logo-yt-channel"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-3">
                  <div className="text-white text-md font-semibold flex items-center">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-[12px] text-white/[0.5] ml-1" />
                    )}
                  </div>
                  <div className="text-white/[0.7] text-sm ">
                    {video?.author?.stats?.subscribersText}
                  </div>
                </div>
                </div>
                <div className="flex text-white mt-4 md:mt-0">
                  <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                    <AiOutlineEye className="text-xl text-white mr-2" />
                    <span>
                      {`${abbreviateNumber(video?.stats?.views, 2)}`} views
                    </span>
                  </div>
                  <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                    <AiOutlineLike className="text-xl text-white mr-2" />
                    <span>
                      {`${abbreviateNumber(video?.stats?.likes, 2)}`} Likes
                    </span>
                  </div>
                </div>
            </div>
          </div>

          <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]" id="ravi-sc">
            {
              relatedVideos?.contents?.map((item,index)=>{
                if (item?.type!=="video") {
                  return false;
                }
                return (
                  <SuggestionVideoCard key={index} item={item?.video} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
