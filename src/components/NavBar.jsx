import React from 'react'

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleNavLinkClick(e, section.id)}
              className={activeSection === section.id ? 'active' : ''}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar