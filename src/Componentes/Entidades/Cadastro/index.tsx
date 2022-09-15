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


  return (
    <S.Container>
      <S.ContainerTitulo>
        <h1> Faça seu Cadastro </h1>
      </S.ContainerTitulo>
      <S.ContainerFormulario>
        <Form
          form={form}

        >
          <Form.Item
            label="Email"
            name={["email"]}
            required
            rules={[
              { message: 'Insira seu Email!' }]}
          >
            <Input name='email' />
          </Form.Item>
          <Form.Item
            label="Nome"
            name={["nome"]}
            required
            rules={[,{ message: 'Insira seu Nome!' }]}
          >
            <Input name='nome' />
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
            <Button onClick={() => enviarDados()}>Cadastrar</Button>
          </S.ContainerBotao>
        </Form>
      </S.ContainerFormulario>
    </S.Container>
  );
};

export default CadastroUsuario