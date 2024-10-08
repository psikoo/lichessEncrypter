import axios from "axios";

import 'dotenv/config';

export async function simpleGet(url) { //Gets a URL
    let token = process.env.TOKEN;
    let headersList = {
        "Accept": "*/*",
        "Authorization": "Bearer "+token,
    }
    let reqOptions = {
        url: process.env.API+url,
        method: "GET",
        headers: headersList,
    }
       
    let response = await axios.request(reqOptions);
    return response.data;
};

export async function getPGN(url, id) { //Gets a pgn for the given id
    let token = process.env.TOKEN;
    let headersList = {
        "Accept": "*/*",
        "Authorization": "Bearer "+token,
    }
    let reqOptions = {
        url: process.env.URL+url+"/"+id,
        method: "GET",
        headers: headersList,
    }
       
    let response = await axios.request(reqOptions);
    return response.data;
};