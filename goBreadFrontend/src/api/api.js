import axios from "axios";

const ip = {
    local: "localhost:8080",
//  ec2: "44.215.34.206"
    ec2: "gobread.zapto.org"
}

const api = axios.create({
    baseURL: `https://${ip.ec2}/api`,
    timeout: 8000,
});

export default api
