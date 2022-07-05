import { Link } from 'react-router-dom'
import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div className="header">
    <Link to="/" className="title">
      Intuitive Quiz Hub
    </Link>
    <hr className="divider" />
  </div>
    )
}

export default Header