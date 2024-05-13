import axios from "axios";

const ip = {
    local: "localhost",
    ec2: "52.20.221.176"
}

const api = axios.create({
    baseURL: `http://${ip.ec2}/api`,
    timeout: 2000,
});

export default api