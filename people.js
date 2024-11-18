const path = require("path");
const namesPath = path.join(__dirname, "names.js");
console.log(namesPath);

const { getFullName } = require(namesPath);

const fullName = getFullName("Luigi", "Caiaffa");
console.log(fullName);
