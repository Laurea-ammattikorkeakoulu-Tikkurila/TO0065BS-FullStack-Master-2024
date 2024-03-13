const { format } = require('date-fns');

const { v4: uuidv4 } = require('uuid');



console.log(format(new Date(), 'dd-MM-yyyy\tHH:mm:ss'));

console.log(uuidv4());

console.log('Hello World!');