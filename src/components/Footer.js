import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <h2>Follow Me On</h2>
      <section className="follow-me">
        <h3 className="footer-icons">
          <a href="https://www.instagram.com/jford00.php/">
            <FaInstagram />
          </a>
        </h3>
        <h3 className="footer-icons">
          <a href="https://www.linkedin.com/in/jackson-ford-799061188/">
            <FaLinkedin />
          </a>
        </h3>
        <h3 className="footer-icons">
          <a href="https://github.com/jfordnose64">
            <FaGithub />
          </a>
        </h3>
      </section>
      ©2019 Jackson Ford
    </div>
  )
}

export default Footer
