import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { ClassNames } from '@emotion/core'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  borderBottom: `rgba(134, 194, 50, 0.5) 2px solid`,
}

const NavBarOption = ({ className, label, to }) => (
  <ClassNames>
    {({ cx }) => (
      <NavLink
        to={to}
        href={to}
        exact
        activeStyle={activeStyle}
        className={cx(className, 'col-xs-2', 'col-xs-push-7')}
      >
        {label}
      </NavLink>
    )}
  </ClassNames>
)

NavBarOption.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

const DefaultNavBarOption = styled(NavBarOption)`
  height: 60px;
  /* padding:16px 2px; */
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  font-size: 14px;
  line-height: 60px;
  text-align: center;
  text-decoration: none;
  :hover {
    border-bottom: ${(props) => props.theme.color.primary} 2px solid;
    color: ${(props) => props.theme.color.primary};
    text-decoration: none;
  }
  :active {
    border-bottom: ${(props) => props.theme.color.primary} 2px solid;
    color: ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.navigationActive};
    text-decoration: none;
  }
  :visited {
    text-decoration: none;
  }
  :focus {
    text-decoration: none;
    outline: none;
  }
`

export default DefaultNavBarOption
