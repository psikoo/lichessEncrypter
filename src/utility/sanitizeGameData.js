export function sanitizeGameData(data) {
    data = data.substr(0, data.length-3); //Remove the multiple \n at the end of the file
    data = data.split(" "); //Split into an array
    let sanitizedData = new Array(0);
    let counter = 0;
    for(let i = 0; i < data.length; i++) {
        if(parseInt(data[i][0]) != data[i][0]) { //Remove all entries that are numbers (example: "1.", "2.", "1-0", "1/2-1/2")
            sanitizedData[counter] = data[i];
            counter++;
        }
    }
    sanitizedData = sanitizedData.join('-'); //Join to an string
    sanitizedData = sanitizedData.substr(39); //Remove the first 39 characters (setup moves)
    sanitizedData = sanitizedData.split("-"); //Split into an array
    if(sanitizedData[sanitizedData.length-1] == "*") { sanitizedData.pop() } //Remove trailing * for short messages
    return sanitizedData;
}
