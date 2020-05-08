import React, { FC } from 'react'

interface TestComponentProps {
  number?: number
}

const TestComponent: FC<TestComponentProps> = ({ children, number }) => {
  return (
    <div>
      {children}
      {number}
      hi there
    </div>
  )
}

export default TestComponent
