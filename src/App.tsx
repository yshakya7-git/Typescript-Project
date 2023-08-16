import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './Components/Homepage/Homepage';
import { LoginPage } from './Components/LoginPage/LoginPage';
import { ProtectedRoutes } from './routes/ProtectedRoutes';
import NotFoundPage from './Components/NotFound/NotFoundPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={
          <ProtectedRoutes >
            <Homepage />
          </ProtectedRoutes>
        }>
        </Route>
        <Route path= '*' element={<NotFoundPage/>}/>

      </Routes>
    </Router>
  )
}

export default App
