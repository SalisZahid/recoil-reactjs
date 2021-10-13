import { atom } from "recoil";

export const posts = atom({
  key: "posts",
  default: [],
});

export const users = atom({
  key: "users",
  default: [],
});

export const comments = atom({
  key: "comments",
  default: [],
});
