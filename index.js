const {StudentDetails,CarDetails} = require('./sample.js');
const newstd = new StudentDetails('Praneetha',28);
console.log(newstd);
console.log(newstd.name);

const newcar = new CarDetails("bmw","60kph");
console.log(newcar);
console.log(newcar.name);
