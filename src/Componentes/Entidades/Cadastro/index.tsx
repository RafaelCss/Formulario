import { Button, Form, Input, InputNumber, Select } from 'antd';
import { useState } from 'react';
import { CadastroUser, IUser } from '../../../libs/Interfaces';
import { cadastroUsuario } from '../../../libs/servicos/rotas/Usuarios/cadastro';
import S from '../../../libs/Util/Styles/style';

function CadastroUsuario() {
  const [erros, setErros] = useState()

  const [form] = Form.useForm()
  function enviarDados() {
    form.validateFields().then(async (res) => {
      const dados: CadastroUser = form.getFieldsValue(true)
      const salvar = cadastroUsuario(dados).then(res => {
        if (res.erros) {
          setErros(res.erros)
        }
      }
      )
    })
  }
  const validateMessages = {
    required: '${email} is required!',
    types: {
      email: '${email} is not a valid email!'
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <S.Container>
      <S.ContainerTitulo>
        <h1>Faça seu Cadastro</h1>
      </S.ContainerTitulo>
        <Form
          form={form}
          validateMessages={validateMessages}
          layout="vertical"
        >
          <Form.Item
            label={<S.TitleLabel>Email</S.TitleLabel>}
            name={["email"]}
            required
            rules={[
              { message: 'Insira seu Email!' }]}
          >
            <Input name='email' />
          </Form.Item>
          <Form.Item
            label={<S.TitleLabel>Nome</S.TitleLabel>}
            name={["nome"]}
            required
            rules={[{ message: 'Insira seu Nome!' }]}
          >
            <Input name='nome' />
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
            <S.BotaoPadrao onClick={() => enviarDados()}>Cadastrar</S.BotaoPadrao>
          </S.ContainerBotao>
        </Form>
    </S.Container>
  );
};

export default CadastroUsuario