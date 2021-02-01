// ----- 1. React Router --------
// reacttraining.com
// to add React Router: yarn add react-router-dom@5.2.0
//add to app.js: import { BrowserRouter, Route} from 'react-router-dom';
// 404 page: you need to add Switch - mport { BrowserRouter, Route, Switch} from 'react-router-dom';
// inside <Routes> div to change div to Switch and add -> <Route component={NotFoundPage}/>
//<NavLink> is only for Navigation header; <Link to=""> -> just a link

//REDUX (state container)
// is a library to manage complex state as app growing (to stay updated with data).
// We need Redux because in complex apps there is no one parent component to keep state. (where to store the app state), also you can have reusable components with no props
//Global redux state container is good to use to avoid passing props long trip via components that do not use them.
// info: website redux.js.org
// Installation:
// yarn add redux@3.7.2
// in the file ->
//import { createStore } from 'redux';
//const store = createStore(( state = { count: 0 }) => {
//    return state;
//});
//console.log(store.getState());
//state = { count: 0 } is default state object
//Changing the state:
//Via Actions - that an object that is sent to the store (increment, decrement, reset)
// to watch every change to the store state we use this function or do smth on every change: store.subscribe()
//
// Action generators - function that returns action objects

//Reducers: 1) Are pure functions and 2) they never direct change state or action. it does not change state or count, just returns new object. 
// It can return new state value

//To generate ID for the expense, we use a library npm-uuid
// To install this library: run -> yarn add uuid@3.1.0
// import uuid from 'uuid';

//Spreading objects:
// const user = {
//     name: 'Jen',
//     age: 24
// };
// console.log({
//     ...user
// });
// We need a plugin to use jbject spreading -> Babel object spread operator ->
// yarn add babel-plugin-transform-object-rest-spread@6.23.0
//to add to the file babelrc ->
// "plugins": [
//     "transform-class-properties",
//     "transform-object-rest-spread"
// ]

//Connecting Redux and React to create a connected components, react components that connected to the Redux store.
// Components will be able to fetch the date from Redux store and to render smth to the screen. If data changes, it auto rerenders.
//Dispatch actions we can do directly from our components.

// React-Redux Library will allow to connect our redux store to react components. To use Higher Order Components.
// Higher Order Component (HOC) lets you: reuse code, render hijacking, prop manipulation, abstract state

//How to get to the store data from our components -> we need react-redux library
// yarn add react-redux@5.0.5
//import { Provider } from 'react-redux'; Provider provides store to all our components in our app

//Date picker for AddExpense Page
//yarn add moment@2.18.1 react-dates@12.7.0 react-addons-shallow-compare@15.6.0

//redux developer tools extension

//Testing Jest
//yarn add jest@20.0.4
// in package.json add "test" =>
// "scripts": {
//     "serve": "live-server public/",
//     "build": "webpack",
//     "dev-server": "webpack-dev-server",
//     "test": "jest"
//   },
//to run test -> in command line -> yarn 
// test example:
// const add = (a, b) => a + b;
// const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

// test('should add two numbers', () => {
//     const result = add(3, 4);
//     expect(result).toBe(7);
// });

// test('should add name to greetings', () => {
//     const result = generateGreeting('Mike');
//     expect(result).toBe('Hello Mike!');
// });

// test('should generate greeting with no name', () => {
//     const result = generateGreeting();
//     expect(result).toBe('Hello Anonymous!');
// });