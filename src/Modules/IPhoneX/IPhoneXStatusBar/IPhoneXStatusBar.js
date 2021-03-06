import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Clock from 'react-live-clock'
import battery from './battery-full.svg'
import signal from './signal.svg'
import wifi from './wifi.svg'

const IPhoneXStatusBarContainer = styled('div')`
  background-color: ${(props) => props.statusBGColor};
  color: ${(props) => props.statusColor};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 6px 24px;
`

const IPhoneXStatusBarItem = styled('div')`
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  max-width: 60px;
  font-weight: bold;
  max-height: 30px;
`

const IPhoneXStatusBarIcon = styled('img')`
  width: 33%;
  padding: 0 1px;
`

const IPhoneXStatusBar = ({ statusBGColor, statusColor, className }) => (
  <div>
    <IPhoneXStatusBarContainer
      statusBGColor={statusBGColor}
      statusColor={statusColor}
      className={className}
    >
      <IPhoneXStatusBarItem>
        <Clock ticking interval={1000} />
      </IPhoneXStatusBarItem>
      <IPhoneXStatusBarItem>
        <IPhoneXStatusBarIcon src={signal} alt='signal icon' />
        <IPhoneXStatusBarIcon src={wifi} alt='wifi icon' />
        <IPhoneXStatusBarIcon src={battery} alt='battery icon' />
      </IPhoneXStatusBarItem>
    </IPhoneXStatusBarContainer>
  </div>
)

IPhoneXStatusBar.propTypes = {
  statusBGColor: PropTypes.string,
  statusColor: PropTypes.string,
}

IPhoneXStatusBar.defaultProps = {
  statusBGColor: '#fff',
  statusColor: '#3a3a3a',
}

export default React.memo(IPhoneXStatusBar)
