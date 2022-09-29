import { UserOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Steps } from 'antd';
import { useContext, useRef, useState } from 'react';
import { IsAuthenticate, Produto } from '../../../libs/Interfaces';
import { CadastroContext } from '../../../libs/servicos/ContextoCadastro';
import { cadastrarProdutos } from '../../../libs/servicos/rotas/Produtos/cadastro';
import S from "../../../libs/Util/Styles/style";
import FormCadastroA, { SalvarDadosFormA } from './formulario/index';
import FormCadastroB, { SalvarDadosFormB } from './formulario/index2';
const { Step } = Steps;

type Resposta<T> = {
  id: string
  mensagem: string
}
function HomeCadastro({ usuario }: IsAuthenticate) {
  const [current, setCurrent] = useState(0);
  const formCadastroA = useRef<SalvarDadosFormA>(null)
  const formCadastroB = useRef<SalvarDadosFormB>(null)
  const { cadastroValores } = useContext(CadastroContext)



  const next = () => {
    formCadastroA.current?.salvarDados().then(res => {
      setCurrent(current + 1);
    })
  };

  const prev = () => {
    setCurrent(current - 1);
  };


  const submit = async () => {
    await formCadastroB.current?.salvarDados()
    const resposta: Resposta<Produto> = await cadastrarProdutos(cadastroValores as Produto)
    console.log(resposta)
    if (resposta.id) {
      Modal.info({
        title: resposta.mensagem,
        onOk() {
          limparForm()
         },
      });
    }
  }

  function limparForm() {
    formCadastroA.current?.limparFormulario()
    formCadastroB.current?.limparFormulario()
  }

  const steps = [
    {
      titulo: <p style={{ color: 'white' }}>Produto</p>,
      conteudo: <FormCadastroA ref={formCadastroA} />,
      id: 1,
      icone: <UserOutlined />

    },
    {
      titulo: <p style={{ color: 'white' }}>Fornecedor</p>,
      conteudo: <FormCadastroB ref={formCadastroB} />,
      id: 2,
      icone: <UserOutlined />
    },
  ];

  return (
    <S.ContainerFormulario>
      <S.ContainerNomeUsuario>Seja bem vindo {usuario} !</S.ContainerNomeUsuario>
      <>
        <div style={{ display: 'flex', width: '100%', padding: '10px', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Steps current={current}>
            {steps && steps.map(item => (
              <Step key={item.id} title={item.titulo} icon={item.icone ?? item.icone} />
            ))}
          </Steps>
        </div>
        <div className="steps-content">{steps[current].conteudo}</div>
        <div className="steps-action">
          <Space>
            {current < steps.length - 1 && (
              <>
                <Button type="primary" onClick={() => next()}>
                  Continuar
                </Button>
                <Button type="primary" onClick={() => limparForm()}>
                  Cancelar
                </Button>
              </>
            )} {current > 0 && (
              <Button type="primary" onClick={() => prev()}>
                Voltar
              </Button>
            )}
            {current === steps.length - 1 && (
              <>
                <Button type="primary" onClick={() => submit()}>
                  Cadastrar
                </Button>
                <Button danger onClick={() => limparForm()}>
                  Cancelar
                </Button>
              </>
            )}
          </Space>
        </div>
      </>
    </S.ContainerFormulario>
  )
}


export default HomeCadastro;