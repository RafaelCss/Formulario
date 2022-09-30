import { Button, Form, Input } from 'antd';
import { forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useRef } from 'react';
import { SalvarDadosFormA } from '.';
import { Produto } from '../../../../libs/Interfaces';
import { CadastroContext } from '../../../../libs/servicos/ContextoCadastro';
import S from '../../../../libs/Util/Styles/style';
import { InputAnt } from '../../../Inputs/inputTexto/style';
export interface SalvarDadosFormB {
  salvarDados: () => Promise<void>
  limparFormulario: () => void
}

const FormCadastroB = forwardRef((__, ref) => {
  const [form] = Form.useForm()
  const formCadastroA = useRef<SalvarDadosFormA>(null)
  const { cadastroValores, guardarValores } = useContext(CadastroContext)

  const inicialValues = useCallback(() => {
    form.setFieldsValue(cadastroValores)
  }, [cadastroValores, form])

  useEffect(()=>{
    inicialValues()
  },[inicialValues])
  useImperativeHandle(ref, () => ({
    salvarDados: async () => {
      await form.validateFields().then(async (res) => {
        const dados: Produto = await form.getFieldsValue(true)
        guardarValores(dados)
        inicialValues()
      }).catch(err => {
        alert(err)
      })
    },
    limparFormulario: () => {
      form.resetFields()
    }
  }))


  return (
    <S.ContainerFormulario>
      <Form
        layout="vertical"
        initialValues={{
          nomeFornecedor: cadastroValores?.nomeFornecedor,
          email: cadastroValores?.email,
          telefone: cadastroValores?.telefone
        }}
        form={form}>
        <Form.Item
          name={['nomeFornecedor']}
          label={<S.TitleLabel>Fornecedor :</S.TitleLabel>}
          required rules={[]}>
          <InputAnt />
        </Form.Item>
        <Form.Item
          name={['email']}
          required
          label={<S.TitleLabel>Email fornecedor :</S.TitleLabel>}>
          <InputAnt />
        </Form.Item>
        <Form.Item
          name={['telefone']}
          label={<S.TitleLabel>Telefone :</S.TitleLabel>}>
          <InputAnt />
        </Form.Item>
      </Form>
    </S.ContainerFormulario>
  )
})


export default FormCadastroB;