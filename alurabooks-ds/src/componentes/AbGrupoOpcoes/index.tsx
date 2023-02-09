import React, { useState } from 'react';
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

export interface AbGrupoOpcao {
  id: number;
  titulo: string;
  corpo: string;
  rodape: string;
}

export interface AbGrupoOpcoesProps {
  opcoes: AbGrupoOpcao[];
  valorPadrao?: AbGrupoOpcao | null;
  onChange?: (opcao: AbGrupoOpcao) => void;
}

export const AbGrupoOpcoes = ({
  opcoes,
  onChange,
  valorPadrao,
}: AbGrupoOpcoesProps) => {
  const [selecao, setSelecao] = useState<AbGrupoOpcao | null>(
    valorPadrao ?? null
  );
  const aoSelecionar = (opcao: AbGrupoOpcao): void => {
    setSelecao(opcao);
    if (onChange) {
      onChange(opcao);
    }
  };

  return (
    <>
      {opcoes.map(opcao => (
        <SectionEstilizada
          onClick={() => aoSelecionar(opcao)}
          key={opcao.id}
          selecionado={selecao?.id === opcao.id}
        >
          <header>{opcao.titulo}</header>
          <strong>{opcao.corpo}</strong>
          <footer>{opcao.rodape}</footer>
        </SectionEstilizada>
      ))}
    </>
  );
};

export default AbGrupoOpcoes;
