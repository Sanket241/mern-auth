import React from 'react'
import { Link } from 'react-router-dom'
import Analytics from '../Component/Analytics'

const Home = () => {
  return (
    <>
      <main>
        <section className='section-hero'>
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the world's Best It Company</p>
              <h1>Welcome to the Attrie</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, magni. Doloremque tempore consequatur repellat sequi. Autem laudantium ipsam dolorem, explicabo voluptatum sapiente sed veniam impedit dolores, consectetur, ab qui vel!</p>
              <div className="btn btn-group">
                <Link to="/contact"><button className='btn'>Connect now</button></Link>
                <Link to="/services"><button className='btn'>Learn More</button></Link>
              </div>
            </div>
            <div className="hero-image">
              <img src="/vite.svg" alt="404 error" width="400" height="500" />
            </div>
          </div>

        </section>
      </main>

     <Analytics/>
     
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
          <img src="/vite.svg" alt="" width="400" height="500" />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home