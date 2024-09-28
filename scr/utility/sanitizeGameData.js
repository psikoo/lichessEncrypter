export function sanitizeGameData(data) {
    data = data.substr(0, data.length-3); // remove \n at the end of the 
    data = data.split(" ");
    let sanitizedData = new Array(0);
    let counter = 0;
    for(let i = 0; i < data.length; i++) {
        if(parseInt(data[i][0]) != data[i][0]) {
            sanitizedData[counter] = data[i];
            counter++;
        }
    }
    sanitizedData = sanitizedData.join('-');
    sanitizedData = sanitizedData.substr(39);
    sanitizedData = sanitizedData.split("-");
    if(sanitizedData[sanitizedData.length-1] == "*") { sanitizedData.pop() } // remove trailing * for short messages
    return sanitizedData;
}
