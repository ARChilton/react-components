/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const Star = ({ className }) => {
  return (
    <div className={className}>
      <svg height='25' width='23' data-rating='1'>
        <polygon
          points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78'
          css={{
            fill: '#ffd055',
          }}
        />
      </svg>
    </div>
  )
}

Star.propTypes = {
  className: PropTypes.string.isRequired,
}

const GoldStar = styled(Star)`
  cursor: pointer;
  float: left;
`
export const GreyStar = styled(Star)`
  polygon {
    fill: #ccc;
  }
`

export default GoldStar
