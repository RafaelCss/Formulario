import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, message, Steps } from 'antd';
import { useState } from 'react';
import S from "../../../Util/Styles/style";
import FormCadastro from './formulario/index';
const { Step } = Steps;

function HomeCadastro() {
  const steps = [
    {
      titulo: 'Cadastro',
      conteudo: <FormCadastro />,
      id: 2,
      icone: <UserOutlined />

    },
    {
      titulo: 'Tabela',
      conteudo: 'First-content',
      id: 3,
      icone: <UserOutlined />
    },
  ];



  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };


  return (
    <S.Container>
      <Steps current={current}>
        {steps && steps.map(item => (
          <Step key={item.titulo} title={item.titulo} icon={item.icone ? item.icone : <LoadingOutlined />} />
        ))}
      </Steps>

      <div className="steps-content">{steps[current].conteudo}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <>
            <Button type="primary" onClick={() => next()}>
              Logar
            </Button>
            <Button type="primary" onClick={() => next()}>
              Cancelar
            </Button>
          </>
        ) ? current === 0 ? (
          <>
            <Button type="primary" onClick={() => next()}>
              Continuar
            </Button>
            <Button type="primary"  onClick={() => next()}>
              Cancelar
            </Button>
          </>
        ) : (

          <Button type="primary" onClick={() => next()}>
            Cadastrar
          </Button>
        ) : (
          <Button type="primary" onClick={() => next()}>
            Cadastrar
          </Button>
        )}
        {current > 0 && (
          <>
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Continuar
            </Button>
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Voltar
            </Button>
          </>
        )}
      </div>
    </S.Container>
  )
}


export default HomeCadastro;