import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './Components/LoginPage/LoginPage';
import { ProtectedRoutes } from './routes/ProtectedRoutes';
import NotFoundPage from './Components/NotFound/NotFoundPage';
import { Homepage } from './Components/Homepage/Homepage';
import SideBar from './Components/lib/sharedRoutes/SideBar';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={
          <ProtectedRoutes >
            <SideBar />
            <Route path='/product' element={<Homepage />}></Route>
          </ProtectedRoutes>
        }>
        </Route>
        <Route path= '*' element={<NotFoundPage/>}/>

      </Routes>
    </Router>
  )
}

export default App
