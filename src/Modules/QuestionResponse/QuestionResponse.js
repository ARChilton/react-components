import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import {
  getTypewriterQuestionNumber,
  getTypewriterQuestions,
} from '../../redux/reducers'

const QuestionMarkCirleContainerStyle = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 50% 0 0 50%;
  background-color: #fff;
`

const QuestionMarkCircleStyle = styled.div`
  border-radius: 50%;
  width: 80%;
  height: 80%;
  text-align: center;
  margin: 10%;
  border: 10px solid black;
  background-color: #fff;
  font-size: 30px;
  font-weight: 700;
`

const QuestionStyle = styled.div`
  /* background-color:#cacaca; */
  height: 50%;
  padding: 4px;
  font-size: 1.8em;
  font-weight: bold;
`

const AnswerStyle = styled.div`
  height: 50%;
  padding: 4px;
  font-size: 1.5em;
`

const QuestionAnswerContainer = styled.div`
  width: 400px;
  height: 74px;
  background-color: #fff;
  border-radius: 0 3px 3px 0;
`

const QuestionResponse = ({ className, typewriterText, answer }) => (
  <div className={className}>
    <QuestionMarkCirleContainerStyle>
      <QuestionMarkCircleStyle>?</QuestionMarkCircleStyle>
    </QuestionMarkCirleContainerStyle>
    <QuestionAnswerContainer>
      <QuestionStyle>Q. {typewriterText}</QuestionStyle>
      <AnswerStyle>A. {answer}</AnswerStyle>
    </QuestionAnswerContainer>
  </div>
)

QuestionResponse.propTypes = {
  className: PropTypes.string.isRequired,
  typewriterText: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
}

QuestionResponse.defaultProps = {
  duration: 2,
  delay: 2,
}

const DefaultQuestionResponse = styled(QuestionResponse)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 50px;
  animation: enter;
  animation-delay: ${(props) => props.duration + props.delay + 1}s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes enter {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    to {
      opacity: 1;
    }
  }
`

DefaultQuestionResponse.defaultProps = QuestionResponse.defaultProps

const mapStateToProps = (state) => {
  const questionNumber = getTypewriterQuestionNumber(state)
  const question = getTypewriterQuestions(state)[questionNumber]
  return { ...question, key: questionNumber }
}

export default connect(mapStateToProps)(DefaultQuestionResponse)
