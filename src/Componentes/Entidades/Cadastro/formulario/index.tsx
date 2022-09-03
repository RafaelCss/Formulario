import { Button, Form, Input, InputNumber } from 'antd';
import { useCallback, useContext } from 'react';
import { Produto } from '../../../../libs/Interfaces';
import { CadastroContext } from '../../../../libs/servicos/ContextoCadastro';
import S from '../../../../libs/Util/Styles/style';

function FormCadastroA() {
  const { cadastroValores, guardarValores } = useContext(CadastroContext)
  const [form] = Form.useForm()
  const inicialValues = useCallback(() => {
      form.setFieldsValue(cadastroValores)
  }, [cadastroValores])

  function enviarDados() {
    form.validateFields().then(async (res) => {
      const dados: Produto = form.getFieldsValue(true)
      guardarValores(dados as Produto)
    }).catch(err => {
      alert(err)
    })
  }
  console.log(cadastroValores)
  return (
    <S.Container>
      <S.ContainerFormulario>
        <Form form={form}
          initialValues={{
            nomeProduto: cadastroValores?.nomeProduto,
            tipo: cadastroValores?.tipo,
            valor: cadastroValores?.valor,
            descricao: cadastroValores?.descricao
          }}
        >
          <Form.Item name={['nomeProduto']} label="Nome Produto :" required rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['tipo']} required label="Tipo Produto :">
            <Input />
          </Form.Item>
          <Form.Item name={['valor']} label="Valor :" required rules={[{ type: 'number', min: 0, max: 99 }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item name={['descricao']} label="Descrição :">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" onClick={enviarDados}>
              Sub
            </Button>
          </Form.Item>
        </Form>
      </S.ContainerFormulario>
    </S.Container>
  )
}


export default FormCadastroA;