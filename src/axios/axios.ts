// fichier de config axios pour les requêtes vers l'API

import axios from 'axios';

const apiUrl = "https://javatoptoolsapi-production.up.railway.app/api";
console.log('API URL utilisée :', apiUrl); 

const api = axios.create({
    baseURL: apiUrl || 'http://localhost:8080/api',  // URL de l'API
    headers: {
        'Content-Type': 'application/json',
    },
}) 

export default api;