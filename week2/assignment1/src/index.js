import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MovieContextProvider} from "./movieContext";


ReactDOM.render(
  <MovieContextProvider>
    <App />
    </MovieContextProvider>,
  document.getElementById('root')
);
