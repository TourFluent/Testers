import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Component5 from '../components/component5'
import SolidButton from '../components/solid-button'
import './tour-packages.css'

const TourPackages = (props) => {
  return (
    <div className="tour-packages-container">
      <Helmet>
        <title>Tour-packages - Travel Agency</title>
        <meta property="og:title" content="Tour-packages - Travel Agency" />
      </Helmet>
      <div className="tour-packages-container01">
        <nav data-role="Header" className="tour-packages-navbar">
          <Link to="/" className="tour-packages-navlink">
            <Component5 className="tour-packages-component"></Component5>
          </Link>
          <div className="tour-packages-right-side">
            <div className="tour-packages-links-container">
              <a href="#top" className="tour-packages-link button">
                Home
              </a>
              <Link to="/about-us" className="tour-packages-navlink1 button">
                About
              </Link>
              <Link
                to="/tour-packages"
                className="tour-packages-navlink2 button"
              >
                Tour Packages
              </Link>
              <Link to="/about-us" className="tour-packages-text">
                Contact
              </Link>
            </div>
            <Link to="/log-in" className="tour-packages-navlink3">
              <SolidButton
                button="Login / Signup"
                rootClassName="solid-button-root-class-name4"
                className="tour-packages-component1"
              ></SolidButton>
            </Link>
          </div>
          <div data-type="BurgerMenu" className="tour-packages-burger-menu">
            <svg viewBox="0 0 1024 1024" className="tour-packages-burger-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="tour-packages-mobile-menu">
            <div className="tour-packages-nav">
              <div className="tour-packages-top">
                <h1>Travel</h1>
                <div
                  data-type="CloseMobileMenu"
                  className="tour-packages-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="tour-packages-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="tour-packages-right-side1">
                <div className="tour-packages-links-container1">
                  <span className="tour-packages-text01">Home</span>
                  <span className="tour-packages-text02">About</span>
                  <span className="tour-packages-text03">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="tour-packages-link1">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="tour-packages-follow-container">
              <span className="tour-packages-text05">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="tour-packages-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="tour-packages-link2"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="tour-packages-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="tour-packages-link3"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="tour-packages-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="tour-packages-link4"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="tour-packages-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="tour-packages-pricing"></div>
      <div className="tour-packages-pricing1">
        <div className="tour-packages-container02">
          <div className="tour-packages-pricing-card">
            <span className="tour-packages-text06">
              Mesmerizing Hyderabad Package - 3 Nights / 4 Days (Hotel Luminous
              One Continent)
            </span>
            <div className="tour-packages-container03">
              <div className="tour-packages-container04"></div>
              <div className="tour-packages-container05">
                <span className="tour-packages-text07 list">
                  Hyderabad is also known as the “city of Love”. It was for the
                  love of Bhagmathi that the 5th king of Golconda Mohd. Quli
                  qutub shah founded the city of bhagyanagar. when the lady
                  joined the Royal house she was given the title of “Hyder
                  Mahal”and then the city was renamed as “Hyderabad”. Located on
                  the southern bank of river Musi Hyderabad is known for its
                  Hospitality and a pleasant welcome to all its visitor. To make
                  your stay more memorable, Tulip Inn is the hotel in the
                  package which offers a night of serenity and blissful
                  dreams.Stir your senses and then awakens you to a new page of
                  Luxury!!
                </span>
              </div>
            </div>
          </div>
          <div className="tour-packages-pricing-card1">
            <span className="tour-packages-text08">
              Ravishing Hyderabad Package 3 Nights / 4 Days  (Hotel Wood Bridge)
            </span>
            <div className="tour-packages-container06"></div>
            <div className="tour-packages-container07">
              <span className="tour-packages-text09">
                <span>
                  Hyderabad is a city that presents best of the both worlds and
                  a perfect contrast between traditional and modern world.
                  Visiting Hyderabad offers you with many options for
                  sightseeing. There are various sightseeing tourist attractions
                  in Hyderabad offering interesting holidaying options.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Enjoy all these sightseeing places with our specially designed
                  Ravishing Hyderabad Package 3 Nights / 4 Days and have a
                  wonderful stay at Deluxe room in Hotel Wood Bridge in
                  Hyderabad.
                </span>
              </span>
            </div>
          </div>
          <div className="tour-packages-pricing-card2">
            <span className="tour-packages-text13">
              Splendid Hyderabad Package (3 Nights / 4 Days)
            </span>
            <div className="tour-packages-container08"></div>
            <span className="tour-packages-text14">
              <span>
                “Hyderabad” is the City that is known for its Rich Culture and
                Tradition..
              </span>
              <br></br>
              <br></br>
              <span>
                Splendid Hyderabad package is specially designed in such a way
                that you cover all the historical structures of hyderabad. Hotel
                Aditya Park Inn brings the best possible facilities and
                amenities to make your stay comfortable.Spend 3 Nights And 4
                Days at Aditya Park Inn hotel and enjoy your stay with great
                sightseeing options..
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="tour-packages-pricing2">
        <div className="tour-packages-container09">
          <div className="tour-packages-pricing-card3">
            <span className="tour-packages-text19">
              Budget Hyderabad Tour Package - 2 Nights / 3 Days (Hotel Sai
              Krupa)
            </span>
            <span className="tour-packages-text20">
              <span>
                Tired and bored of day to day hustles and hassles of life?
                Planning for a exciting weekends and end up working on them
                too?? Well in that case the wait is over. Just head start your
                way to Hyderabad a wonderful place to unwind and just relax !!
              </span>
              <br></br>
              <br></br>
              <span>
                {' '}
                Hyderabad offers a number of exciting things to visit, see and
                do. This package is all about a 2 Star Hotel Sai Krupa which
                offers 2 Nights 3 Days comfortable accommodation in a very good
                budget fitting every pocket. The vibrant decor and the courteous
                service makes your stay a comfortable one here.
              </span>
            </span>
            <div className="tour-packages-container10">
              <div className="tour-packages-container11"></div>
            </div>
          </div>
          <div className="tour-packages-pricing-card4">
            <span className="tour-packages-text25">
              Economy Hyderabad Tour Package (3 Nights / 4 Days)
            </span>
            <div className="tour-packages-container12"></div>
            <span className="tour-packages-text26">
              Hyderabad city gives its tourist number of options of sightseeing
              places which are worth a visit. And it can be called a City of
              “Tourist Delight”. HSo get ready to get some soothing experiences
              with the package 3 Nights 4 Days with hotel Sai krupa which helps
              to start your tour with the remarkable memories at an affordable
              pricing. This package also helps you to get a closer picture of
              all the sightseeing places in Hyderabad. So get ready to explore
              the unexplored of Hyderabad!!
            </span>
            <div className="tour-packages-container13"></div>
          </div>
        </div>
      </div>
      <Link to="/package-info" className="tour-packages-navlink4 button">
        Learn More
      </Link>
      <div className="tour-packages-footer">
        <div className="tour-packages-menu">
          <a href="#tour fluent" className="tour-packages-link5">
            <h1 className="tour-packages-logo1">TOURFLUENT</h1>
          </a>
          <div className="tour-packages-links-container2"></div>
          <div className="tour-packages-follow-container1">
            <span className="tour-packages-text27">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="tour-packages-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="tour-packages-link6"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="tour-packages-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="tour-packages-link7"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="tour-packages-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="tour-packages-link8"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="tour-packages-icon15"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourPackages
