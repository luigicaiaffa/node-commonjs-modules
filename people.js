const path = require("path");

const namesPath = path.join(__dirname, "names.js");
const hobbiesPath = path.join(__dirname, "hobbies.js");

const { getFullName } = require(namesPath);

// const fullName = getFullName("Luigi", "Caiaffa");
// console.log(fullName);

const { getPersonHobbies } = require(hobbiesPath);

// const personHobbies = getPersonHobbies("HobbyUno", "HobbyDue", "HobbyTre");
// console.log(personHobbies);

const getPersonInfo = () => {
  const fullName = getFullName("Luigi", "Caiaffa");
  const firstName = fullName.firstName;
  const lastName = fullName.lastName;

  const personHobbies = getPersonHobbies("HobbyUno", "HobbyDue", "HobbyTre");
  const hobbies = personHobbies.hobbies;

  const person = { firstName, lastName, hobbies };
  return person;
};

console.log(getPersonInfo());
