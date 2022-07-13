import axios from "axios";

const client = axios.create({
    baseURL: "https://inst-clone-api.herokuapp.com/api",
});

export default client;
