import io from "socket.io-client";

const socket = io('http://testapi.marit.expert:3003', { transports: ["websocket"] });


export default socket;
