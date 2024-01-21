import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN; // if this is not working we can directly use it

// we''l need to pass the token in the Headers

const headers = {
    Authorization: "bearer "+ TMDB_TOKEN,
}

export const fetchDataFromApi = async (url, params)=>{
    try {
        const {data} = await axios.get(BASE_URL + url, { // we have destructerd the data using {data}
            headers : headers,  // we can even write only header bwcause key and value variable name is same 
            params : params, // like that wr can use for params also 
        })

        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}