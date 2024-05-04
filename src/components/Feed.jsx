import React, { useContext, useEffect } from "react";
import { Context } from "../context/ContextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading , searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[clac(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-5 ">
          {!loading && searchResults.map((item) => {
            console.log(item);
          // if (item.type !== "video") return null; // Skip non-video items
          // return <VideoCard key={item.video_id} item={item} />;
          return <VideoCard key={item?.video?.videoId} item={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
