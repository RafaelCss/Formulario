import styled from 'styled-components';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-color: #f5f5f5;
  padding: 20px;
  
`;

const ContainerFormulario = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  background-color: #f5f5f5;
  padding: 20px;
`;

const ContainerBotao = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  background-color: #f5f5f5;
  padding: 20px;
`;

const ContainerTitulo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 20px 0px 30px 0px;
  height: 50px;
  h1{
    color: black;
  }
`;



export default { Container, ContainerFormulario, ContainerBotao, ContainerTitulo };