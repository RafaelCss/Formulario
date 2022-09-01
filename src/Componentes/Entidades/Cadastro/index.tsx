import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, message, Steps } from 'antd';
import { useState } from 'react';
import S from "../../../libs/Util/Styles/style";
import FormCadastroA from './formulario/index';
import FormCadastroB from './formulario/index2';
const { Step } = Steps;

function HomeCadastro() {
  const [dados , setDados] = useState()

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
      conteudo: <FormCadastroB />,
      id: 3,
      icone: <LoadingOutlined/>
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
          <Step key={item.titulo} title={item.titulo} icon={item.icone ?? item.icone} />
        ))}
      </Steps>

      <div className="steps-content">{steps[current].conteudo}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <>
            <Button type="primary" onClick={() => next()}>
              Continuar
            </Button>
            <Button type="primary" onClick={() => console.log('oi')}>
              Cancelar
            </Button>
          </>
        )} {current >= 0 && (
          <Button type="primary" onClick={() => prev()}>
            Voltar
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => alert('Cadastro enviado')}>
            Cadastrar
          </Button>
        )}

      </div>
    </S.Container>
  )
}


export default HomeCadastro;