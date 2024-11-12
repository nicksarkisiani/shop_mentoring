import axios from "axios";

const API_URL: string = "https://api.unsplash.com/"

const ACCESS_KEY = "zSwuzttd563lJz0ZzJ65pfpMtM7oYeEeSgHm9HWfQY8";
const ACCEPT_VERSION = "v1";

const authToken = `Client-ID ${ACCESS_KEY}`;

const $api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: authToken,
        "Accept-Version": ACCEPT_VERSION,
        "Content-Type": "application/json",
    },
    withCredentials: false
})

export default $api;
