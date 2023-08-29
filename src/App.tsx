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
import { Home } from './libs/pages/Home/Home';
import { BuyProducts } from './libs/pages/Products/BuyProducts';
import { ProductPage } from './libs/pages/Products/ProductPage';
import { DialogDemo } from './libs/ui(components)/dialogs/DialogDemo';

function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} >
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/' element={<SharedLayout />} >
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/formDemo' element={<FormDemo />} />
            <Route path='/tab' element={<TabsDemo />} />
            <Route path='/dialogs' element={<DialogDemo />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/viewProducts' element={<ViewProducts />} />
            <Route path='/addProducts' element={<AddProducts />} />
            <Route path='/buyProducts/:id' element={<BuyProducts />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>

    </QueryClientProvider>

  )
}

export default App
