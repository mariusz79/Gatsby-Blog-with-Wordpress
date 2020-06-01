/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import storage from "local-storage-fallback"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import NavBar from "../components/NavBar"
import "./layout.css"

const Layout = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = storage.getItem("theme")
    return savedTheme ? JSON.parse(savedTheme) : { mode: "light" }
  }
  const [theme, setTheme] = useState(getInitialTheme)
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  const GlobalStyle = createGlobalStyle`
      body {
                background-color: ${props =>
          props.theme.mode === "dark" ? "black" : "white"};
        color: ${props => (props.theme.mode === "dark" ? "#EEE" : "black")};
      }
      `
  return (
    <>
      <NavBar
        setTheme={e =>
          setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" })
        }
      />
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.0875rem 1.45rem`,
            }}
          >
            <main
              style={{
                height: `100vh`,
              }}
            >
              {children}
            </main>
            <footer style={{ margin: `auto 0 0 0 ` }}>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
