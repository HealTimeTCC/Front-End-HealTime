import { createBrowserRouter } from 'react-router-dom';

import { Login } from '../components/auth';
import { Register } from '../components/auth/register';
import { Home } from '../components/home';
import { LayoutAuth } from '../components/layout';
import { Redirect } from '../components/layout/Redirect';
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
