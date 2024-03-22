import axios from "axios";
import { VITE_API_KEY_QUIZ } from "../helper/constantes";

export const useServiceManga = () => {
  const instance = axios.create({
    baseURL: VITE_API_KEY_QUIZ,
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });

  const getQuiz = (categoria) => {
    return instance.get(categoria, "/api/v1/tags");
  };

  return { getQuiz };
};
