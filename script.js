/*
Phase 1: Data Processing with HOFs
Before we build a UI, we need to process the data. In your logic.js file:

Requirements
Create a function called getFavoriteGames that uses .filter() to return only games where favorite is true.
Create a function called getGameTitles that takes an array of game objects and uses .map() to return an array of just the strings (the titles).
Ensure you can call these functions and log the results to the console.

Hints
Remember that .filter() returns a new array containing only elements that pass the test.
.map() transforms each element into something else (in this case, the .title property).

Journal Prompt
Explain why using .filter() and .map() is an example of “Abstraction.” How does this make your code easier to read compared to a standard for loop?
*/

const RAW_GAMES = [
  { id: 1, title: "The Legend of Zelda", genre: "Adventure", favorite: true },
  { id: 2, title: "Elden Ring", genre: "RPG", favorite: true },
  { id: 3, title: "Stardew Valley", genre: "Simulation", favorite: false },
  { id: 4, title: "Cyberpunk 2077", genre: "RPG", favorite: false },
  { id: 5, title: "Hades", genre: "Roguelike", favorite: true }
];

// Returns only favorite games

function getFavoriteGames(games) {

    return games.filter(game => game.favorite === true);

}

// Returns an array containing only game titles

function getGameTitles(games) {

    return games.map(game => game.title);

}

// Test the functions

console.log(getFavoriteGames(RAW_GAMES));

console.log(getGameTitles(RAW_GAMES));