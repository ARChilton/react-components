import styled from '@emotion/styled'

const GraphPaper = styled('div')`
  background-image: ${({ gridColor }) =>
    `linear-gradient(${gridColor}, 2px, transparent 2px), linear-gradient(90deg, ${gridColor},  2px, transparent 2px), linear-gradient(rgba(150, 150, 150, .3) 1px, transparent 1px), linear-gradient(90deg, rgba(150, 150, 150, .3) 1px, transparent 1px)`};
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
`
export default GraphPaper
