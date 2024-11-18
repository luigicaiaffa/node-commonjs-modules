const path = require("path");

const namesPath = path.join(__dirname, "names.js");
const hobbiesPath = path.join(__dirname, "hobbies.js");

const { getFullName } = require(namesPath);

const fullName = getFullName("Luigi", "Caiaffa");
console.log(fullName);

const { getPersonHobbies } = require(hobbiesPath);

const personHobbies = getPersonHobbies("HobbyUno", "HobbyDue", "HobbyTre");
console.log(personHobbies);
