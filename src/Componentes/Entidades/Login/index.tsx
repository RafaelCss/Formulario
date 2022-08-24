import { Button, Form, Input } from 'antd';
import S from '../../../Util/Styles/style';
import app from '../../../libs/servicos/auth/login'

function FormLogin() {
  const [form] = Form.useForm()

 function enviarDados() {
    form.validateFields().then( async() =>{
      await app.logar(form.getFieldsValue())
    }).catch(err =>{
      alert(err)
    })
  }

  return (
    <S.Container>
      <S.ContainerTitulo>
        <h1>Faça login : </h1>
      </S.ContainerTitulo>
      <S.ContainerFormulario>
        <Form
          form={form}
        >
          <Form.Item
            label="Email"
            name={["email"]}
            required
            rules={[{ message: 'Insira seu Email!' }]}
          >
            <Input name='email' />
          </Form.Item>

          <Form.Item
            label="Senha"
            name={["senha"]}
            required
            rules={[{ message: 'Insira sua Senha!' }]}
          >
            <Input.Password name='senha' />
          </Form.Item>
          <S.ContainerBotao>
            <Button onClick={() => enviarDados()}>Logar</Button>
          </S.ContainerBotao>
        </Form>
      </S.ContainerFormulario>
    </S.Container>
  );
};

export default FormLogin;

