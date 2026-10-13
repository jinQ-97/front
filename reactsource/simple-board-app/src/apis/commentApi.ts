import axios from "axios";
import type { CommentCreate, CommentUpdate } from "../types/board";

// fastapi router 랑 통신

const url = "http://127.0.0.1:8000/comments";

// 삽입
export const postComment = async (comment: CommentCreate) => {
  const response = await axios.post(`${url}`, comment);
  return response.data;
};

// 삭제
export const deleteComment = async (commnetId:number) => {
  const response = await axios.delete(`${url}/${commnetId}`);
  return response.data;
};

// 수정
export const putComment = async (id: string, comment: CommentUpdate) => {
  const response = await axios.put(`${url}/${id}`, comment);
  return response.data;
};
