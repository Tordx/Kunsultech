import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './home.css'
import kunsultek from '../assets/kunsultek.png'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Kunsultech</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-container01">
            <div className="home-container02">
              <div data-type="BurgerMenu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
                {/* <header data-role="Header" className="home-header">
                  <img
                    alt="logo"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="home-image"
                  />
                  <div className="home-nav"></div>
                  <div className="home-btn-group">
                    <button className="home-login button">Login</button>
                    <button className="button">Register</button>
                  </div>
                  <div data-type="BurgerMenu" className="home-burger-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div data-type="MobileMenu" className="home-mobile-menu">
                    <div className="home-nav1">
                      <div className="home-container03">
                        <img
                          alt="image"
                          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                          className="home-image1"
                        />
                        <div
                          data-type="CloseMobileMenu"
                          className="home-menu-close"
                        >
                          <svg viewBox="0 0 1024 1024" className="home-icon04">
                            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                          </svg>
                        </div>
                      </div>
                      <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
                    </div>
                    <div>
                    
                    </div>
                  </div>
                </header> */}
              </div>
            </div>
            <div className="home-heading" id='row'>
              <a href = 'localhost:3000'>
                <img src={kunsultek} className= "header-image" width="50" height="50" align = 'left' draggable="false" />
                <text data-v-66c783da="" transform="translate(362.09 278.09) scale(1.30)" class="fill-current cls-2 text-dark-vue dark:text-light-vue lowercase text-dark-vue">
            kunsultech
                </text>
              </a>
              <br></br>
            </div>
          </div>
          <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
          <div data-type="MobileMenu" className="home-mobile-menu">
            <div className="home-container04">
              <span className="card-Heading home-heading1">Logo</span>
              <div data-type="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container">
              <span className="home-link navbar-Link">About</span>
              <span className="home-link1 navbar-Link">Experience</span>
              <span className="home-link2 navbar-Link">Portofolio</span>
              <span className="navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div className="home-container05">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading2">
              Start with us.
            </h1>
            <span className="home-text02 section-Text">
             Begin your e-commerce journey with kunsultek, we are the leading expert in e-commerce web and app buidling 
             with an effective 24/7 support.
            </span>
            <li onClick={() => window.scrollTo(0,10000)} className="home-button anchor button">Let's get started →</li>
            <div className="home-cta-btn-container"></div>
          </div>
          <img
            alt="image"
            src="https://i.pinimg.com/originals/50/78/a0/5078a05eb1b6847d93383eaa4c0ed500.gif"
            className="home-image2"
            draggable="false"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text03 section-Heading">Our Services</h2>
          <span className="home-text04 section-Text">
            Jump start your ecommerce business with us
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
            <div className="home-icon-container">
              <img
              src='https://i.imgur.com/f5a78al.png'
              className="home-icon14"
              draggable="false"
              />
            </div>
            <div className="home-content-container">
              <span className="home-heading3 card-Heading">Design and Development</span>
              <span className="home-text05 card-Text">
                  We do thorough research on new trends to keep you up on the market without compromising your specification and requirements.
              </span>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-icon-container1">
              <img
              src='https://loudvideos.com/wp-content/uploads/2019/06/whiteboard-animation-and-explainer-video-studio.png'
              className="home-icon18"
              draggable="false"

              />
            </div>
            <div className="home-content-container1">
              <span className="home-heading4 card-Heading">Planning and Consultancy</span>
              <span className="home-text06 card-Text">
                Hence the name kunsultek, we work with our clients to make sure that we meet their expectation, rest assured competence will be given
              </span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-icon-container2">
              <img
              className="home-icon18"
              src='https://i.imgur.com/vdxCacU.png'
              draggable="false"

              />
            </div>
            <div className="home-content-container2">
              <span className="home-heading5 card-Heading">Personal Projects</span>
              <span className="home-text07 card-Text">
                It's more fun introducing yourself the modern way and it is not just a portfolio, but your way to advertise yourself effectively online. 
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-about">
        <div className="home-max-content-width-container">
          <div className="home-heading-container1">
            <h1 className="section-Heading home-text08">
             Who we are
            </h1>
          </div>
          <div className="home-content-container3">
            <div className="home-about-1">
              <div className="home-container06">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text09 card-Text">
                  Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
                  imperdiet.
                </span>
              </div>
              <div className="home-container07">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text10 card-Text">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className="home-container08">
                <svg viewBox="0 0 1024 1024" className="home-icon24">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text11 card-Text">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
            <div className="home-about-11">
              <div className="home-container09">
                <svg viewBox="0 0 1024 1024" className="home-icon26">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text12 card-Text">
                  <span>
                    Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-container10">
                <svg viewBox="0 0 1024 1024" className="home-icon28">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text16 card-Text">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className="home-container11">
                <svg viewBox="0 0 1024 1024" className="home-icon30">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text17 card-Text">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-clients">
        <div className="home-heading-container2">
          <h1 className="home-text18 section-Heading">Clients</h1>
          <span className="home-text19 section-Text">
            Here we will put your clients&apos; or partners&apos; logos
          </span>
        </div>
        <div className="home-logo-container">
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className="home-logo"
          />
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className="home-logo1"
          />
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className="home-logo2"
          />
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className="home-logo3"
          />
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className="home-logo4"
          />
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-heading-container3">
          <h1 className="home-text20">Ask for a quote</h1>
          <span className="home-text21">
            <span className="home-text22">Email: valloryan2gmail.com</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-faqs">
        <h2 className="home-text24 section-Heading">
          Check the most common questions
        </h2>
        <div className="home-content-container4">
          <div className="home-faq">
            <div className="home-question-container">
              <span className="home-question">
                Do you build a complete website?
              </span>
            </div>
            <div className="home-answer-container">
              <span className="home-answer card-Text">
                Yes, we build a website complete with front and back-end to
                manage your sale and transaction, We also work closely with our
                clients to provide the design and experience that they want
                their shoppers while shopping in there website
              </span>
            </div>
          </div>
          <div className="home-faq1">
            <div className="home-question-container1">
              <span className="home-question1">
                How much time does is take you build a website
              </span>
            </div>
            <div className="home-answer-container1">
              <span className="home-answer1 card-Text">
                We focus on effeciency, and competence. A website might need to
                be delevop for a month or two but in timely manner.
              </span>
            </div>
          </div>
          <div className="home-faq2">
            <div className="home-question-container2">
              <span className="home-question2">
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className="home-answer-container2">
              <span className="home-answer2 card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className="card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator5"></div>
      <div className="home-subscribe"></div>
      <div className="home-section-separator6"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon32">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon34">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon36">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon38">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="anchor">Copyright, 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
