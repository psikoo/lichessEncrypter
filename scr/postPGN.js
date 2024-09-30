import fs from "fs";

import { postPGN } from './utility/requests/post.js';

let game = await postPGN("/import", "./output/generated.pgn");
fs.writeFile("output/game.id", game.id, (err) => { if (err) throw err; });
console.log("> uploading PGN:");    
console.log("--> game id: "+game.id);
