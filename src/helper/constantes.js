/************** QUIZ ************************ */
export const VITE_API_KEY_QUIZ = import.meta.env.VITE_API_KEY_QUIZ;
export const VITE_URL_QUIZ = import.meta.env.VITE_URL_QUIZ;

/**************** MANGA ********************** */

export const VITE_API_KEY_MANGA = import.meta.env.VITE_API_KEY_MANGA;
export const VITE_URL_MANGA = import.meta.env.VITE_URL_MANGA;
export const VITE_CONNECTION_TOKEN = import.meta.env.VITE_CONNECTION_TOKEN;
export const VITE_PERSONAL_CLIENT = import.meta.env.VITE_PERSONAL_CLIENT;
export const VITE_PASSWORD_CLIENT = import.meta.env.VITE_PASSWORD_CLIENT;

export const CREDENTIALS = {
    grant_type: 'password',
    username: 'Narela',
    password: VITE_PASSWORD_CLIENT,
    client_id: VITE_PERSONAL_CLIENT,
    client_secret: VITE_API_KEY_MANGA
};
