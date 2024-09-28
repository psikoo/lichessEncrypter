import 'dotenv/config';

export function botToken(bot) {
    if(bot == "e") { return process.env.ETOKEN }
    else if(bot == "d") { return process.env.DTOKEN }
}