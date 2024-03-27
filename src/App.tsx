import * as Sentry from '@sentry/react'

import Hero from './components/hero'
import Highlights from './components/highlights'
import Model from './components/model'
import Navbar from './components/navbar'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  )
}

export default Sentry.withProfiler(App)
