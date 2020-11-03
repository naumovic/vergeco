import React from 'react'
import './Footer.css'
import FormSubscribe from '../components/FormSubscribe'
import { Twitter, GitHub } from './Social'
import colors from '../lib/colors'


export default () => (
  <div>
    <h4 className="taCenter">
      Thanks for reading! {' '}
    </h4>
    <div className="taCenter">
      Want more? Let's chat about digital analytics and optimisation, business, product management and marketing.
      <br />
      I send articles and thoughts occasionally and love to have conversations. You can always unsubscribe.
    </div>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          <FormSubscribe name="Subscribe Form" />
        </span>
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
