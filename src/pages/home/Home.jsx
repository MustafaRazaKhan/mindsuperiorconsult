import React from 'react'
import Hero from '../hero/Hero'
import WhoWeServe from '../whoweserve/WhoWeServe'
import About from '../about/About'
// import Contact from '../contact/Contact'


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <WhoWeServe />
            {/* <Contact/> */}
        </div>
    )
}

export default Home