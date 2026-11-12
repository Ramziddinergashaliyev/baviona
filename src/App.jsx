import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import PageLoader from './components/pageLoader/PageLoader'
import Home from './pages/Home'

const About = lazy(() => import('./pages/about/About'))
const Services = lazy(() => import('./pages/services/Services'))
const Resources = lazy(() => import('./pages/resources/Resources'))
const Contact = lazy(() => import('./pages/contact/Contact'))

const withLoader = (page) => (
    <Suspense fallback={<PageLoader />}>{page}</Suspense>
)

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='about' element={withLoader(<About />)} />
                <Route path='services' element={withLoader(<Services />)} />
                <Route path='resources' element={withLoader(<Resources />)} />
                <Route path='contact' element={withLoader(<Contact />)} />
            </Route>
        </Routes>
    )
}

export default App

// import React from 'react'
// import Home from './pages/Home'
// import { Route, Routes } from 'react-router-dom'
// import About from './pages/about/About'
// import Layout from './components/layouts/Layout'
// import Services from './pages/services/Services'
// import Resources from './pages/resources/Resources'
// import Contact from './pages/contact/Contact'

// const App = () => {
//     return (
//         <>
//             <Routes>
//                 <Route path='/' element={<Layout />}>
//                     <Route index element={<Home />} />
//                     <Route path='/about' element={<About />} />
//                     <Route path='/services' element={<Services />} />
//                     <Route path='/resources' element={<Resources />} />
//                     <Route path='/contact' element={<Contact />} />
//                 </Route>
//             </Routes>
//             x</>
//     )
// }

// export default App