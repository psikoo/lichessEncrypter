import fs from "fs";

import { postPGN } from './utility/requests/post.js';

let game = await postPGN("e", "/import", "output/generated.pgn");
fs.writeFile("scr/assets/game.id", game.id, (err) => { if (err) throw err; });
console.log("> uploading PGN:");    
console.log("--> game id: "+game.id);
