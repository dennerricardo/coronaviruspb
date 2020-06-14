import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section >
      <dl className="alt">
        <dt>Email</dt>
          <p>denner.ricardo@gmail.com</p>
      </dl>
    </section>
    <section className='main special'>
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/dennerricardo/"
            className="icon fa-linkedin alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/dennerricardo/"
            className="icon fa-instagram alt"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">&copy; 2020 | Denner Ricardo</p>

  </footer>
)

export default Footer
