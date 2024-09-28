import axios from "axios";
import fs from "fs";

import { botToken } from './../botToken.js';

export async function simpleTextPost(bot, url, text) {
    let token = botToken(bot);
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

export async function postPGN(bot, url, file) {
    let token = botToken(bot);
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