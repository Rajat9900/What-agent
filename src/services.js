import axios from "axios"

const api_url= 'https://api.whatagent.net/'

export const storeEmail=(payload)=>{
    return axios.post(api_url+'store-email',payload)
}