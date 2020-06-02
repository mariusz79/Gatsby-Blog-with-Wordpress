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
import Hero from "../components/Hero"
import Footer from "./Footer"
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
      <Hero />
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
              maxWidth: 1280,
              padding: `0 1.0875rem 1.45rem`,
            }}
          >
            <main
              style={{
                minHeight: `100vh`,
                height: "100%",
              }}
            >
              {children}
            </main>
          </div>
          <Footer/>
        </>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
