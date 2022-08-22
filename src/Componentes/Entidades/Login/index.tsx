import { Button, Checkbox, Form, Input } from 'antd';
import S from '../../../Util/Styles/style';
import app from '../../../libs/servicos/login'
import { useEffect, useState } from 'react';



function FormLogin() {
  const [form] = Form.useForm()


 async function enviarDados() {
  await  app.logar(form.getFieldsValue()).then(res => {console.log(res)})
  await app.buscar().then(res => {console.log(res)})
  }


  return (
    <S.ContainerFormulario>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="Email"
          name={["email"]}
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input name='email' />
        </Form.Item>

        <Form.Item
          label="senha"
          name={["senha"]}
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password name='senha' />
        </Form.Item>
        <Button onClick={() => enviarDados()}>Logar</Button>
      </Form>
    </S.ContainerFormulario>
  );
};

export default FormLogin;

