import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="nav navbar-nav">
            <li className="nav-item">
                <Link className="nav-link active" to='/' aria-current="page">Home<span className="visually-hidden">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link to='/GroupedTeamMembers' className="nav-link" href="#">Teams</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav