import axios, { Axios } from "axios";
const baseUrl = "https://youtube138.p.rapidapi.com";
  // const baseUrl = "https://youtube-v2.p.rapidapi.com";



const options = {
  headers: {
    "X-RapidAPI-Key":import.meta.env.VITE_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    // "X-RapidAPI-Host": "youtube-v2.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, options);
  console.log(data);
  return data;

};
