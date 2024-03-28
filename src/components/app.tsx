import * as Sentry from '@sentry/react'

import Features from './features'
import Footer from './footer'
import Hero from './hero'
import Highlights from './highlights'
import HowItWorks from './how-it-works'
import Model from './model'
import Navbar from './navbar'

const App = Sentry.withProfiler(() => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
})

export default App
