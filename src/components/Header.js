import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header className="flex-container">
        <p className="header__name">Daniel Brog</p>
        <div className="header__navigation">
            <NavLink to="/projects" className="header__navigation__link">Projects</NavLink>
            <NavLink to="/skills" className="header__navigation__link">Skills</NavLink>
            <NavLink to="/about" className="header__navigation__link">About Me</NavLink>
        </div>
    </header>
)

export default Header