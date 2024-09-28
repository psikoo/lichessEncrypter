import { generatePGN } from './utility/pgn/pgn.js';

generatePGN(process.argv[2], process.argv[3]);
console.log("> generating PGN:");
console.log("--> mode: "+process.argv[2]);
console.log("--> message: "+process.argv[3]);
