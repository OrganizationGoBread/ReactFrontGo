import axios from "axios";

const ip = {
    local: "localhost:8080",
    ec2: "52.20.221.176" 
}

const api = axios.create({
    baseURL: `http://${ip.ec2}/api`,
    timeout: 8000,
});

export default api
