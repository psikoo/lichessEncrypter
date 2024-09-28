export function decodeMessage(data) {
    let message = "";
    let binaryString = ""
    let cleanedData = new Array(0);
    let counter = 0;
    for(let i = 0; i < data.length; i++) { //remove resets and bishop
        if((data[i][0] != "B") && (data[i][2] != "5")) {
            cleanedData[counter] = data[i];
            counter++;
        }
    }
    for(let i = 0; i < cleanedData.length; i++) { //change to binary
        if(cleanedData[i][2] == "3") {
            binaryString += "0";
        } else if(cleanedData[i][2] == "4") {
            binaryString += "1";
        }
    }
    let binaryArray = divideString(binaryString, 8);
    for(let i = 0; i < binaryArray.length; i++) { //binary to base10
        binaryArray[i] = parseInt(binaryArray[i], 2);
    }
    message = uintToString(binaryArray);
    console.log(message);

    return message;
}

function divideString(str, size) {
    const numChunks = Math.ceil(str.length / size)
    const chunks = new Array(numChunks)
    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = str.substr(o, size)
    }
    return chunks
}

function uintToString(binaryArray) {
    let uint8Array = new Uint8Array(binaryArray);
    let decodedMessage = new TextDecoder().decode(uint8Array);
    return decodedMessage;
}
