import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import IPhoneXToolbar from '../../IPhoneXToolbar/IPhoneXToolbar'
import IPhoneXKeyboard from '../../IPhoneXKeyboard/IPhoneXKeyboard'
import IPhoneXStatusBar from '../../IPhoneXStatusBar/IPhoneXStatusBar'
import { IPhoneXScreen } from '../IPhoneXComponents'

const SmallScreenIPhoneX = ({
  children,
  keyboard,
  toolbarTitle,
  className,
  toolbar,
  toolbarWrapper,
  screenWrapper,
}) => (
  <div className={className}>
    <IPhoneXScreen className={screenWrapper}>
      <IPhoneXStatusBar />
      {toolbar && (
        <IPhoneXToolbar
          centerChildren={toolbarTitle}
          className={toolbarWrapper}
        />
      )}
      {children}
      {keyboard && <IPhoneXKeyboard />}
    </IPhoneXScreen>
    {/* </IPhoneXThinDevice> */}
  </div>
)

SmallScreenIPhoneX.propTypes = {
  children: PropTypes.node,
  keyboard: PropTypes.bool,
  toolbarTitle: PropTypes.string,
  className: PropTypes.string,
  toolbar: PropTypes.bool,
}

SmallScreenIPhoneX.defaultProps = {
  children: 'Nothing to see here',
  keyboard: false,
  toolbarTitle: null,
  className: null,
  toolbar: false,
}

const DefaultSmallScreenIphoneX = styled(SmallScreenIPhoneX)``

export default DefaultSmallScreenIphoneX
