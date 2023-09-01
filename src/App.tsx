import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import { routes } from './libs/shared/sharedRoutes/routes';
import { LoginPage } from './libs/pages/LoginPage/LoginPage';
import { SharedLayout } from './libs/shared/shareLayout/SharedLayout';
import NotFoundPage from './libs/pages/NotFound/NotFoundPage';

function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} >
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/' element={<SharedLayout />} >
z
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.component} />
            ))}
          </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>

    </QueryClientProvider>

  )
}

export default App
