import React from 'react'
import { Link } from 'react-router-dom'

export default function Layouts({children}) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Homeeee</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
        {children}
      <footer>
        ini footer
      </footer>
    </div>
  )
}
