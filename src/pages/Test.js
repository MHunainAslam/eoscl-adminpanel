import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Test = () => {
  const Navigate = useNavigate()
  useEffect(() => {
    Navigate('/dashboard')
  }, [])

  return (
    <div>Test</div>
  )
}

export default Test