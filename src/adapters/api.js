import axios from "axios";


function returnAxiosInstance() {
    return axios.create({
        baseURL: process.env.REACT_APP_ROVER_API_URL
    });
}
  
export function get(param){
    const client = returnAxiosInstance();

    if (!param || !param.length) {
        param = 'curiosity';
    }
    
    return client.get(param + '/photos?sol=1000&api_key=' + process.env.REACT_APP_ROVER_API_KEY);
}



