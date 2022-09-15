import { Button, Form, Input, Space } from 'antd';
import S from '../../../libs/Util/Styles/style';
import app from '../../../libs/servicos/auth/login'
import { IUser } from '../../../libs/Interfaces';
import Link from 'next/link';

function FormLogin() {
  const [form] = Form.useForm()
  function enviarDados() {
    form.validateFields().then(async (res) => {
      const dados: IUser = form.getFieldsValue(true)
      const salvar = await app.logar(dados).then(res => { return res })
    }).catch(err => {
      alert(err)
    })
  }
  return (

    <S.Container>
      <S.ContainerFormulario>
        <S.ContainerTitulo>
          <h1>Faça Login </h1>
        </S.ContainerTitulo>
        <Form
          form={form}
          layout="vertical"
        >
          <Form.Item
            label={<S.TitleLabel>Email</S.TitleLabel>}
            name={["email"]}
            required
            style={{ color: 'green' }}
            rules={[{ message: 'Insira seu Email!' }]}
          >
            <Input name='email' />
          </Form.Item>

          <Form.Item
            label={<S.TitleLabel>Senha</S.TitleLabel>}
            name={["senha"]}
            required
            rules={[{ message: 'Insira sua Senha!' }]}
          >
            <Input.Password name='senha' />
          </Form.Item>
          <S.ContainerBotao>
            <S.BotaoPadrao onClick={() => enviarDados()}>Logar</S.BotaoPadrao>
          </S.ContainerBotao>
        </Form>
        <Space>
          <Link href={'/cadastro'}>
            <a>Ainda não tenho cadastro</a>
          </Link>
        </Space>
      </S.ContainerFormulario>
    </S.Container>
  );
};


export default FormLogin;

