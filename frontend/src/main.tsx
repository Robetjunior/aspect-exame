import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Success } from './pages/Success';
import { App } from './App';
import { AgendamentosProvider } from './contexts/AgendamentosContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/:orderId/success',
        element: <Success />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AgendamentosProvider>
        <RouterProvider router={router} />
      </AgendamentosProvider>
    </Provider>
  </React.StrictMode>,
);
