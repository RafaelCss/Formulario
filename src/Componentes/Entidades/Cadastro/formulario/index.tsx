import { Form, Input, InputNumber } from 'antd';
import { useState } from 'react';
import { Formulario, Produto } from '../../../../libs/Interfaces';
import S from '../../../../libs/Util/Styles/style';

function FormCadastroA() {
  const [form] = Form.useForm()
  const [dadosForm, setDadosForm] = useState<Produto>()

  function enviarDados({ dados }: Formulario) {
    form.validateFields().then(async (res) => {
      const dados: Produto = form.getFieldsValue(true)
      setDadosForm(dados)
    }).catch(err => {
      alert(err)
    })
  }
  console.log(dadosForm)
  return (
    <S.Container>
      <S.ContainerFormulario>
        <Form form={form}
          initialValues={{
            nomeProduto: dadosForm?.nomeProduto,
            tipo: dadosForm?.tipo,
            valor: dadosForm?.valor,
            descricao: dadosForm?.descricao
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
        </Form>
      </S.ContainerFormulario>
    </S.Container>
  )
}


export default FormCadastroA;