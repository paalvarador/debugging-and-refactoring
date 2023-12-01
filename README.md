# Debuggin & Refactoring

## Explanation

As I don't have the whole project, I will work specifically with the AccountArea component.

First, I would change the file extension to jsx for convention and to improve readability by allowing other programmers to find files with React code quickly.

Second, I would fix the `progressBarWith` function so that the `maxProducts` variable takes the length of the products retrieved

Third, I would separate the business logic from the component view to make this more readable and maintainable. I created a folder called hooks. Inside this folder I placed a custom hook called useAccountArea. In this file I created a function called `fetchProducts` and a function called `handledToken` which is called by the hook useEffect.

Fourth, I would separate the `calculateProgressBarWidth` function into a file called progressBar.js to make the component completely clean.

Finally, I think I have completed the steps described in the shared pdf

- Identify and Bugs: I believe I identified the bugs and the logic error.
- Optimize Code: I believe I optimized the code making it more readable and maintainable.
- Implement Missing Features: I believe I implemented the missing features
- Improve Error Handling: I believe I improved error handling to make the component more robust.
- Document the changes: I believe I documented the changes as you can see above in the Explanation section.
