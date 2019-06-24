import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Header = () => (
    <header className="header__navigation">
        <HashLink to="#home" className="header__navigation__link">Home</HashLink>
        <HashLink to="#projects" className="header__navigation__link">Projects</HashLink>
        <HashLink to="#skills" className="header__navigation__link">Skills</HashLink>
        <HashLink to="#courses" className="header__navigation__link">Courses</HashLink>
    </header>

)

export default Header