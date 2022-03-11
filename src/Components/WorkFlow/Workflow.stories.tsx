import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Workflow, { WorkflowProps } from './Workflow'

export default {
  title: 'Components/Workflow',
  component: Workflow,
  args: {
    steps: [
      { complete: true },
      { complete: true },
      { complete: false },
      { complete: false },
    ],
  },
} as Meta

export const Default: Story<WorkflowProps> = ({ ...args }) => (
  <Workflow {...args} />
)
