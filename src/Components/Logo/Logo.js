import React from 'react'
import PropTypes from 'prop-types'
import defaultLogo from './icon.svg'

const Logo = ({ logo, alt, className }) => (
  <img src={logo} alt={alt} className={className} />
)

Logo.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  logo: PropTypes.string,
}

Logo.defaultProps = {
  className: '',
  logo: defaultLogo,
}
export default Logo
