import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://chat-applicationwithreact.herokuapp.com/api"
})

