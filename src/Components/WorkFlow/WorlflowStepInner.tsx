import styled from '@emotion/styled'

const WorkflowStepInner = styled.a<{ complete?: boolean }>`
  color: ${({ complete: active }) => (active ? '#253b5b' : '#b7dff7')};
  background: white;
  border: 5px solid
    ${({ complete: active }) => (active ? '#253b5b' : '#b7dff7')};
  border-radius: 50%;
  counter-increment: stepCount;
  content: counter(stepCount);
  height: 3em;
  left: -1.5em;
  line-height: 3em;
  position: absolute;
  text-align: center;
  top: -1.5em;
  width: 3em;
  box-sizing: border-box;
`

export default WorkflowStepInner
