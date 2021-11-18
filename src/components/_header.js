import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import AboutMe from './aboutme'
import Projects from './projects'
import Resume from './resume'
import Contact from './contacts'

import Navigation from './_navigation'

export default function Header() {
  return (
    <>
      <Router>
        <div>
          <Navigation/>

          <Routes>

            <Route exact path="/" element={<AboutMe />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/contact" element={<Contact />} />

          </Routes>
        </div>
      </Router>
    </>
  )
}

