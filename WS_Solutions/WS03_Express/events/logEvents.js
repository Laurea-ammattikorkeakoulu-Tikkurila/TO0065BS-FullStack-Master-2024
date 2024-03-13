// This module logs events to a file
// require the date-fns module
const { format } = require('date-fns');
// require the uuid module
const { v4: uuid } = require('uuid');
// require the file system module
const fs = require('fs');
// require the file system promises module
const fsPromises = require('fs').promises;
// require the path module
const path = require('path');
// this async function logs the message to a file
const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'dd-MM-yyyy HH:mm:ss')}`;
    //this is the log item to be written to the file
    const logItem = `${dateTime}\t ${uuid()}\t ${message}\n`;
    console.log(logItem);
    try {
        // check if the logs directory exists
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            // if not create the directory
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        // write the log item to the file
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
    } catch (error) {
        // log any errors
        console.error(`Errori  writing to log: ${error}`);
    }
}

// export the logEvents function
module.exports = logEvents;

