import React from "react";

const VideoDetails = ({ thumb }) => {
  if (!thumb) {
    return <div>loading...</div>;
  }
  const videoLink = `https://www.youtube.com/embed/${thumb.id.videoId}`;
  return (
    <>
      <div className="ui embed">
        <iframe title="video player" src={videoLink} />
      </div>
      <div className="ui hidden divider" />
      <h4>{thumb.snippet.title}</h4>
      <p> {thumb.snippet.description} </p>
    </>
  );
};

export default VideoDetails;
