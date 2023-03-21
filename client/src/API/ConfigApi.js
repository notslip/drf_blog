import axios from "axios";

const config ={
    BaseUrl : "http://localhost:8000/",
    TokenWord : "Token ",
};

export const host = axios.create({
    // withCredentials: true,
    baseURL: config.BaseUrl,
});

export const authHost = axios.create({
    // withCredentials: true,
    baseURL: config.BaseUrl,
});




authHost.interceptors.request.use((conf)=>{
    conf.headers.Authorization = localStorage.getItem('access_token');
    return conf;
});

