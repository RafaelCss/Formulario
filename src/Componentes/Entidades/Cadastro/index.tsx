import { UserOutlined } from '@ant-design/icons';
import { Button,Space, Steps } from 'antd';
import { useContext, useState } from 'react';
import { ListaProdutos } from '../../../libs/Interfaces';
import { CadastroContext } from '../../../libs/servicos/ContextoCadastro';
import S from "../../../libs/Util/Styles/style";
import FormCadastroA from './formulario/index';
import FormCadastroB from './formulario/index2';
const { Step } = Steps;

function HomeCadastro() {
  const [current, setCurrent] = useState(0);
  const [produtos , setProdutos] = useState<ListaProdutos>()
  const {buscar} = useContext(CadastroContext)


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      titulo: 'Produto',
      conteudo: <FormCadastroA />,
      id: 1,
      icone: <UserOutlined />

    },
    {
      titulo: 'Fornecedor',
      conteudo: <FormCadastroB />,
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
              <Button type="primary" onClick={() => alert('Cadastro enviado')}>
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