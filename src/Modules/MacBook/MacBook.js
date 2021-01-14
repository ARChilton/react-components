import React from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'
import {
  MacBookDevice,
  MacBookTopBar,
  MacBookBottomBar,
  MacBookCamera,
  GeneralDeviceScreen,
  MacBookContainer,
} from './MacBookComponents/MacBookComponents'
import IPhoneX from '../IPhoneX/IPhoneX'

const MacBook = ({ children, iphoneProps }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  return (
    <MacBookContainer>
      {!isTabletOrMobile && (
        <MacBookDevice>
          <MacBookTopBar />
          <MacBookCamera />
          <GeneralDeviceScreen>{children}</GeneralDeviceScreen>
          <MacBookBottomBar />
        </MacBookDevice>
      )}
      {isTabletOrMobile && <IPhoneX {...iphoneProps}>{children}</IPhoneX>}
    </MacBookContainer>
  )
}

MacBook.propTypes = {
  children: PropTypes.node,
  iphoneProps: PropTypes.objectOf(PropTypes.any),
}

MacBook.defaultProps = {
  children: null,
  iphoneProps: {},
}

export default MacBook
