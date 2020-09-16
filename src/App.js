import React from 'react';
import './App.css';
import './styles/main.scss';
//import Task from './components/task.js';
import Timer from './components/timer.js';


function App() {
  return (
    <div className="background">
        <div className="timerContainer" /*contentEditable*/>
          <Timer/>
        </div>


    </div>
  );
}


export default App;
   