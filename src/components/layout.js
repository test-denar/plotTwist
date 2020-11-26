/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1180,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
            }}
          >
            A plot twist Toolkit
          </h1>
        </div>

        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
