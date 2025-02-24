import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/backend_app/", 
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;