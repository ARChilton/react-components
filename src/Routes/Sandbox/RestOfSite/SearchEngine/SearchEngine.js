import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import images, { BackgroundImg } from '../../../../Components/Images/Images'

import SearchEngineTyping from './SearchEngineTyping/SearchEngineTyping'

const Container = styled('div')`
  height: 50vh;
`

const BGI = styled(BackgroundImg)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SketchyInput = styled(BackgroundImg)`
  width: 315px;
  height: unset;
  text-align: left;
  padding-left: 8px;
`

const SearchEngine = ({ children, no }) => (
  <Container>
    <BGI src={images.searchEngine}>
      <SketchyInput src={images.sketchyInputBox}>
        <SearchEngineTyping no={no}>{children}</SearchEngineTyping>
      </SketchyInput>
    </BGI>
  </Container>
)

SearchEngine.propTypes = {
  children: PropTypes.node,
  no: PropTypes.number.isRequired,
}

SearchEngine.defaultProps = {
  children: '',
}

export default SearchEngine
