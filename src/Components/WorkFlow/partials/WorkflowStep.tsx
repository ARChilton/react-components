import styled from '@emotion/styled'

const WorkflowStep = styled.li<{ complete?: boolean }>`
  background: ${({ complete: active }) => (active ? '#253b5b' : '#b7dff7')};
  color: white;
  content: ' ';
  display: flex;
  flex-grow: 1;
  height: 4px;
  margin-top: -2px;
  line-height: 1em;
  margin: 0;
  position: relative;
  text-align: right;

  :last-child {
    flex: 0 1 0;
  }
`

export default WorkflowStep
