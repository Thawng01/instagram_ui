import { io } from "socket.io-client";

const socket = io("https://inst-clone-api.herokuapp.com/");

export default socket;
