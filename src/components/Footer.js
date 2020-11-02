import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h3 className="taCenter">
      Follow me{' '}
      <a href="https://twitter.com/naumovic">@naumovic</a>
    </h3>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://www.vergeco.com.au/">vergeCo</a>.
        </span>
      </div>
    </footer>
  </div>
)
