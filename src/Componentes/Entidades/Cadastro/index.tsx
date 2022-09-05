import { UserOutlined } from '@ant-design/icons';
import { Button,Space, Steps } from 'antd';
import { useContext, useRef, useState } from 'react';
import { ListaProdutos, Produto } from '../../../libs/Interfaces';
import { CadastroContext } from '../../../libs/servicos/ContextoCadastro';
import api from '../../../libs/servicos/rotas/config';
import { cadastrarProdutos } from '../../../libs/servicos/rotas/Produtos/cadastro';
import S from "../../../libs/Util/Styles/style";
import FormCadastroA,{SalvarDadosFormA} from './formulario/index';
import FormCadastroB, {SalvarDadosFormB} from './formulario/index2';
const { Step } = Steps;

function HomeCadastro() {
  const [current, setCurrent] = useState(0);
  const formCadastroA = useRef<SalvarDadosFormA>(null)
  const formCadastroB = useRef<SalvarDadosFormB>(null)
  const {cadastroValores} =useContext(CadastroContext)
  //const [produtos , setProdutos] = useState<ListaProdutos>()


  const next = () => {
    formCadastroA.current?.salvarDados().then(res =>{
      setCurrent(current + 1);
    })
  };

  const prev = () => {
    setCurrent(current - 1);
  };


  const submit= () => {
    formCadastroB.current?.salvarDados().then(async (res) =>{
      await cadastrarProdutos(cadastroValores as Produto).then(
       async( res) =>  alert(JSON.stringify(res))
      )
    })
  }

  const steps = [
    {
      titulo: 'Produto',
      conteudo: <FormCadastroA ref={formCadastroA} />,
      id: 1,
      icone: <UserOutlined />

    },
    {
      titulo: 'Fornecedor',
      conteudo: <FormCadastroB  ref={formCadastroB}/>,
      id: 2,
      icone: <UserOutlined />
    },
  ];



  return (
    <S.Container>
      <>
      <div style={{ display: 'flex', width: '100%', marginTop: '50px', padding: '10px', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Steps current={current}>
          {steps && steps.map(item => (
            <Step key={item.titulo} title={item.titulo} icon={item.icone ?? item.icone} />
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
              <Button type="primary" onClick={() => console.log('oi')}>
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
              <Button danger onClick={() => console.log('oi')}>
                Cancelar
              </Button>
            </>
          )}
        </Space>
      </div>

      </>
    </S.Container >
  )
}


export default HomeCadastro;