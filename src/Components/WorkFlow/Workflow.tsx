import React, { FC } from 'react'
import WorkflowContainer from './partials/WorkflowContainer'
import WorkflowStep from './partials/WorkflowStep'
import WorkflowStepInner from './WorlflowStepInner'

interface WorkflowStepProps {
  Icon?: string
  href?: string
  complete?: boolean
  tooltipText?: string
}

export interface WorkflowProps {
  steps?: Array<WorkflowStepProps>
}

const Workflow: FC<WorkflowProps> = ({ steps }) => {
  return (
    <WorkflowContainer>
      {steps.map((step) => {
        const { complete, href } = step
        return (
          <WorkflowStep complete={complete}>
            <WorkflowStepInner complete={complete} href={href} />
          </WorkflowStep>
        )
      })}
    </WorkflowContainer>
  )
}

export default Workflow
