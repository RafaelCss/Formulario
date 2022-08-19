import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, message, Steps } from 'antd';
import { useState } from 'react';
import { Conteudo, Isteps } from '../../Util/Interfaces/Isteps';
import S from '../../Util/Styles/style';
import FormCadastro from '../Entidades/Cadastro/indext';
import FormLogin from '../Entidades/Login';
const { Step } = Steps;

function HomeCadastro() {
  const steps = [
    {
      titulo: 'Login',
      conteudo: <FormLogin />,
      id: 1,
      icone: <UserOutlined />
    },
    {
      titulo: 'Cadastro',
      conteudo:<FormCadastro/>,
      id: 2,
      icone: <UserOutlined />

    },
    {
      titulo: 'Tabela',
      conteudo: 'First-content',
      id:3 ,
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
    </S.Container>
  )
}


export default HomeCadastro;