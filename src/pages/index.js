import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import TableComponent from '../components/Table'
import CardRecuperados from '../components/CardRecuperados'
import ChartCasosConfirmados from '../components/ChartCasosConfirmados'
import ChartObitos from '../components/ChartObitos'
// import SearchCidades from '../components/SearchCidades'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="COVID-19 | Paraíba" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section></section>
          <section id="intro" className="main special">
            <section>
              <ul>
                <CardRecuperados />
              </ul>
            </section>
            <h6>Fonte: Secretaria do Estado da Paraíba</h6>
            <br></br>
            <br></br>
            <br></br>
            <hr />
            <br></br>
            <br></br>
            <br></br>
            <section className="main special">
              <header className="major">
                <h2>Cidades Mais Afetadas</h2>
              </header>
              <div style={{ height: '770px', overflowY: 'scroll' }}>
                <table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Ranking</th>
                      <th>Cidade</th>
                      <th>Casos</th>
                      <th>Óbitos</th>
                    </tr>
                  </thead>
                  <TableComponent />
                </table>
              </div>
            </section>
            <br></br>
            <h6>Fonte: Secretaria do Estado da Paraíba</h6>

            {/* <section id="cta" className="main special">
              <header className="major">
                <h2>Buscar Cidade </h2>
                <SearchCidades />
              </header>
            </section>
            <br></br>
            <br></br> */}
          </section>

          <section id="first" className="main special">
            <section>
              <header className="major">
                <h2>Evolução dos Casos da COVID-19</h2>
              </header>
              <footer className="major">
                <ChartCasosConfirmados />
              </footer>
              <br></br>
              <h6>Fonte: Secretaria do Estado da Paraíba</h6>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <header className="major">
                <h2>Evolução dos Óbitos da COVID-19</h2>
              </header>
              <footer className="major">
                <ChartObitos />
              </footer>
            </section>
            <br></br>
            <h6>Fonte: Secretaria do Estado da Paraíba</h6>
          </section>
          <section id="second" className="main special">
            <section className="main special">
              <header className="major">
                <h2>Sintomas e Transmissão</h2>
              </header>
              <p>
                A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2, que
                apresenta um quadro clínico que varia de infecções
                assintomáticas a quadros respiratórios graves. De acordo com a
                Organização Mundial de Saúde (OMS), a maioria dos pacientes com
                COVID-19 (cerca de 80%) podem ser assintomáticos e cerca de 20%
                dos casos podem requerer atendimento hospitalar por apresentarem
                dificuldade respiratória e desses casos aproximadamente 5% podem
                necessitar de suporte para o tratamento de insuficiência
                respiratória (suporte ventilatório).
              </p>
              <p>
                Os sintomas da COVID-19 podem variar de um simples resfriado até
                uma pneumonia severa. Sendo os sintomas mais comuns: Tosse,
                Febre, Coriza, Dor de garganta, Dificuldade para respirar. Já a
                transmissão acontece de uma pessoa doente para outra ou por
                contato próximo por meio de: Toque do aperto de mão, Gotículas
                de saliva, Espirro, Tosse, Catarro, Objetos ou superfícies
                contaminadas, como celulares, mesas, maçanetas, brinquedos,
                teclados de computador etc.
              </p>
              <footer className="major">
                <ul className="actions">
                  <li>
                    <Link
                      to="https://coronavirus.saude.gov.br/sobre-a-doenca#como-se-proteger"
                      className="button"
                    >
                      Saiba Mais
                    </Link>
                  </li>
                </ul>
              </footer>
            </section>
            <br></br>
            <br></br>
            <hr />
            <br></br>
            <br></br>
            <section>
              <header className="major">
                <h2>Prevenção</h2>
              </header>
              <br></br>
              <br></br>
              <ul className="features">
                <li>
                  <span className="icon major style1 fa-home"></span>
                  <h3>Fique em casa</h3>
                  <p>
                    Ações como essa, além de reduzirem o número de casos, tem o
                    potencial de reduzir o impacto para os serviços de saúde,
                    por reduzir o pico epidêmico.
                  </p>
                </li>
                <li>
                  <span className="icon major style2 fa fa-users"></span>
                  <h3>Evite aglomeração</h3>
                  <p>
                    Utilize máscaras caseiras ou artesanais feitas de tecido em
                    situações de saída de sua residência e mantenha uma
                    distância mínima de cerca de 2 metros de qualquer pessoa.
                  </p>
                </li>
                <li>
                  <span className="icon major style5 fa fa-tint"></span>
                  <h3>Lave bem as mãos</h3>
                  <p>
                    Lave com frequência as mãos (dedos, unhas, punho, palma e
                    dorso) até a altura dos punhos, com água e sabão, ou então
                    higienize com álcool em gel 70%.
                  </p>
                </li>
              </ul>
            </section>

            <ul className="actions">
              <li>
                <Link
                  to="https://coronavirus.saude.gov.br/sobre-a-doenca#como-se-proteger"
                  className="button"
                >
                  Saiba Mais
                </Link>
              </li>
            </ul>
            <br></br>
            <br></br>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Paraíba Solidária</h2>
              <p>
                Vamos juntos combater a COVID-19 na Paraíba.
                <br />
                Realize doações financeiras ou em produtos para ajudar a salvar
                vidas em combate a COVID-19.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link
                    to="https://paraibasolidaria.pb.gov.br/"
                    className="button special"
                  >
                    Faça sua doação
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
