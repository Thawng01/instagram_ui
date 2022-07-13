import { io } from "socket.io-client";

const socket = io("http://192.168.43.240:9000");

export default socket;
