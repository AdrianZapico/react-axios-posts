import axios from "axios";

const blogFetch = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers:{
        'Contet-Type':'application/json',
    }
})

export default blogFetch