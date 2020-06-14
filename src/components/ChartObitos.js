import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import dadosDiarios from '../data/dadosDiarios.json'


class ChartObitos extends Component {
    constructor(props) {
      super(props)
  
      var data = []
      for (var i in dadosDiarios) {
          data.push(dadosDiarios[i].data)
      }
  
      var qtdObitos = []
      for (var c in dadosDiarios) {
        qtdObitos.push(dadosDiarios[c].obitosAcumulados)
      }
  
  
      this.state = {
        dataLine: {
          labels: data,
          datasets: [
            {
              label: 'Quantidade de Óbitos',
              data: qtdObitos,
            //   backgroundColor: 'transparent',
              borderColor: '#efa8b0',
              borderDashOffset: 6,
              lineTension: 0,
            //   pointBackgroundColor: 'transparent',
              pointBorderColor: '#efa8b0',
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
  
  export default ChartObitos