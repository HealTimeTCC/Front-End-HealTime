import './index.css';

import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import { RoutesHealtime } from './routes/BrowserRoutes.tsx';

// <React.StrictMode>
// </React.StrictMode>,
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
      components: {},
    }}
  >
    <RouterProvider router={RoutesHealtime} />
    <Toaster />
  </ConfigProvider>,
);
