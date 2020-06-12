import React from 'react'
// import searchCidades from '../data/dadosCidades.json'

export default class SearchCidades extends React.Component {
  render() {
    return (
      <div className="holder">
        <input
          type="text"
          placeholder="Search"
        />
      </div>
    )
  }
}
