import axios from "axios";

export const userAuthBaseUrl = axios.create({
  baseURL: "http://api-dev.nusantaradata.com/ndi/",
  headers: {
    "Content-Type": "application/json",
  },
});
