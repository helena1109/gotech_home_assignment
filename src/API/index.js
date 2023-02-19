import axios from "axios";


const BASE_API = axios.create({
    baseURL: "http://localhost:3000/"
})


export const fetchQuestionnaireById = async (id) => {
    const {data} = await BASE_API.get(`questionnaires/${id}`)
    return data

}