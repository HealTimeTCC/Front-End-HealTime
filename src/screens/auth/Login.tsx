import { theme } from 'antd';

import { FormLogin } from './components/FormLogin';

const { useToken } = theme;

export const Login = () => {
  const { token } = useToken();
  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        height: '100vh',
        display: 'flex',
        justifyContent: `end`,
      }}
    >
      <div
        style={{
          backgroundColor: token.colorPrimary,
          height: '100vh',
          width: `30vw`,
          display: 'flex',
          padding: `0 20px`,
          flexDirection: `column`,
          justifyContent: `center`,
        }}
      >
        <FormLogin />
      </div>
    </div>
  );
};
