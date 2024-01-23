import axios from "axios";

export const apiApp = axios.create({
  baseURL: "http://localhost:8000/api/",
  timeout: 20000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
      "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization",
    "Access-Control-Max-Age": "86400",
  },
});
