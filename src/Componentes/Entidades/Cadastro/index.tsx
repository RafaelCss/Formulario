import { LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Space, Steps } from 'antd';
import Item from 'antd/lib/list/Item';
import { ReactElement, ReactNode, useContext, useState } from 'react';
import { CadastroContext } from '../../../libs/servicos/ContextoCadastro';
import S from "../../../libs/Util/Styles/style";
import FormCadastroA from './formulario/index';
import FormCadastroB from './formulario/index2';
const { Step } = Steps;

function HomeCadastro() {
  const [current, setCurrent] = useState(0);

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

    {
      titulo: 'Finalização',
      conteudo:'Teste',
      id: 3,
      icone: <LoadingOutlined />
    },
  ];


  return (
    <S.Container>
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
            <Button type="primary" onClick={() => alert('Cadastro enviado')}>
              Cadastrar
            </Button>
          )}
        </Space>
      </div>
    </S.Container>
  )
}


export default HomeCadastro;