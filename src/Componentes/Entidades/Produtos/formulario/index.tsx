import { Button, Form, Input, InputNumber, Select } from 'antd';
import { useCallback, useContext, forwardRef, useImperativeHandle } from 'react';
import { Produto } from '../../../../libs/Interfaces';
import { CadastroContext } from '../../../../libs/servicos/ContextoCadastro';
import S from '../../../../libs/Util/Styles/style';
import { InputAnt } from '../../../Inputs/inputTexto/style';
const { Option } = Select;

export interface SalvarDadosFormA {
  salvarDados: () => Promise<void>
  limparFormulario: () => void
}

const FormCadastroA = forwardRef((__, ref) => {
  const { cadastroValores, guardarValores } = useContext(CadastroContext)
  const [form] = Form.useForm()

  const inicialValues = useCallback(() => {
    if (form) {
      form.setFieldsValue(cadastroValores)
    }
    form.resetFields()
  }, [cadastroValores, form])

  useImperativeHandle(ref, () => ({
    salvarDados: async () => {
      await form.validateFields().then(async dados =>
        guardarValores(dados)
      );
      inicialValues()
    },
    limparFormulario: () => { form.resetFields() }
  }))

  return (
    <S.ContainerFormulario>
      <Form form={form}
        layout="vertical"
        initialValues={{
          nomeProduto: cadastroValores?.nomeProduto,
          tipo: cadastroValores?.tipo,
          valor: cadastroValores?.valor,
          descricao: cadastroValores?.descricao
        }}
      >
        <Form.Item
          name={['nomeProduto']}
          label={<S.TitleLabel>Nome Produto :</S.TitleLabel>}
          required
          rules={[{ required: true }]}>
          <InputAnt />
        </Form.Item>
        <Form.Item
          name={['tipo']}
          required
          label={<S.TitleLabel>Tipo Produto :</S.TitleLabel>}
          rules={[{ required: true }]}>
          <Select>
            <>
              <Option value={1}>
                Higiene
              </Option>
              <Option value={2}>
                Limpeza
              </Option>
              <Option value={3}>
                Perecível
              </Option>
            </>
          </Select>
        </Form.Item>
        <Form.Item
          name={['valor']}
          label={<S.TitleLabel>Valor :</S.TitleLabel>}
          required
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['descricao']}
          label={<S.TitleLabel>Descrição :</S.TitleLabel>}>
          <Input.TextArea showCount maxLength={200} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        </Form.Item>
      </Form>
    </S.ContainerFormulario>
  )
})


export default FormCadastroA;