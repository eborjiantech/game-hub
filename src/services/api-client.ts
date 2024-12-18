import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ce4b1636ef7247328a6bedd032f421a0",
  },
});
