import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './Components/LoginPage/LoginPage';
import { ProtectedRoutes } from './routes/ProtectedRoutes';
import NotFoundPage from './Components/NotFound/NotFoundPage';
import SideBar from './Components/lib/sharedRoutes/SideBar';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={
          <ProtectedRoutes >
            <SideBar />
            {/* <Homepage /> */}
          </ProtectedRoutes>
        }>
        </Route>
        <Route path= '*' element={<NotFoundPage/>}/>

      </Routes>
    </Router>
  )
}

export default App
