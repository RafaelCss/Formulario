import { Button, Form, Input, InputNumber, Select } from 'antd';
import { useCallback, useContext, forwardRef, useImperativeHandle } from 'react';
import { Produto } from '../../../../libs/Interfaces';
import { CadastroContext } from '../../../../libs/servicos/ContextoCadastro';
import S from '../../../../libs/Util/Styles/style';
const { Option } = Select;

export interface SalvarDadosFormA {
  salvarDados: () => Promise<void>
}

const FormCadastroA = forwardRef((__, ref) => {
  const { cadastroValores, guardarValores } = useContext(CadastroContext)
  const [form] = Form.useForm()

  const inicialValues = useCallback(() => {
    form.setFieldsValue(cadastroValores)
  }, [cadastroValores])

  useImperativeHandle(ref, () => ({
    salvarDados: async () => {
      await form.validateFields().then(async dados =>
        guardarValores(dados)
      );
    }
  }))

  function limparFormulario() {
    form.resetFields()
  }

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
          <Form.Item name={['tipo']} required label="Tipo Produto :" rules={[{ required: true }]}>
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
          <Form.Item name={['valor']} label="Valor :" required rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['descricao']} label="Descrição :">
            <Input.TextArea showCount maxLength={200} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          </Form.Item>
        </Form>
      </S.ContainerFormulario>
    </S.Container>
  )
})


export default FormCadastroA;