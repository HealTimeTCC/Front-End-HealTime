import { Outlet } from 'react-router-dom';

import { ScreenAll } from '../../shared/components/quadros/comp.styled';

export const LayoutAuth = () => {
  return (
    <ScreenAll>
      <Outlet />
    </ScreenAll>
  );
};
