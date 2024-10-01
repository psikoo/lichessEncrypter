export function messageToPGN(message) { //Converts a message to a PGN
    let output = messageToBinary(message);
    output = binaryToPGN(output);
    return output;
}

export function messageToBinary(string) { //Converts a message to a binary
    let output = "";
    for (let i = 0; i < string.length; i++) {
        let stringBinary = string[i].charCodeAt(0).toString(2);
        let length = string[i].charCodeAt(0).toString(2).length;
        let padding = 8 - length;
        let paddedBinary = "0".repeat(padding) + stringBinary;
        output += paddedBinary;
    }
    return output;
}

export function binaryToPGN(binary) { //Converts binary to a PGN
    let output = ""; 
    let offset = 6;
    let bishopCounter = 0;
    for (let i = 0; i < binary.length; i++) {
        if(binary[i] == "1") {
            output += `{1}Q${column(i)}4 ${bishop(i)} `;
        } else {
            output += `{0}Q${column(i)}3 ${bishop(i)} `;
        }

        if((i-offset-1)%8 == 0){
            output += `{Reset}Qh5 ${bishop(i+1)} Qa5 ${bishop(i+2)}{/Reset} `;
            bishopCounter = bishopCounter + 2;
        }

        if((i+offset)%10 == 0){
            output += `\n`;
        }
        bishopCounter++;
    }
    return output;
}

function column(i) {
    i = getToBase8(i);
    if(i == 0) {
        return "a";
    } else if(i == 1) {
        return "b";
    } else if(i == 2) {
        return "c";
    } else if(i == 3) {
        return "d";
    } else if(i == 4) {
        return "e";
    } else if(i == 5) {
        return "f";
    } else if(i == 6) {
        return "g";
    } else if(i == 7) {
        return "h";
    } else {
        return `|${i}|`;
    }
}

function getToBase8(i) {
    if(i > 7) {
        i = i-8;
        i = getToBase8(i);
        return i;
    } else { return i; }
}

function bishop(i) {
    if(i%2 == 0) {
        return "Bc8";
    } else if(i%2 == 1) {
        return "Bb7";
    }
}