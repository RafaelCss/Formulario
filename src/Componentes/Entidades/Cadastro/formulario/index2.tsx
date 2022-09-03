import { Button, Form, Input } from 'antd';
import { useCallback, useContext } from 'react';
import { Produto } from '../../../../libs/Interfaces';
import { CadastroContext } from '../../../../libs/servicos/ContextoCadastro';
import S from '../../../../libs/Util/Styles/style';

function FormCadastroB() {
  const [form] = Form.useForm()
  const { cadastroValores, guardarValores } = useContext(CadastroContext)

  const inicialValues = useCallback(() => {
    form.setFieldsValue(cadastroValores)
  }, [cadastroValores])
  function enviarDados() {
    form.validateFields().then(async (res) => {
      const dados: Produto = form.getFieldsValue(true)
      guardarValores(dados)
    }).catch(err => {
      alert(err)
    })
  }
  console.log(cadastroValores)
  return (
    <S.Container>
      <Form
        initialValues={{
          nomeFornecedor: cadastroValores?.nomeFornecedor,
          email: cadastroValores?.email,
          telefone: cadastroValores?.telefone
        }}
        form={form}>
        <Form.Item name={['nomeFornecedor']} label="Fornecedor :" required rules={[]}>
          <Input />
        </Form.Item>
        <Form.Item name={['email']} required label="Email fornecedor :">
          <Input />
        </Form.Item>
        <Form.Item name={['telefone']} label="Telefone :">
          <Input />
        </Form.Item>
      </Form>
    </S.Container>
  )
}


export default FormCadastroB;