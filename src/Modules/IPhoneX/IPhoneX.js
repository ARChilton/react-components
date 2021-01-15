import React from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'
import IPhoneXStatusBar from './IPhoneXStatusBar/IPhoneXStatusBar'
import IPhoneXKeyboard from './IPhoneXKeyboard/IPhoneXKeyboard'
import IPhoneXToolbar from './IPhoneXToolbar/IPhoneXToolbar'
import {
  IPhoneXNotch,
  IPhoneXSleepButton,
  IPhoneXCamera,
  IPhoneXSpeaker,
  IPhoneXTopBar,
  IPhoneXBottomBar,
  IPhoneXVolumeButton,
  IPhoneXOverflow,
  IPhoneXShadowTopRight,
  IPhoneXShadowTopLeft,
  IPhoneXShadowBottomRight,
  IPhoneXShadowBottomLeft,
  IPhoneXInnerShadow,
  IPhoneXScreen,
  ScreenOnlyIPhoneX,
  IPhoneXDevice,
} from './IPhoneXComponents/IPhoneXComponents'
import { ClassNames } from '@emotion/core'

const IPhoneX = ({
  children,
  keyboard,
  toolbarTitle,
  className,
  toolbar,
  toolbarWrapper,
  screenWrapper,
  statusBarWrapper,
  statusBGColor,
  statusBarColor,
}) => {
  const smallMobile = useMediaQuery({ maxWidth: 500 })
  return (
    <div style={{ margin: 'auto' }} className={className}>
      {!smallMobile && (
        <IPhoneXDevice>
          <IPhoneXNotch>
            <IPhoneXCamera />
            <IPhoneXSpeaker />
          </IPhoneXNotch>
          <IPhoneXTopBar />
          <IPhoneXSleepButton />
          <IPhoneXBottomBar />
          <IPhoneXVolumeButton />
          <IPhoneXOverflow>
            <IPhoneXShadowTopRight />
            <IPhoneXShadowTopLeft />
            <IPhoneXShadowBottomRight />
            <IPhoneXShadowBottomLeft />
          </IPhoneXOverflow>
          <IPhoneXInnerShadow />
          <IPhoneXScreen className={screenWrapper}>
            <IPhoneXStatusBar
              className={statusBarWrapper}
              statusBGColor={statusBGColor}
              statusColor={statusBarColor}
            />
            {toolbar && (
              <IPhoneXToolbar
                centerChildren={toolbarTitle}
                className={toolbarWrapper}
              />
            )}
            {children}

            {keyboard && <IPhoneXKeyboard />}
          </IPhoneXScreen>
        </IPhoneXDevice>
      )}
      {smallMobile && (
        <ScreenOnlyIPhoneX
          keyboard={keyboard}
          toolbarTitle={toolbarTitle}
          toolbar
        >
          {children}
        </ScreenOnlyIPhoneX>
      )}
    </div>
  )
}

IPhoneX.propTypes = {
  children: PropTypes.node,
  keyboard: PropTypes.bool,
  toolbarTitle: PropTypes.node,
  className: PropTypes.string,
  toolbar: PropTypes.bool,
  toolbarWrapper: PropTypes.string,
  screenWrapper: PropTypes.string,
  statusBarWrapper: PropTypes.string,
  statusBGColor: PropTypes.string,
  statusBarColor: PropTypes.string,
}

IPhoneX.defaultProps = {
  children: 'Nothing to see here',
  keyboard: false,
  toolbarTitle: null,
  className: null,
  toolbar: false,
  toolbarWrapper: null,
  screenWrapper: null,
  statusBarWrapper: null,
  statusBarColor: undefined,
  statusBGColor: undefined,
}

export default React.memo(IPhoneX)
