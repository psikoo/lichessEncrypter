import fs from "fs";

import { messageToPGN } from './binary.js';

export function generatePGN(mode, message) {
    let fileName = "output/generated.pgn";
    let header = `pgn=[Event "Bot File Encryption ${mode}"]\n[Site "lichess.org"]\n[White "File Encrypter"]\n[Black "File Decrypter"]\n[Variant "Standard"]\n\n`;
    let setup = "{Setup}c4 b5 cxb5 c6 Qa4 Bb7 Qa5 Bc8 bxc6 Bb7{/Setup} ";
    fs.writeFile(fileName, header, (err) => { if (err) throw err; });
    if(mode == "message") {
        message = messageToPGN(message);
        let data = setup + message;
        fs.appendFile(fileName, data, (err) => { if (err) throw err; });
    } else if(mode == "file") {
        fs.appendFile(fileName, setup, (err) => { if (err) throw err; });
    }
}