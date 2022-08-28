import axios from "axios";
import { baseUrl } from "./Constants/const";

   const instance = axios.create({
  baseURL: baseUrl
});

export default instance;