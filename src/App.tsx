import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './Components/LoginPage/LoginPage';
// import { ProtectedRoutes } from './routes/ProtectedRoutes';
import NotFoundPage from './Components/NotFound/NotFoundPage';
// import { About } from './Components/About/About';
import SideBar from './Components/lib/sharedRoutes/SideBar';
import { About } from './Components/About/About';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        {/* <Route path='/home' element={<ProtectedRoutes>
          <SideBar />
        </ProtectedRoutes>}> */}
        <Route path='/home' element={<SideBar />} />
        <Route path='/about' element={<About />} />
  
        <Route path='*' element={<NotFoundPage />} />

      </Routes>
    </Router>
  )
}

export default App
