# Disney Business Model (frontend)

## Description

Disney Business Model is a web basic API with Sinatra and Active Record that 
supports a React frontend. It is based off of the Walt Disney Company's 
business model of assets and subsidiaries, primarily focusing on their 
broadcasting ventures. For future reference, the assets have a _has many_
relationship to the subsidiaries, while the subsidiaries have a _belongs to_
to the assets.

Disney Business Model uses **Active Record** to access and persist (i.e., store)
data in a database, which will be used by a separate **React frontend** that 
interacts with the database via the API.

The frontend is a React application that allows the user to view ten of the 
Walt Disney Company's assets, and add to / update the list. In the ```Home``` 
page, there is a breakdown of what the application does and what the user can 
expect after clicking each link in the top navigation bar. 

Clicking the ```New``` link allows the user to add a new asset to the list. 
In the ```Subsidiaries```, there is a list of ten assets/subsidiaries (plus any 
others added by the user). Each tile contains the asset's name and launch date.

## Installation

To install, fork and clone this repository. Once you've cloned this repository 
in your terminal, ```cd``` into the correct folder.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Backend

Here's a link to the Sinactra backend repo:
https://github.com/1Bibliophile/phase-3-sinatra-react-project

## Resources

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Any company names mentioned and/or images/logos used are credited to the
Walt Disney Co.
