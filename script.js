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

/*
Phase 2: Setup & Tooling
Now we move into the development environment to set up the “power tools” used in modern web development.

Requirements
Initialize a new React project using Vite inside your project folder.
If you’re already “in” the folder where you want to create your project, use . as your project name in the command.
Ensure you can run npm run dev and see the default Vite/React page in your browser.
Update the index.html file: Change the <title> to “Digital Game Vault”.
Verify that a .gitignore file exists in your project root. Ensure it includes node_modules so that these heavy dependency files are not uploaded to your Git repository.

Hints
Use the terminal to run the npm create vite@latest command.
The .gitignore file tells Git which files to ignore. Since node_modules contains thousands of files you didn’t write, we don’t want them in our repository.

Journal Prompt
Describe your experience with the terminal. What was one thing that surprised you about using npm or the Vite installation process? Why is the .gitignore file important when working with npm?
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

