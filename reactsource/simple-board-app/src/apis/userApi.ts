// 서버 라우터와 통신
// fetch(), axios()
import axios from "axios";
import type { UserLogin } from "../types/user";

const SERVER_URL = "http://localhost:8000/auth"

// 로그인
export const signin = async (data:UserLogin) => {
   const response = await axios.post(`${SERVER_URL}/login`, data)
   return response.data
}