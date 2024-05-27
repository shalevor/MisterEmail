
import { Home } from './pages/Home'
import { About } from './pages/About'
import { EmailIndex } from './pages/EmailIndex'
import { AppHeader } from './assets/cmps/AppHeader'

import {Routes, Route, HashRouter as Router} from 'react-router-dom'

export function App() {


    return (
        <Router>

            <section className='main-app'>
                
                <AppHeader />

                {/* TODO Add side bar component */}

                {/* <div className='side-bar'>
                    <a href='' className='side-bar-button'>button1</a>
                    <a href='' className='side-bar-button'>button2</a>
                    <a href='' className='side-bar-button'>button2</a>
                </div> */}

                <main className='container'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/emails" element={<EmailIndex />} />
                    </Routes>
                </main>

                <footer>
                    <section className="container">
                        {/* robotRights 2023 &copy; */}
                    </section>
                </footer>
            </section>

        </Router>

    )
}

