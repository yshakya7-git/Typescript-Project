import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './Components/NotFound/NotFoundPage';
import { About } from './Components/About/About';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ViewProducts } from './Components/Products/ViewProducts';
import { SharedLayout } from './Components/shareLayout/SharedLayout';
import { LoginPage } from './Components/LoginPage/LoginPage';

function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} >
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/' element={<SharedLayout />} >
            <Route path='/about' element={<About />} />
            <Route path='/viewProducts' element={<ViewProducts />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>

        </Routes>
      </Router>

    </QueryClientProvider>

  )
}

export default App
