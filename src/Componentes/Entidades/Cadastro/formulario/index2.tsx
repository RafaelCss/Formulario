import { Button, Form, Input } from 'antd';
import { forwardRef, useCallback, useContext, useImperativeHandle } from 'react';
import { Produto } from '../../../../libs/Interfaces';
import { CadastroContext } from '../../../../libs/servicos/ContextoCadastro';
import S from '../../../../libs/Util/Styles/style';



export interface SalvarDadosFormB{
  salvarDados : () => Promise<void>
}



const FormCadastroB = forwardRef((__, ref) => {
  const [form] = Form.useForm()
  const { cadastroValores, guardarValores } = useContext(CadastroContext)

  const inicialValues = useCallback(() => {
    form.setFieldsValue(cadastroValores)
  }, [cadastroValores])



  useImperativeHandle(ref,()=>({
    salvarDados : async () =>{
     await  form.validateFields().then(async (res) => {
        const dados: Produto = form.getFieldsValue(true)
        guardarValores(dados)
        inicialValues()
      }).catch(err => {
        alert(err)
      })
    }
  }))

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
})


export default FormCadastroB;