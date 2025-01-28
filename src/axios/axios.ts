// fichier de config axios pour les requêtes vers l'API

import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',  // URL de l'API
    headers: {
        'Content-Type': 'application/json',
    },
}) 

export default api;