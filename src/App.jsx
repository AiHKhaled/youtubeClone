import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/Videos";
import VideoDetails from "./components/VideoDetails";

const App = () => {
  const [thumbs, setThumbs] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearchSubmit("hello");
  }, []);

  const onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setThumbs(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <div className="ui grid" style={{ marginTop: "20px" }}>
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails thumb={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} thumbs={thumbs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
