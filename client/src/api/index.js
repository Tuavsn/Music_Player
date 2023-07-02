import axios from "axios-client"

const baseURL = "http://localhost:5000/";

export const validateUser = async (token) => {
    try {
        const result = await axios.get(`${baseURL}/api/users/login`, {
            headers: {
                Authorization: "UserImpl" + token,
            },
        })
        return result.data
    } catch (error) {
        return null;
    }
}