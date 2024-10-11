import fs from "fs";

import "dotenv/config";

import { getPGN } from "./utility/requests/get.js";
import { sanitizeGameData } from "./utility/sanitizeGameData.js";
import { decodeMessage } from "./utility/decodePGN.js";

let id = fs.readFileSync("./output/game.id", "utf8"); //Get game id from game.id
if(process.argv[2] == "id") {
    id = process.argv[3]; //Get game id from arguments
}
let game = await getPGN("/game/export", id); //Download the given pgn
//String manipulation to extract the needed data from the pgn file
let gameMode = game.substr(28,game.indexOf('"')); //Extract the mode from the comments at the beginning
let gameData = game.substr(game.indexOf('1.')); //Remove all the comments at the beginning
let sanitizedGameData = sanitizeGameData(gameData); //Remove everything that isn't a piece move
let message = decodeMessage(sanitizedGameData); //Convert game moves to binary and after convert it to a message
console.log("> downloading PGN [https://lichess.org/"+id+"]:");
console.log("--> mode detected: "+gameMode);
console.log("--> decoded message: "+message);
