import styled from 'styled-components';

const Body = styled.body`
background-color: black;
`


const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: green;
  padding: 20px;
  @media screen and (max-width:412px) {
    flex-direction: column;
  }
`;

const ContainerFormulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  background-color: black;
  color: green;
  padding: 20px;
`;


const ContainerBotao = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  padding: 20px;
`;

const BotaoPadrao = styled.button`
    color : black ;
    font-weight: 500;
    border-radius: 0%;
    border: none;
    width: 200px;
    height: 40px;
    border-radius: 32px 32px 32px 32px;
    background-color: #CF3BEB;
    box-shadow: 11px -8px 30px 11px rgba(245,8,229,0.18);
`

const TitleLabel = styled.label`
  color: #CF3BEB;
`

const ContainerTitulo = styled.div`
  display: flex;
  color: green;
  flex-wrap: nowrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: auto;
  margin: 20px 0px 0px 10px;
  height: 50px;
  h1 {
    color: #CF3BEB;
  }
`;

const ContainerNomeUsuario = styled.div`
font-size: 20px;
color: white;

`


export default { Container, ContainerFormulario, ContainerBotao, ContainerTitulo, TitleLabel, BotaoPadrao, Body, ContainerNomeUsuario };