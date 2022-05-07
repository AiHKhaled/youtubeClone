import React from "react";

const VideoItem = ({ thumb, onVideoSelect }) => {
  const style = {
    display: "flex",
    cursor: "pointer",
    alignItems: "flexStart",
  };
  const img = {
    maxWidth: "180px",
  };
  const image = thumb.snippet.thumbnails.medium.url;
  const title = thumb.snippet.title;
  const id = thumb.id.videoId;
  return (
    <div onClick={() => onVideoSelect(thumb)} className="item" style={style}>
      <img style={img} className="ui image" src={image} key={id} alt={title} />
      <div className="content">
        <div className="">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
