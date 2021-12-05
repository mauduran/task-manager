# Task Manager Frontend

This project was developed using React. 
The design framework used and followed is material and redux is used for state management.

## Pages
- **Sign In / Sign Up**: `/signin` - Used to create account or login.
- **Home**: `/` - Shows all existing tasks. Allows for completion and deletion of tasks.
- **Task Detail**: `/task/:id` - Allows user to see all information for a task and also update it.
- **Create Task**: `/new-task` - Form that allows user to create a new task.

Note: Refer to screen_captures dir in root folder to see how the app looks.

## Available Scripts

In the project directory, you can run:

### `yarn start` || `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build` || `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## File Structure

### App.js
- Sets up the whole application.
- Defines the app routes and assigns components to them.
- Checks if user is logged 
- Provides a notification component that can be leveraged in other places.

### src/common
This dir includes components that can be reutilized.

### src/components
Includes the components to be used in the containers. All components are included in a folder with their name. This folder contains the jsx commponent along with a styles file which can be of .css or .js extension.

### src/constants
Includes constants to be used in the project. This prevents from having typos.

### src/containers
Includes the main sections of the website. Containers import other components and make bigger componens such as pages.

### src/redux
These folder is in charge of managing the main state of the app. State can be changed anywhere in the app by dispatching actions that trigger the state change workflow.

The dir contains three main files for managing state:
 - `root.reducer.js`:  Combines all reducers into one big reducer.
 - `root.saga.js`: Sets all the sagas (action dispatch listeners) up for use.
 - `store.js`: Sets the redux environment, creates a store using the root reducer, runs tha root saga and includes redux middlewaress.

