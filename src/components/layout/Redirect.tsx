import { Navigate } from 'react-router-dom';

import { WebRoutes } from '../../routes/WebRoutes';

const token = false;
export const Redirect = () => {
  return <Navigate to={!token ? WebRoutes.login : WebRoutes.start} replace />;
};
