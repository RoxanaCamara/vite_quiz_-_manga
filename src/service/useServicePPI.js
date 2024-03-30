import axios from 'axios';
import {
    VITE_API_KEY_PRIVADA_PPI,
    VITE_API_KEY_PUBLICA_PPI,
    VITE_API_URL_PPI
} from '../helper/constantes';

export const useServicePPI = () => {
    const instance = axios.create({
        baseURL: VITE_API_URL_PPI,
        timeout: 1000,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            AuthorizedClient: 'API_CLI_REST',
            ClientKey: 'pp19CliApp12',
            ApiKey: VITE_API_KEY_PUBLICA_PPI,
            ApiSecret: VITE_API_KEY_PRIVADA_PPI
        }
    });

    const login = () => {
        return instance.post('api/1.0/Account/LoginApi');
    };
    return { login };
};
