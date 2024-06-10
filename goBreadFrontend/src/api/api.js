import axios from "axios";

const ip = {
    local: "localhost:8080",
    ec2: "44.215.34.206" 
}

const api = axios.create({
    baseURL: `http://${ip.ec2}/api`,
    timeout: 8000,
});

export default api
