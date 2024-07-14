import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

let pageSize=6;


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/general"  element={<News key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
          <Route path="/business" element={ <News key="business" pageSize={pageSize} country="us" category="business"/> }></Route>
          <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>}></Route>
          <Route path="/health" element={<News key="health" pageSize={pageSize} country="us" category="health"/>}></Route>
          <Route path="/science" element={<News key="science" pageSize={pageSize} country="us" category="science"/>}></Route>
          <Route path="/sports" element={<News key="sports" pageSize={pageSize} country="us" category="sports"/>}></Route>
          <Route path="/technology" element={<News key="technology" pageSize={pageSize} country="us" category="technology"/>}></Route>
        </Routes>

        </Router>
      </div>
    )
  }
}

