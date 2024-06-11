import React, { useState } from 'react';
import './index.css';

function Registro() 
  {
    // Estado para armazenar a opção selecionada
    const [selectedOption, setSelectedOption] = useState('');
    // Estados para armazenar os dados dos campos
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [matricula, setMatricula] = useState('');
    // Função para lidar com a mudança na selectbox
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    // Função para lidar com o envio do formulário de cadastro
    const handleCadastroSubmit = (event) => {
      event.preventDefault();
      // Aqui você pode fazer o que precisar com os dados submetidos
      // Por exemplo, enviar para o servidor
      console.log({
        nome,
        idade,
        sexo,
        matricula
      });
    };
  
    // Função para lidar com o envio do formulário de edição
    const handleEdicaoSubmit = (event) => {
      event.preventDefault();
      // Aqui você pode fazer o que precisar com os dados submetidos
      // Por exemplo, enviar para o servidor
      console.log('Funcionário editado:', funcionarioEditado);
    };
  
    // Renderiza os campos específicos para cada opção
    const renderForm = () => {
      if (selectedOption === 'FUNCINARIO') {
        return (
          <form onSubmit={handleCadastroSubmit}>
            <input type="text" placeholder="NOME" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="number" placeholder="IDADE" value={idade} onChange={(e) => setIdade(e.target.value)} />
            <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
              <option value="">SELECIONE O SEXO</option>
              <option value="M">MASCULINO</option>
              <option value="F">FEMININO</option>
            </select>
            <input type="text" placeholder="MATRÍCULA" value={matricula} onChange={(e) => setMatricula(e.target.value)} />
            <button type="submit">SALVAR</button>
          </form>
        );
      
      }
    };
  
    return (
      <div>
        <h2># REGISTROS;</h2>
        <h3>O que você deseja fazer?</h3>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">SELECIONE UMA OPÇÃO</option>
          <option value="FUNCIONARIO">FUNCIONARIO</option>
          <option value="CODIGO DE EPI">CODIGO DE EPI</option>
        </select>
        {renderForm()}
      </div>
    );
  }
  

export default Registro;
