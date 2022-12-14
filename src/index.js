import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Post from './Components/post';
import App from './App';
import Story from './Components/Story';
import Home from './Pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Post/>
  </React.StrictMode>
);
