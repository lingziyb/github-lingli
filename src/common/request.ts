import Axios from "axios";

const API_URl = 'https://api.github.com';

export const githubService = Axios.create({
    baseURL: API_URl,
});

export const imageProcessService = Axios.create({
    baseURL: "https://www.aaa.www/image"
});
