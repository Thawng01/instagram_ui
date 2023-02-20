import axios from "axios";
const endpoint = "https://inst-clone-api.herokuapp.com/api/";

const client = axios.create({
    baseURL: "http://192.168.43.240:9000/api/",
});
export default client;
