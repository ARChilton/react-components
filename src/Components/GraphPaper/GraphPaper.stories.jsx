import React from 'react'

import GraphPaper from './GraphPaper'

export default {
  title: 'Components/GraphPaper',
  component: GraphPaper,
  args: { gridColor: 'lightblue', style: { width: '100%', height: '500px' } },
}

export const Default = ({ ...args }) => <GraphPaper {...args} />
