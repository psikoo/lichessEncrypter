import axios from "axios";

import { botToken } from './../botToken.js';

export async function simpleGet(bot, url) {
    let token = botToken(bot);
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

export async function getPGN(bot, url, id) {
    let token = botToken(bot);
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