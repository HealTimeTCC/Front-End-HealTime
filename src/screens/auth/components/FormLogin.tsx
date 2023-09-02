import { Button, Checkbox, Form, Input, theme } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { WebRoutes } from '../../../routes/WebRoutes';

const { useToken } = theme;
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

export const FormLogin: React.FC = () => {
  const { token } = useToken();
  const navigate = useNavigate();
  return (
    <Form
      name="basic"
      style={{
        width: '100%',
        alignItems: 'center',
        backgroundColor: token.colorBgContainer,
        padding: 10,
        borderRadius: 10,
      }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      size="large"
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<FieldType>
        label="Email:"
        name="email"
        style={{ width: '100%' }}
        rules={[
          {
            type: `email`,
            message: `Digite um email válido`,
          },
          { required: true, message: 'Campo obrigatório!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        style={{ width: '100%' }}
        rules={[{ required: true, message: 'Digite sua senha!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType> name="remember" valuePropName="checked">
        <Checkbox>Lembre-se de mim</Checkbox>
      </Form.Item>

      <Form.Item>
        <div
          style={{
            display: `flex`,
            justifyContent: `space-around`,
            width: `100%`,
          }}
        >
          <Button type="primary" loading={true} htmlType="submit">
            Enviar
          </Button>
          <Button type="default" loading={false} onClick={() => navigate(WebRoutes.register)}>
            Registrar-me
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
