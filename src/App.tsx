import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './Components/Homepage/Homepage';
import { LoginPage } from './Components/LoginPage/LoginPage';
import { ProtectedRoutes } from './routes/ProtectedRoutes';
import { useState } from 'react';


function App() {
  const[user, setUser]=useState();
 
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<LoginPage setUser={setUser} />}/>
        <Route path='/home' element={
          <ProtectedRoutes user={user} >
            <Homepage/>
          </ProtectedRoutes>
        }></Route>

      </Routes>
    </Router>
  )
}

export default App
