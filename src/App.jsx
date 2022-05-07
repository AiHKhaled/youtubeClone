import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/Videos";
import VideoDetails from "./components/VideoDetails";

class App extends React.Component {
  state = { thumbs: [], selectedVideo: null };
  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      thumbs: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onVideoSelect = (thumb) => {
    this.setState({ selectedVideo: thumb });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid" style={{ marginTop: "20px" }}>
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails thumb={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                thumbs={this.state.thumbs}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
