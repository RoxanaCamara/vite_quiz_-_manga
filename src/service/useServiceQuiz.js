import axios from 'axios';
import { VITE_API_KEY_QUIZ } from '../helper/constantes';

export const useServiceQuiz = () => {
    const instance = axios.create({
        baseURL: VITE_API_KEY_QUIZ,
        timeout: 1000,
        headers: { 'X-Custom-Header': 'foobar' }
    });

    const getQuizTag = (categoria) => {
        return instance.get(categoria, '/api/v1/tags');
    };

    const getQuizCategorie = (categoria) => {
        return instance.get(categoria, '/api/v1/categories');
    };

    const getQuizQuestion = (categoria) => {
        return instance.get(categoria, '/api/v1/questions');
    };

    return { getQuizTag, getQuizCategorie, getQuizQuestion };
};
