import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import DefaultTypewriterDiv from '../../../Modules/TypewriterDiv/TypewriterDiv'
import DefaultPhoneQuestioResponse from '../../../Modules/PhoneQuestionResponse/PhoneQuestionResponse'
import IPhoneX from '../../../Modules/IPhoneX/IPhoneX'
import RightHandSide from './RightHandSide/RightHandSide'
import {
  getShowQuestionControlState,
  getTypewriterQuestionNumber,
  getTypewriterQuestions,
  getQuestionsSeenState,
  getdesignCreateReleaseShowAfterState,
} from '../../../redux/reducers'
import {
  increaseQuestionNumber,
  decreaseQuestionNumber,
} from '../../../Modules/TypewriterDiv/typewriterState'
import LeftHandSide from './LeftHandSide/LeftHandSide'
import { H2 } from '../../../Components/Text/Text'
import { phoneSurrondToScreenOnlySwitch } from '../../../Modules/IPhoneX/IPhoneXComponents/IPhoneXComponents'
import { ClassNames } from '@emotion/core'

const DeviceContainer = styled('div')`
  overflow-y: hidden;
  height: 90%;
  padding: 0 4px;
  width: 100%;
  align-self: flex-end;
`
const DeviceContainerContainer = styled.div`
  height: 90vh;
  min-height: 670px;
  /* width:535px; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  @media (max-width: ${`${phoneSurrondToScreenOnlySwitch}px`}) {
    width: 100%;
  }
`

const ButtonContainer = styled.div`
  height: 100%;
  width: 40px;
  min-width: 40px;
`

const Button = styled('button')`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.color.secondary};
  opacity: 0.7;
  padding: 16px;
  height: 100%;
  width: 100%;
  :focus {
    border: none;
    outline: none;
  }
  :hover {
    color: ${(props) => props.theme.color.primary};
    opacity: 1;
  }
`

const Chevron = styled('div')`
  ::before {
    border-style: solid;
    border-width: 3px 3px 0 0;
    font-size: 35px;
    content: '';
    display: inline-block;
    height: 0.45em;
    left: 0.15em;
    position: relative;
    vertical-align: top;
    width: 0.45em;
    top: 0;
  }
`

const Step2 = ({
  showControlButtons,
  onClickLeft,
  onClickRight,
  questionNumber,
  questions,
  className,
  questionsSeen,
  designCreateReleaseShowAfter,
}) => (
  <ClassNames>
    {({ cx, css }) => (
      <div style={{ minHeight: '40px', width: '100%' }}>
        <div>
          {questionsSeen > designCreateReleaseShowAfter ? (
            <H2
              style={{
                textAlign: 'center',
                fontFamily: 'Kalam',
                fontWeight: 'bold',
                marginBottom: '-64px',
                marginTop: '24px',
              }}
            >
              Create
            </H2>
          ) : null}
        </div>

        <div className={className}>
          <div
            className={cx(
              css`
                padding: 8px;
                @media (max-width: 992px) {
                  display: none;
                  order: 2;
                }
              `,
              'col-xs-10',
              'col-md-3',
              'col-lg-4'
            )}
            style={{ color: '#000' }}
          >
            <LeftHandSide />
          </div>

          <DeviceContainerContainer>
            <ButtonContainer>
              {showControlButtons && questionNumber > 0 ? (
                <Button onClick={onClickLeft}>
                  <Chevron style={{ transform: 'rotate(225deg)' }} />
                </Button>
              ) : null}
            </ButtonContainer>

            <DeviceContainer>
              <IPhoneX toolbarTitle='Ask a question' toolbar>
                <DefaultTypewriterDiv />
                {/* <LifecycleTypewriterDiv /> */}
                <div
                  style={{ borderBottom: '8px solid #efefef', width: '100%' }}
                />
                <DefaultPhoneQuestioResponse />
              </IPhoneX>
            </DeviceContainer>

            <ButtonContainer>
              {showControlButtons && questionNumber !== questions - 1 ? (
                <Button onClick={onClickRight}>
                  <Chevron
                    style={{ transform: 'rotate(45deg)', marginTop: '-20px' }}
                  />
                </Button>
              ) : null}
            </ButtonContainer>
          </DeviceContainerContainer>

          <div
            className={cx(
              css`
                padding: 8px;
                @media (max-width: 992px) {
                  display: none;
                  order: 2;
                }
              `,
              'col-xs-10',
              'col-md-3',
              'col-lg-4'
            )}
            style={{ color: '#000' }}
          >
            <RightHandSide />
          </div>
        </div>
      </div>
    )}
  </ClassNames>
)

Step2.propTypes = {
  showControlButtons: PropTypes.bool.isRequired,
  onClickLeft: PropTypes.func.isRequired,
  onClickRight: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  questions: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  questionsSeen: PropTypes.number.isRequired,
  designCreateReleaseShowAfter: PropTypes.number.isRequired,
}

const DefaultStep2 = styled(Step2)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`

const mapStateToProps = (state) => ({
  showControlButtons: getShowQuestionControlState(state),
  questionNumber: getTypewriterQuestionNumber(state),
  questions: getTypewriterQuestions(state).length,
  questionsSeen: getQuestionsSeenState(state),
  designCreateReleaseShowAfter: getdesignCreateReleaseShowAfterState(state),
})

const mapDispatchToProps = (dispatch) => ({
  onClickLeft: () => dispatch(decreaseQuestionNumber()),
  onClickRight: () => dispatch(increaseQuestionNumber()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DefaultStep2)
