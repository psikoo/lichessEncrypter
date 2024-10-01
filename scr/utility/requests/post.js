import axios from "axios";
import fs from "fs";

import 'dotenv/config';

export async function simpleTextPost(url, text) { //Posts a text to a url
    let token = process.env.TOKEN;
    let headersList = {
        "Accept": "*/*",
        "Authorization": "Bearer "+token,
        "Content-Type": "text/plain",
    }
    let bodyContent = text; 
    let reqOptions = {
        url: process.env.API+url,
        method: "POST",
        headers: headersList,
        data: bodyContent,
    }
       
    let response = await axios.request(reqOptions);
    return response.data;
};

export async function postPGN(url, file) { //Posts a file to a url, as a URI encoded body
    let token = process.env.TOKEN;
    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Bearer "+token,
    } 
    let bodyContent = "";
    try {
        const data = fs.readFileSync(file, 'utf8');
        bodyContent = encodeURI(data);
    } catch (err) { console.error(err); }
    let reqOptions = {
        url: process.env.API+url,
        method: "POST",
        headers: headersList,
        data: bodyContent,
    }
       
    let response = await axios.request(reqOptions);
    return response.data;
};