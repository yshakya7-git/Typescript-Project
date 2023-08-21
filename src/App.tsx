import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './Components/LoginPage/LoginPage';
import NotFoundPage from './Components/NotFound/NotFoundPage';
import SideBar from './Components/lib/sharedRoutes/SideBar';
import { About } from './Components/About/About';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ViewProducts } from './Components/Products/ViewProducts';
import { DemoTable } from './Components/lib/table/DemoTable';
function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} >
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          {/* <Route path='/home' element={<ProtectedRoutes>
          <SideBar />
        </ProtectedRoutes>}> */}
          <Route path='/home' element={<SideBar />} />
          <Route path='/about' element={<About />} />
          <Route path='/viewProducts' element={<ViewProducts />} />
          <Route path='/table' element={<DemoTable />} />


          <Route path='*' element={<NotFoundPage />} />

        </Routes>
      </Router>
    </QueryClientProvider>

  )
}

export default App
