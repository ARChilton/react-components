import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { H3 } from '../../../../Components/Text/Text'
import ColoredDiv from '../../../../Components/ColoredDiv/ColoredDiv'

const ProjectChildren = styled.div`
  padding: 16px;
  font-size: 17px;
`

const ProjectBox = ({ title, children, bgColor, color, className }) => (
  <div className={className}>
    <ColoredDiv bgColor={bgColor} color={color}>
      <H3>{title}</H3>
    </ColoredDiv>
    <ProjectChildren>{children}</ProjectChildren>
  </div>
)

ProjectBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
}

ProjectBox.defaultProps = {
  children: null,
  bgColor: 'transparent',
  color: '#000',
  className: '',
}

const DefaultProjectBox = styled(ProjectBox)`
  margin-bottom: 20px;
`

export default DefaultProjectBox
