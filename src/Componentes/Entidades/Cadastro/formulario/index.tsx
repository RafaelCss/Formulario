import { Form, Input, InputNumber } from 'antd';
import S from '../../../../Util/Styles/style';

function FormCadastro() {

  const [form ]= Form.useForm()

  return (
    <S.Container>
      <Form form={form}>
        <Form.Item name={['nome']} label="Nome Produto :" required rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['nomeFornecedor']} label="Fornecedor :" required rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['valor']} label="Valor :" required rules={[{ type: 'number', min: 0, max: 99 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name={['tipo']} required label="Tipo Produto :">
          <Input />
        </Form.Item>
        <Form.Item name={['descricao']} label="Descrição :">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </S.Container>
  )
}


export default FormCadastro;