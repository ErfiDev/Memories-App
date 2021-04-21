import axios from "axios";
import config from "./config.json";

const { get, post, findOne, updateOne, likeOne , unLike } = config;

export const getHTTP = () => axios.get(get);

export const postHTTP = (data) =>
  axios.post(post, data, {
    headers: { "Content-Type": "application/json" },
  });

export const findOneHTTP = (id) => axios.get(`${findOne}/${id}`);

export const updateOneHTTP = (id, data) =>
  axios.patch(`${updateOne}/${id}`, data, {
    headers: { "Content-Type": "application/json" },
  });

export function like(uuid) {
  return axios.post(`${likeOne}/${uuid}`);
}

export function unlike(uuid) {
  return axios.post(`${unLike}/${uuid}`);
}