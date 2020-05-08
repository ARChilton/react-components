import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BackgroundImg as BGI } from '../../../../Components/Images/Images'
import { changeDesignImage } from '../RestOfSiteState'

const BackgroundImg = ({ id, src, className, onClick, bgColor }) => (
  // <div className={className}>
  <BGI
    className={className}
    src={src}
    id={id}
    onClick={onClick}
    bgColor={bgColor}
  />
  // </div>
)

BackgroundImg.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
}

BackgroundImg.defaultProps = {
  id: 999,
  className: '',
  onClick: null,
  bgColor: 'transparent',
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(changeDesignImage(ownProps.id)),
})

export default connect(null, mapDispatchToProps)(BackgroundImg)
