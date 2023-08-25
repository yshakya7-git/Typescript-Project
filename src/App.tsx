import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

import { SharedLayout } from './libs/shared/shareLayout/SharedLayout';
import { LoginPage } from './libs/pages/LoginPage/LoginPage';
import { TabsDemo } from './libs/ui(components)/tabs/TabsDemo';
import { About } from './libs/pages/About/About';
import { ViewProducts } from './libs/pages/Products/ViewProducts';
import { AddProducts } from './libs/pages/Products/AddProducts';
import NotFoundPage from './libs/pages/NotFound/NotFoundPage';
import { FormDemo } from './libs/ui(components)/react-hook-form/FormDemo';

function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} >
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/' element={<SharedLayout />} >
            <Route path='/about' element={<About />} />
            <Route path='/formDemo' element={<FormDemo />} />
            <Route path='/tab' element={<TabsDemo />} />
            <Route path='/viewProducts' element={<ViewProducts />} />
            <Route path='/addProducts' element={<AddProducts />} />

            <Route path='*' element={<NotFoundPage />} />
          </Route>

        </Routes>
      </Router>

    </QueryClientProvider>

  )
}

export default App
