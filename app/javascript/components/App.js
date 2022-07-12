import React from "react"

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Greeting from "./Greeting";

import { Provider } from 'react-redux'
import store from '../configStore'

function App() {
  console.log('App')
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/hello" element={ <Greeting /> } />
          </Routes>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App
