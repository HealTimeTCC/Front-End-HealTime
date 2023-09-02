import { createBrowserRouter } from 'react-router-dom';

import { Login } from '../screens/auth';
import { Register } from '../screens/auth/Register';
import { Home } from '../screens/home';
import { LayoutAuth } from '../screens/layout';
import { Redirect } from '../screens/layout/Redirect';
import { WebRoutes } from './WebRoutes';

export const RoutesHealtime = createBrowserRouter([
  // REDIRECT
  {
    path: WebRoutes.home,
    element: <Redirect />,
    errorElement: <>Erro</>,
  },
  // PARA LOGIN
  {
    element: <LayoutAuth />,
    children: [
      {
        path: WebRoutes.login,
        element: <Login />,
      },
      {
        path: WebRoutes.register,
        element: <Register />,
      },
    ],
  },
  //EXIGE LOGIN coloca um componente pai que verifique isso
  {
    path: WebRoutes.start,
    element: <Home />,
    errorElement: <>Erro</>,
  },
]);
