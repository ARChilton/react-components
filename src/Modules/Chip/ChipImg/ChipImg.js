import styled from '@emotion/styled'
import React from 'react'
import PropTypes from 'prop-types'

const Img = ({ src, className }) => (
  <img src={src} className={className} alt='Chip' />
)

Img.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

const ChipImg = styled(Img)`
  object-fit: cover;
  width: ${(props) => props.dimensions || '50px'};
  height: ${(props) => props.dimensions || '50px'};
  border-radius: 50%;
`
export default ChipImg
