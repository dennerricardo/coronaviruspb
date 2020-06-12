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
          <section >
          </section>
          <section id="intro" className="main special">
            <p>Todos os Dados Utilizados Estão Disponíveis no Site da Secretaria do Estado da Paraíba</p>
            <section>
              <ul>
                <CardRecuperados />
              </ul>
            </section>
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
            <br></br>
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
                <h2>Evolução dos Casos de COVID-19</h2>
              </header>
              <footer className="major">
                <ChartCasosConfirmados />
              </footer>
              <br></br>
              <br></br>
              <header className="major">
                <h2>Evolução dos Óbitos de COVID-19</h2>
              </header>
              <footer className="major">
                <ChartObitos />
              </footer>
            </section>

            <section>
              <br></br>
              <br></br>
              <header className="major">
                <h2>Magna veroeros</h2>
              </header>
              <ul className="features">
                <li>
                  <span className="icon major style1 fa-code"></span>
                  <h3>Ipsum consequat</h3>
                  <p>
                    Sed lorem amet ipsum dolor et amet nullam consequat a
                    feugiat consequat tempus veroeros sed consequat.
                  </p>
                </li>
                <li>
                  <span className="icon major style3 fa-copy"></span>
                  <h3>Amed sed feugiat</h3>
                  <p>
                    Sed lorem amet ipsum dolor et amet nullam consequat a
                    feugiat consequat tempus veroeros sed consequat.
                  </p>
                </li>
                <li>
                  <span className="icon major style5 fa-diamond"></span>
                  <h3>Dolor nullam</h3>
                  <p>
                    Sed lorem amet ipsum dolor et amet nullam consequat a
                    feugiat consequat tempus veroeros sed consequat.
                  </p>
                </li>
              </ul>
              <footer className="major">
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </footer>
            </section>

            <section id="second" className="main special"></section>
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
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
