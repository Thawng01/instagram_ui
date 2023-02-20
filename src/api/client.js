import axios from "axios";
const endpoint = "https://instagram-clone-bs7i.onrender.com/api/";

const client = axios.create({
    baseURL: endpoint,
});
export default client;
