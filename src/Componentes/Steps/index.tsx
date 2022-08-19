import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, message, Steps } from 'antd';
import { useState } from 'react';
const { Step } = Steps;

const steps = [
  {
    titulo: 'Login',
    conteudo: 'First-content',
  },
  {
    titulo: 'Cadastro',
    conteudo: <div>Teste 01</div>,

  },
  {
    titulo: 'Tabela',
    conteudo: 'Last-content',
  },
];

function StepsAntd() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.titulo} title={item.titulo} />
        ))}
      </Steps>

      <div className="steps-content">{steps[current].conteudo}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Continuar
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Tudo Certo !
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Voltar
          </Button>
        )}
      </div>
    </>
  );
}


export default StepsAntd;