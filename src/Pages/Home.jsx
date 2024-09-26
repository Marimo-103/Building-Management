import React from 'react'
import IntroBanner from '../Components/IntroBanner'
import Container from '../Components/Container'

const Home = () => {
  return (
    <div>
        <section id="intro">
            <IntroBanner />
        </section>
        <section id="faq">
          <Container className='pt-[100px] bg-[#23282F]'>

          </Container>
        </section>
    </div>
  )
}

export default Home