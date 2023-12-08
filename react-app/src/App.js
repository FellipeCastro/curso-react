import React, {useState} from 'react';

import './App.css';

export default function App() {

  const [categoria, setCategoria] = useState("")
  
  const carros = [
    {categoria: "Esporte", preco: "110000", modelo: "Golf GTI"},
    {categoria: "Esporte", preco: "120000", modelo: "Camaro"},
    {categoria: "SUV", preco: "85000", modelo: "HRV"},
    {categoria: "SUV", preco: "83000", modelo: "T-Cross"},
    {categoria: "Utilitario", preco: "125000", modelo: "Hillux"},
    {categoria: "Utilitario", preco: "90000", modelo: "Ranger"}
  ]

  const linhas = (cat) => {
    const li = [];
    carros.forEach((carro) => {
      if (!cat || carro.categoria?.toUpperCase() === cat.toUpperCase()) {
        li.push(
          <tr key={carro.modelo}>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
          </tr>
        );
      }
    });

    return li;
  };

  const tabelaCarros = (cat) => {
    return (
      <table border="1" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Categoria</th> <th>Preço</th> <th>Modelo</th>
          </tr>
        </thead>
        <tbody>{linhas(cat)}</tbody>
      </table>
    );
  };

  const pesquisaCategoria = (cat, scat) => {
    return (
      <div>
        <label>Digite uma Categoria</label>
        <br />
        <input type="text" value={cat} onChange={(e) => scat(e.target.value)} />
      </div>
    );
  };

  return (
    <>
      {pesquisaCategoria(categoria, setCategoria)}
      <br />
      {tabelaCarros(categoria)}
    </>
  );
}