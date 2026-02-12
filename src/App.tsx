// TODO: implement component

import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Courses } from './pages/Courses'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'

const App = () => {
  return (
    <>
      <Header />
      {/* TODO: wire pages to router */}
      <Home />
      <Courses />
      <About />
      <Contact />
      <Dashboard />
      <Footer />
    </>
  )
}

export default App
