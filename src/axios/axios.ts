// fichier de config axios pour les requêtes vers l'API

import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
console.log('API URL utilisée:', apiUrl); 

const api = axios.create({
    baseURL: apiUrl || 'http://localhost:8080/api',  // URL de l'API
    headers: {
        'Content-Type': 'application/json',
    },
}) 

export default api;