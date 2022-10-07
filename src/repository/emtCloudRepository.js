import axios from "../custom-axios/axios";

const EMTCloudService = {
    fetchBuckets: () => {
        return axios.get("/api/buckets")
    },
    fetchCompanies: () => {
        return axios.get("/public/api/company")
    },
    fetchFilesInBucket: (id) => {
        return axios.get(`/api/buckets/${id}`)
    },
    deleteBucket: (bucketId) => {
        return axios.delete(`/api/buckets/${bucketId}`)
    },
    deleteFile: (fileId) => {
        return axios.delete(`/api/buckets/file/${fileId}`)
    },
    createBucket: (userId, name) => {
        return axios.post(`/api/buckets/${userId}`, null, {params : {
            name
            }})
    },
    downloadFile: (fileId) => {
        return axios.get(`/api/buckets/download/${fileId}`, {
            responseType: "blob",
        })
    },
    registerUser: (fullName, email, password, repeatedPassword, cityAddress, numberAddress, streetAddress, company) => {
        return axios.post("/public/register", {
            "fullName" : fullName,
            "email" : email,
            "password" : password,
            "repeatedPassword" : repeatedPassword,
            "cityAddress" : cityAddress,
            "numberAddress" : numberAddress,
            "streetAddress" : streetAddress,
            "companyId" : company
        })
    },
    login: (username, password) => {
        return axios.post("/public/login", {
            "email": username,
            "password": password
        });
    },

}

export default EMTCloudService;