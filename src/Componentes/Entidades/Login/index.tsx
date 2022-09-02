import { Button,Form, Input } from 'antd';
import S from '../../../libs/Util/Styles/style';
import app from '../../../libs/servicos/auth/login'
import { IUser } from '../../../libs/Interfaces';

function FormLogin() {
  const [form] = Form.useForm()
 function enviarDados() {
    form.validateFields().then( async(res) =>{
       const dados : IUser = form.getFieldsValue(true)
       const salvar = await app.logar(dados).then(res => {return res})
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

