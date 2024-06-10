import React, { useState } from 'react';
import './index.css';

function Epi() {
  // Estado para armazenar a opção selecionada
  const [selectedOption, setSelectedOption] = useState('');
  // Estados para armazenar os dados dos campos
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [validade, setValidade] = useState('');
  const [cor, setCor] = useState('');
  const [ca, setCA] = useState('');
  const [quantidade, setQuantidade] = useState('');

  // Lista de opções de códigos de EPIs para a selectbox de "EDITAR"
  const listaCodigosEpi = ['']; // Substitua pelos seus dados reais

  // Função para lidar com a mudança na selectbox de "EDITAR"
  const handleCodigoChange = (event) => {
    setCodigo(event.target.value);
    // Aqui você pode buscar as informações do EPI com base no código selecionado
    // e preencher os outros campos do formulário
  };

  // Função para lidar com a mudança na selectbox
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer o que precisar com os dados submetidos
    // Por exemplo, enviar para o servidor
    console.log({
      codigo,
      nome,
      tamanho,
      validade,
      cor,
      ca,
      quantidade
    });
  };

  // Renderiza os campos específicos para cada opção
  const renderForm = () => {
    if (selectedOption === 'CADASTRAR') {
      return (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="EQUIPAMENTO" value={nome} onChange={(e) => setNome(e.target.value)} />
          <select value={tamanho} onChange={(e) => setTamanho(e.target.value)}>
            <option value="">TAMANHO*</option>
            <option value="sizeP">P</option>
            <option value="sizeM">M</option>
            <option value="sizeG">G</option>
          </select>
          <input type="text" placeholder="VALIDADE" value={validade} onChange={(e) => setValidade(e.target.value)} />
          <input type="text" placeholder="COR" value={cor} onChange={(e) => setCor(e.target.value)} />
          <input type="text" placeholder="C.A" value={ca} onChange={(e) => setCA(e.target.value)} />
          <input type="number" placeholder="QUANTIDADE" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
          <button type="submit">SALVAR</button>
        </form>
      );
    } else if (selectedOption === 'EDITAR') {
      return (
        <form onSubmit={handleSubmit}>
          <select value={codigo} onChange={handleCodigoChange}>
            <option value="">CÓDIGO DO EPI</option>
            {listaCodigosEpi.map((codigo) => (
              <option key={codigo} value={codigo}>{codigo}</option>
            ))}
          </select>
          <input type="text" placeholder="EQUIPAMENTO" value={nome} onChange={(e) => setNome(e.target.value)} />
          <select value={tamanho} onChange={(e) => setTamanho(e.target.value)}>
            <option value="">TAMANHO*</option>
            <option value="sizeP">P</option>
            <option value="sizeM">M</option>
            <option value="sizeG">G</option>
          </select>
          <input type="text" placeholder="VALIDADE" value={validade} onChange={(e) => setValidade(e.target.value)} />
          <input type="text" placeholder="COR" value={cor} onChange={(e) => setCor(e.target.value)} />
          <input type="text" placeholder="C.A" value={ca} onChange={(e) => setCA(e.target.value)} />
          <input type="number" placeholder="QUANTIDADE" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
          <button type="submit">SALVAR</button>
        </form>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <h2># EPIs;</h2>
      <h3>O que você deseja fazer?</h3>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">SELECIONE UMA OPÇÃO</option>
        <option value="CADASTRAR">CADASTRAR</option>
        <option value="EDITAR">EDITAR</option>
      </select>
      {renderForm()}
    </div>
  );
}

export default Epi;