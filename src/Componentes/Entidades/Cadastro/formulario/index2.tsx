import { Form, Input, InputNumber } from 'antd';
import { Formulario, Produto } from '../../../../libs/Interfaces';
import S from '../../../../libs/Util/Styles/style';

function FormCadastroB() {

  const [form ]= Form.useForm()
  function enviarDados( {dados} : Formulario) {
    form.validateFields().then( async(res) =>{
       const dados : Produto = form.getFieldsValue(true)
    }).catch(err =>{
      alert(err)
    })
  }
  console.log(form.getFieldsValue())
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