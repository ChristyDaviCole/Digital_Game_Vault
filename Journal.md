Phase 0: The Blueprint
I would organize the Digital Game Vault program in the following way:
Logic
-Program examines each game in the array to check whether the favorirte property is true or false
-Filters the collection based on favorite status
-Users should be able to switch between viewing favorites or entire collection
Interface
-Display each game on its own individual card
-Each card dispolays the game title and genre
-Organize favorites under a "Favorites" heading
-Provide a "Clear Filters" option to view entire collection again

Journal Prompt 1:
What is the most confusing part of the challenge as it’s described right now? What part of your plan are you most unsure about?
Not being given the complete set of instructions to do everything-- it's more like a trail of breadcrumbs to follow. Thinking through program architecture myself is of course what I'm most unsure about, but I know it's what I must do. :)

Journal Prompt 2:
Explain why using .filter() and .map() is an example of “Abstraction.” How does this make your code easier to read compared to a standard for loop?
The .filter & .map are examples of abstraction because JS does the searching and iterating through the array automatically so I don't have to write a for loop...which makes the code shorter and easier to read and understand.

Journal Prompt 3: 
Describe your experience with the terminal. What was one thing that surprised you about using npm or the Vite installation process? Why is the .gitignore file important when working with npm?
My experience with the terminal is always intimidating because I know little about what I'm doing. Powershell initially blocked the npm command, but I used ChatGPT to help walk me through that issue. Vite asked multiple setup questions, automatically installed 144 packages, and then started the development server. What surprised me most wasn't really surprising...I expected to be confused and have some difficulty and that is exactly what occured.
The .gitignore file is important while working with npm because it keeps the repository smaller and cleaner by preventing unnecessary files from being uploaded to GitHub.

Journal Prompt 4: 
What is the main difference between writing standard HTML and writing JSX? How do props allow the GameItem component to be reusable?
The main difference is that HTML is a markup language used to structure webpages and JSX allows HTML-like markup to be added directly into the JS code when building applications with React. Props make the GameItem component reusable by allowing different game objects to be passed into the same component.