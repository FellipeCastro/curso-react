export default function listaNumeros(props) {
    const num = props.numeros
    const lista_Numeros = num.map((n) => <li key={n.toString()}>{n}</li>)
  
    return (
      <ul>
        {lista_Numeros}
      </ul>
    )
  }