import React from 'react'
import DadosRecuperados from '../components/DadosRecuperados'

export default class CardRecuperados extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <DadosRecuperados
          obtsCardRC={0}
        />
      </div>
    )
  }
}
