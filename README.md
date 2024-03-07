# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you need to go to backend folder and run server there:

### cd backend

### `npm i`

### `npm run start`

Then, in the second terminal in the project directory, you can run:

### `npm i`

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## What would I add?

I would add error handling and a loading state, which we can obtain from requests. I suggest reusing classes for styles more frequently. For catalog filtering, obviously, the main logic behind that is already in the code for searching (filtering an array). Regarding colors, I would categorize them based on their meanings - accent, primary, secondary, etc. Additionally, I might transform the array after receiving the data to have the full name with generation at all times, or I could ask the backend developer to send it already formatted if we don't need to use first and last names independently. I didn't find any rules in terms of current UI design, so I designed the layout and sizes based on my own vision.
