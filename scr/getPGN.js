import fs from "fs";

import "dotenv/config";

import { getPGN } from "./utility/requests/get.js";
import { sanitizeGameData } from "./utility/sanitizeGameData.js";
import { decodeMessage } from "./utility/decodePGN.js";

let id = fs.readFileSync("scr/assets/game.id", "utf8");;
let game = await getPGN("e", "/game/export", id);
let gameMode = game.substr(28,game.indexOf('"'));
let gameData = game.substr(game.indexOf('1.'));
let sanitizedGameData = sanitizeGameData(gameData);
let message = decodeMessage(sanitizedGameData);
console.log("> downloading PGN [https://lichess.org/"+id+"]:");
console.log("--> mode detected: "+gameMode);
console.log("--> game data: "+sanitizedGameData);
console.log("--> decoded message: "+message);
