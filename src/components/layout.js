import React from "react"
import { Link } from "gatsby"
import DivOpsImage from '../../content/assets/divops.png';
import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <img alt={title} src={DivOpsImage} />
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Join the DivOps
        {` `}
        <a href="https://join.slack.com/t/divopsdevs/shared_invite/enQtOTcxMjQ5MzUxMjcwLWIwNGQzMmRjNjkwMWNjNmEyMjY0ZmRjNzRkNzgzMTgxNjJiNjNlZTg2MmIzYmQyOTg1MmEzOWJjMWZiN2IxMWE">Slack Community</a>
      </footer>
    </div>
  )
}

export default Layout
