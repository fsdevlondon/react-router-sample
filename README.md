## HackJam ReactJS

For questions please join [![Gitter](https://badges.gitter.im/hackages/hackjam-react.svg)](https://gitter.im/alexlbr/react-course?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Goal
The goal of this exercise is to learn React Router and how to fetch data into your app.
There are thousands of tutorials online but there's no better way to learn than hacking it yourself.

## Requirements
You need to be comfortable writing JavaScript (ES6: Module system, class, JS context vs scope, arrow functions).
You need to have `node` (at least version 4.4.5) and git installed in your computer.

## Getting started:

Clone [this repository](https://github.com/alexlbr/react-course) and run `npm start`

`git clone https://github.com/alexlbr/react-course` 
`cd react-course` 
`npm install`

Now you can run your application by running: `npm start`

## Before you start hacking 

Good to read about React and fetching data before solving the exercise

- https://medium.com/@learnreact/container-components-c0e67432e005#.btkvoecha
- https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.oy1l2u2ew
- http://andrewhfarmer.com/ajax-libraries/
- https://github.com/reactjs/react-router/tree/master/docs 

## Exercise

1. Implement the following route http://localhost:3456/#/workshops. Hint: Check this file app/config/Routes.js
2. Refactor UserList so it implements the [container component pattern](https://medium.com/@learnreact/container-components-c0e67432e005).
    Use UserListContainer. Hint: You also need to change app/config/Routes.js
3. Clicking on a user on the list should display the user's profile. Hint:  Check UserListContainer, should it return children components?  
4. Refactor UserProfile so it implements the [container component pattern](https://medium.com/@learnreact/container-components-c0e67432e005). Hint: You also need to change app/config/Routes.js
5. Implement WorkshopList and WorkshopListContainer using http://localhost:3456/data/workshops.js

Have fun!

## Done! What's next?

- React Native
- React Isomorphic apps
- State management with Redux
- Data management with Relay

Stay tuned for more information and course material for React training

[LeanJS Team](http://leanjs.com)
