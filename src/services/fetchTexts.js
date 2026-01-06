import axios from "axios";

export const fetchWebsiteText = async(url)=> {
  const res = await axios.get(
    `https://r.jina.ai/${url}`
  );
  return res.data;
}
