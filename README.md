## The Hoover app
The application is live  [Hoover app](http://hooverapp.s3-website.us-east-2.amazonaws.com/).



## How to run the application

I used Create React App to build the application. in your terminal run ``` npm install ``` or ``` yarn install``` to install all the dependencies.

Now all the dependencies installed run ```npm start```  or  ```yarn start``` and go to [http://localhost:3000/](http://localhost:3000/) to see the app.

I used `jest` and `enzyme` to test the application.

To run the test write this command in your terminal ``` npm test``` or ```yarn test```

Here is the list of the all dependencies:
```json
{
  "name": "tray",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "enzyme": "^3.3.0",
    "enzyme-adapter-react-16": "^1.1.1",
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "react-scripts": "1.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "devDependencies": {
    "enzyme-to-json": "^3.3.4"
  }
}
```
