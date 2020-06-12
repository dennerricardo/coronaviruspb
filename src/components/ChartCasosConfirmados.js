import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import dadosDiarios from '../data/dadosDiarios.json'

class ChartCasosConfirmados extends Component {
  constructor(props) {
    super(props)

    var data = []
    for (var i in dadosDiarios) {
        data.push(dadosDiarios[i].data)
    }

    var qtdCasos = []
    for (var c in dadosDiarios) {
        qtdCasos.push(dadosDiarios[c].casosAcumulados)
    }


    this.state = {
      dataLine: {
        labels: data,
        datasets: [
          {
            label: 'Quantidade de Casos',
            data: qtdCasos,
            // backgroundColor: 'transparent',
            borderColor: '#7B68EE',
            borderDashOffset: 6,
            lineTension: 0,
            // pointBackgroundColor: 'transparent',
            pointBorderColor: '#7B68EE',
          },
        ],
      },
    }
  }

  render() {
    return (
      <Line
        data={this.state.dataLine}
        height={370}
        options={{ maintainAspectRatio: false,
          scales: {
            xAxes: [{
              ticks: {
                reverse: true,
                gridLines: {
                  drawOnChartArea: false, // only want the grid lines for one axis to show up
              }
              }
            }]
          }  }}
      />
    )
  }
}

export default ChartCasosConfirmados

// let data = []
// let qtdCasos = []
// dadosDiarios.map(dadosDiarios => {
//   data.push(parseInt(dadosDiarios.data))
//   qtdCasos.push(parseInt(dadosDiarios.casosAcumulados))
// })
