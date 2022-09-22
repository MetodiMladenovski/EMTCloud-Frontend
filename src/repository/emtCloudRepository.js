import axios from "../custom-axios/axios";

const EMTCloudService = {
    fetchBuckets: () => {
        return axios.get("/public/api/buckets")
    },
    fetchCompanies: () => {
        return axios.get("/public/api/company")
    },
    fetchFilesInBucket: (id) => {
        return axios.get(`/public/api/buckets/${id}`)
    },
    deleteBucket: (bucketId) => {
        return axios.delete(`/public/api/buckets/${bucketId}`)
    },
    createBucket: (userId, name) => {
        return axios.post(`/public/api/buckets/${userId}`, null, {params : {
            name
            }})
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
    }
}

export default EMTCloudService;