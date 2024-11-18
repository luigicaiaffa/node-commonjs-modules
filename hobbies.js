const getPersonHobbies = (...hobbies) => {
  const personHobbies = { hobbies };
  return personHobbies;
};

console.log(
  getPersonHobbies(
    "HobbyUno",
    "HobbyDue",
    "HobbyTre",
    "HobbyQuattro",
    "HobbyCinque"
  )
);
