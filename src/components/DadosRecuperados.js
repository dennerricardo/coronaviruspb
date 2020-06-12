import React from 'react'
import dadosRecuperados from '../data/dadosDiarios.json'

export default class DadosRecuperados extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { obtsCardRC } = this.props; 

    return (
      <div className="statistics">
        <li className="style1" key={obtsCardRC}>
          <span className="icon fa-users"></span>
          <strong>{dadosRecuperados[obtsCardRC].casosAcumulados}</strong>
          Casos Confirmados
        </li>
        <li className="style2" key={obtsCardRC}>
          <span className= "icon fa-user-times"></span>
          <strong>{dadosRecuperados[obtsCardRC].descartados}</strong>
          Descartados
        </li>
        <li className="style3" key={obtsCardRC}>
          <span className="icon fa-heart"></span>
          <strong>{dadosRecuperados[obtsCardRC].obitosAcumulados}</strong>
          Óbitos por Covid-19
        </li>
        <li className="style4" key={obtsCardRC}>
          <span className="icon fa-user"></span>
          <strong>{dadosRecuperados[obtsCardRC].recuperados}</strong>
          Recuperados
        </li>
      </div>
    )
  }
}
