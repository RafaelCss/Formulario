import { Form, Input, message, Space, Spin } from 'antd';
import S from '../../../libs/Util/Styles/style';
import app from '../../../libs/servicos/auth/login'
import { IUser } from '../../../libs/Interfaces';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Erros, validaFormServer } from '../../../libs/Util/funcoes';

function FormLogin() {
  const [form] = Form.useForm()
  const [erros, setErros] = useState<Erros[]>()
  const [load, setLoad] = useState<boolean>(false)

  const warning = () => {
    message.warning('Não localizamos seus dados');
  };

  function enviarDados() {
    setErros([])
    form.validateFields().then(async (res) => {
      const dados: IUser = form.getFieldsValue(true)
      const salvar = await app.logar(dados)
      setLoad(true)
      if (!salvar.auth) {
        warning()
        setLoad(false)
      }
      if (salvar.erros) {
        setErros(salvar.erros)
        setLoad(false)
      }
    })
  }


  return (
    <Spin tip="Carregando..." spinning={load} size={'large'} delay={2}>
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
              rules={[validaFormServer(erros)]}
            >
              <Input name='email' />
            </Form.Item>

            <Form.Item
              label={<S.TitleLabel>Senha</S.TitleLabel>}
              name={["senha"]}
              required
              rules={[validaFormServer(erros)]}
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
    </Spin>
  );
};


export default FormLogin;

