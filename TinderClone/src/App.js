import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import OnBoarding from './pages/OnBoarding'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = ()=> {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/onboarding" element={<OnBoarding/>}/>
      </Routes>
    </Router>
  );
}

export default App;
