import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Якщо у вас є глобальні стилі, або видаліть цей рядок

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);