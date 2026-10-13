// npm install axios
// get(), put() ...

import axios from "axios"

const getData = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    return response.data
}

const main = async () => {
    console.log(await getData())
}
main()