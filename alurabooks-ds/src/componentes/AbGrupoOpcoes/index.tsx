import React from 'react';
import styled from 'styled-components';

const SectionEstilizada = styled.section<{ selecionado: boolean }>`
  width: 194px;
  height: 88px;
  background: ${props =>
    props.selecionado
      ? 'linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%)'
      : '#ffffff'};
  border: 1px solid;
  border-color: ${props => (props.selecionado ? '#002f52' : '#eb9b00')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;
  header {
    color: ${props => (props.selecionado ? '#ffffff' : '#eb9b00')};
    font-size: 12px;
    font-weight: 400;
  }
  strong {
    color: ${props => (props.selecionado ? '#ffffff' : '#eb9b00')};
    font-size: 16px;
    font-weight: 700;
  }
  footer {
    color: ${props => (props.selecionado ? '#ffffff' : 'rgba(0, 0, 0, 0.54)')};
    font-weight: 400;
    font-size: 12px;
  }
`;

export const AbGrupoOpcoes = () => {
  return (
    <>
      <SectionEstilizada selecionado={false}>
        <header>E-book</header>
        <strong>R$ 00.00</strong>
        <footer>.pdf, .epub, .mob</footer>
      </SectionEstilizada>
      <SectionEstilizada selecionado={true}>
        <header>E-book</header>
        <strong>R$ 00.00</strong>
        <footer>.pdf, .epub, .mob</footer>
      </SectionEstilizada>
      <SectionEstilizada selecionado={false}>
        <header>E-book</header>
        <strong>R$ 00.00</strong>
        <footer>.pdf, .epub, .mob</footer>
      </SectionEstilizada>
    </>
  );
};

export default AbGrupoOpcoes;
