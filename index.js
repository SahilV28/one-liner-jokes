const jokes = require("./src/jokes");

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

module.exports = getRandomJoke;
