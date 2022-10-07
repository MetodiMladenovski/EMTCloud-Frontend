import axios from "axios";

const instance = axios.create({
    baseURL : "http://localhost:9090",
    headers: {
        'Authorization': localStorage.getItem("JWT")
    }

})

export default instance;