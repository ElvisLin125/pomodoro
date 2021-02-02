import React from 'react';
import './App.css';
import './styles/main.scss';
//import Task from './components/task.js';
import Timer from './components/timer.js';
import {DatePicker} from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="background">
        <div className="timerContainer" /*contentEditable*/>
          <Timer/>
          <DatePicker></DatePicker>
        </div>


    </div>
  );
}


export default App;
   