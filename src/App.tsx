import * as Sentry from '@sentry/react'

import Features from './components/features'
import Hero from './components/hero'
import Highlights from './components/highlights'
import HowItWorks from './components/how-it-works'
import Model from './components/model'
import Navbar from './components/navbar'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  )
}

export default Sentry.withProfiler(App)
