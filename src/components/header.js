import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <strong>{siteTitle}</strong>
      </Link>
    </h1>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
