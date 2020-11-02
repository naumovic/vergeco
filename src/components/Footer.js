import React from 'react'
import './Footer.css'
import { Twitter, GitHub } from './Social'
import colors from '../lib/colors'


export default () => (
  <div>
    <h4 className="taCenter">
      Thanks for reading! {' '}
      <a href="https://twitter.com/naumovic">@naumovic</a>
    </h4>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://www.vergeco.com.au/">vergeCo</a>.
        </span>
        <div>
          <br />
          <Twitter
            className="social-btn"
            color={colors.black}
            hover={colors.primary}
          />
          <GitHub
            className="social-btn"
            color={colors.black}
            hover={colors.primary}
          />
          </div>
        </div>
    </footer>
  </div>
)
