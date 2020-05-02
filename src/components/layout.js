import React from "react"
import PropTypes from "prop-types"
import "./css-reset.scss"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Built with ❤️</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
