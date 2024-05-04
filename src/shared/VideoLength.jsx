import moment from "moment";
import React from "react";

const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");
  return <div className="absolute bottom-2 right-2 py-2 px-2 text-white bg-black text-xs rounded-md">
    {
      //  time
      videoLengthInSeconds
    }
  </div>;
};

export default VideoLength;
