import React from 'react'
import dadosCidades from '../data/dadosCidades.json'

 
export default class TableComponent extends React.Component{
  render(){
    return( 
        dadosCidades.map((dadosCidades,index) =>{
        return (
            <tbody >
              <tr>
                <td>{index+1}</td>
                <td>{dadosCidades.nome}</td>
                <td>{dadosCidades.quantidadeCasos}</td>
                <td>{dadosCidades.quantidadeObitos}</td>
              </tr>
            </tbody>
        )      
      })
    )
  }
}
