import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/about/About'
import Header from './components/layouts/Header/Header'
import Layout from './components/layouts/Layout'
import Services from './pages/services/Services'
import Resources from './pages/resources/Resources'
import Contact from './pages/contact/Contact'

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/resources' element={<Resources />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
            </Routes>
            x</>
    )
}

export default App