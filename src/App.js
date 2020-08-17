import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import ToReadList from './component/toRead';
import Header from './component/header';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <Route exact path="/todo">
            {/* <ToReadList /> */}
            TODO
          </Route>
          <Route exact path="/to-read">
            <ToReadList />
          </Route>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
