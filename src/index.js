import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { DarkModeContextProvider } from './context/darkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider >
    </DarkModeContextProvider>
  </React.StrictMode>
);

/* 
This code sets up the React application for rendering on the client side.

The code imports the necessary React and ReactDOM libraries and the `App` component. It also imports two context providers, AuthContextProvider and DarkModeContextProvider.

A constant called root is created by calling ReactDOM.createRoot and passing in the element with an ID of root from the HTML document.

The root constant is then used to render the React application by calling the render method on it and passing in the JSX for the application. The JSX wraps the App component in the two context providers, AuthContextProvider and DarkModeContextProvider, and also includes a React.StrictMode component.

The AuthContextProvider and DarkModeContextProvider provide context data to their child components, while React.StrictMode is used for development purposes to enforce additional checks and warnings in the application. 
*/
