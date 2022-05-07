import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ thumbs, onVideoSelect }) => {
  const videolist = thumbs.map((thumb) => {
    return (
      <VideoItem
        key={thumb.id.videoId}
        onVideoSelect={onVideoSelect}
        thumb={thumb}
      />
    );
  });
  return <div className="ui relaxed divided list"> {videolist} </div>;
};

export default VideoList;
