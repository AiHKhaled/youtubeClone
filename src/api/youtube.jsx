import axios from "axios";
const KEY = "AIzaSyC8RWcVvHp9pI7YmfpNHHVlZCWT74fblaI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 8,
    key: KEY,
  },
});
