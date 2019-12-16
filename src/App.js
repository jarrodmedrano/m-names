import React from 'react';
import logo from './logo.svg';
import './App.css';
import {names} from './names.js';

function App() {
  return (
    <div className="App">
        <ul>
        { 
          names.filter((item, index) => {
              return names.indexOf(item) === index
          }).map((name, id) => {
            return (
                <React.Fragment>
                  <li key={id} >
                    {name.name}
                  </li>
                </React.Fragment>
            )
          })
        }
        </ul>
    </div>
  );
}

export default App;
