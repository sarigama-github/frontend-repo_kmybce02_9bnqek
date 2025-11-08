import React from 'react'
import Spline from '@splinetool/react-spline'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Spline render error:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-emerald-600/20 to-cyan-500/20" />
      )
    }
    return this.props.children
  }
}

const SafeSpline = ({ scene }) => {
  return (
    <ErrorBoundary>
      <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
    </ErrorBoundary>
  )
}

export default SafeSpline
