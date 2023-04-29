import axios from "axios";

const BASE_URL = "https://e-shooping-be.onrender.com/api";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQxNmNkNjk2NDUyZmFlYTBkOTdlMyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODA2NzY1OTAsImV4cCI6MTY4MDkzNTc5MH0.Ja8H4EBlY4MW8FVn_fOGaCUJkhD1E1y2ZZCAvoqeM5M"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});