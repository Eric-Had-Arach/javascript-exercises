const getAge = function(yearOfDeath, yearOfBirth) {
    if (!yearOfDeath) {
        yearOfDeath = new Date().getFullYear();
    }
    return yearOfDeath - yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce(function(older, currentPerson) {
        let olderAge = getAge(older.yearOfDeath, older.yearOfBirth);
        let ageCurrentPerson = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
        if (olderAge < ageCurrentPerson) {
            return currentPerson;
        }
        else {
            return older;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
