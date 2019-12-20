# Reagir Calculator

The project's objective was to build a Calculator using React with minimal styling.

The application is structured into Components (`App`, `Button`, `ButtonPanel`, `Display`) and Logic modules (`calculate.js` and `operate.js`). The logic was tested using the Jest framework. 

## Caveats

- The Components were created using React's function syntax.
- State was handled with the `useState` Hook.
- Components enforce types with `propTypes`
- Default state is provided with `defaultProps`

## Comments

- Big.js library is the main functional dependency and used for the `operate.js` logic.

## Getting Started

1. Clone the repo
2. Run `$ npm install`
3. Run the tests `$ npm test`
4. Start up the development server `$ npm run start`
5. Use the Calculator

## Contributors

I'm the sole contributor.