import { Form, Input, InputNumber } from 'antd';
import S from '../../../../libs/Util/Styles/style';

function FormCadastroB() {

  const [form] = Form.useForm()

  return (
    <S.Container>
      <Form form={form}>
        <Form.Item name={['nomeFornecedor']} label="Fornecedor :" required rules={[]}>
          <Input />
        </Form.Item>
        <Form.Item name={['email']} required label="Email fornecedor :">
          <Input />
        </Form.Item>
        <Form.Item name={['Telefone']} label="Telefone :">
          <Input />
        </Form.Item>
      </Form>
    </S.Container>
  )
}


export default FormCadastroB;