import { Form, Input, InputNumber } from 'antd';
import S from '../../../Util/Styles/style';




function FormCadastro() {
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <S.Container>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['nome']} label="Nome Produto :" required rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['nomeFornecedor']} label="Fornecedor :"  required rules={[{ type: 'email' }]}>
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