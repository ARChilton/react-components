import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Left = styled.div`
  min-width: 25%;
  /* float:left; */
`
const Center = styled.div`
  min-width: 50%;
  /* float:left; */
`
const Right = styled.div`
  min-width: 25%;
  float: right;
`
const IPhoneXToolbar = ({
  className,
  leftChildren,
  centerChildren,
  rightChildren,
}) => (
  <div className={className}>
    <Left>{leftChildren}</Left>
    <Center>{centerChildren}</Center>
    <Right>{rightChildren}</Right>
  </div>
)

IPhoneXToolbar.propTypes = {
  className: PropTypes.string.isRequired,
  leftChildren: PropTypes.node,
  rightChildren: PropTypes.node,
  centerChildren: PropTypes.node,
}

IPhoneXToolbar.defaultProps = {
  leftChildren: null,
  rightChildren: null,
  centerChildren: null,
}

const DefaultIPhoneXToolbar = styled(IPhoneXToolbar)`
  height: 30px;
  width: 100%;
  line-height: 30px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export default DefaultIPhoneXToolbar
