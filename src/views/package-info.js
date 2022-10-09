import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import './package-info.css'

const PackageInfo = (props) => {
  return (
    <div className="package-info-container">
      <Helmet>
        <title>package-info - Travel Agency</title>
        <meta property="og:title" content="package-info - Travel Agency" />
      </Helmet>
      <nav data-role="Header" className="package-info-navbar">
        <Link to="/" className="package-info-navlink">
          <img
            alt="image"
            src="/playground_assets/logo-200h.jpg"
            className="package-info-image"
          />
        </Link>
        <div className="package-info-right-side">
          <div className="package-info-links-container">
            <a href="#top" className="package-info-link button">
              Home
            </a>
            <Link to="/about-us" className="package-info-navlink1 button">
              About
            </Link>
            <Link to="/tour-packages" className="package-info-navlink2 button">
              Tour Packages
            </Link>
            <Link to="/about-us" className="package-info-text">
              Contact
            </Link>
          </div>
          <Link to="/log-in" className="package-info-navlink3">
            <SolidButton
              button="Login / Signup"
              rootClassName="solid-button-root-class-name5"
              className="package-info-component"
            ></SolidButton>
          </Link>
        </div>
        <div data-type="BurgerMenu" className="package-info-burger-menu">
          <svg viewBox="0 0 1024 1024" className="package-info-burger-menu">
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className="package-info-mobile-menu">
          <div className="package-info-nav">
            <div className="package-info-top">
              <h1>Travel</h1>
              <div
                data-type="CloseMobileMenu"
                className="package-info-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="package-info-icon03">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="package-info-right-side1">
              <div className="package-info-links-container1">
                <span className="package-info-text001">Home</span>
                <span className="package-info-text002">About</span>
                <span className="package-info-text003">Tour Packages</span>
                <span>Contact</span>
              </div>
              <a href="#main-section" className="package-info-link1">
                <SolidButton button="Explore places"></SolidButton>
              </a>
            </div>
          </div>
          <div className="package-info-follow-container">
            <span className="package-info-text005">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="package-info-icons-container">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="package-info-link2"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="package-info-icon05"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="package-info-link3"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="package-info-icon07"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="package-info-link4"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="package-info-icon09"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div id="hero1" className="package-info-hero1">
        <div className="package-info-container1">
          <h1 className="package-info-text006">
            Mesmerizing Hyderabad Package - 3 Nights / 4 Days (Hotel Luminous
            One Continent)
          </h1>
          <span className="package-info-text007">
            <span>
              {' '}
              3 Nights Hyderabad in 3 Star HotelStarting from Rs. 17,690 /-
            </span>
            <br></br>
            <span>with (Cab) + (Breakfast)(per Couple)</span>
            <br></br>
            <span>Inclusions:</span>
            <br></br>
            <span>
              A/c Indica for 4 Days Sightseeing with 8 Hours / 80 Kms per Day
            </span>
            <br></br>
            <span>
              Accommodation for 3 nights in Hotel Luminous One Continent
              Hyderabad
            </span>
            <br></br>
            <span>Breakfast at Hyderabad Hotel</span>
            <br></br>
            <span>All sightseeing and transfers as per Itinerary</span>
            <br></br>
            <span>
              Pickup and drop from Hyderabad Railway Station / Bus Stand
            </span>
            <br></br>
            <span>Driver allowances and parking charges</span>
            <br></br>
            <span>Check-in time 14 hrs and check-out time 12 noon.</span>
            <br></br>
            <span>Inclusive of All Taxes</span>
            <br></br>
          </span>
          <div className="package-info-btn-group"></div>
        </div>
        <img
          alt="image"
          src="https://www.hyderabadtourism.travel/cache/preview/656f1bca2b855f53a47ca24e2f63666f.jpg"
          className="package-info-image1"
        />
      </div>
      <div id="hero2" className="package-info-hero2">
        <img
          alt="image"
          src="https://www.hyderabadtourism.travel/cache/preview/89ac626cd9e4029f66cc5d4093bc6985.jpg"
          className="package-info-image2"
        />
        <div className="package-info-container2">
          <h1 className="package-info-text030">
            Ravishing Hyderabad Package 3 Nights / 4 Days  (Hotel Wood Bridge)
          </h1>
          <div className="package-info-btn-group1"></div>
          <span className="package-info-text031">
            <span>
              3 Nights Hyderabad in 3 Star HotelStarting from Rs. 15,499/-
            </span>
            <br></br>
            <span>with (Cab) + (Breakfast)(per Couple)</span>
            <br></br>
            <span> Inclusions:\</span>
            <br></br>
            <span>
              A/c Indica for 4 Days Sightseeing with 8 Hours / 80 Kms per Day
            </span>
            <br></br>
            <span>
              Accommodation for 3 nights in Hotel Wood Bridge Hyderabad
            </span>
            <br></br>
            <span>Breakfast at Hyderabad Hotel</span>
            <br></br>
            <span>All sightseeing and transfers as per Itinerary</span>
            <br></br>
            <span>All Taxes Inclusive</span>
            <br></br>
            <span>
              Pickup and drop from Hyderabad Railway Station / Bus Stand
            </span>
            <br></br>
            <span>Driver allowances and parking charges</span>
            <br></br>
            <br></br>
          </span>
        </div>
      </div>
      <div id="hero3" className="package-info-hero3">
        <div className="package-info-container3">
          <h1 className="package-info-text053">
            Splendid Hyderabad Package 3 Nights / 4 Days  (Hotel Vaishnaoi)
          </h1>
          <span className="package-info-text054">
            <span className="package-info-text055">
              3 Nights Hyderabad Luxury 3 Star HotelStarting from Rs. 16,999 /-
            </span>
            <br className="package-info-text056"></br>
            <span className="package-info-text057">
              with (Cab) + (Breakfast)(per Couple )
            </span>
            <br className="package-info-text058"></br>
            <span className="package-info-text059"> Inclusions:</span>
            <br className="package-info-text060"></br>
            <span className="package-info-text061">
              A/c Indica for 4 Days Sightseeing with 8 Hours / 80 Kms per Day
            </span>
            <br className="package-info-text062"></br>
            <span className="package-info-text063">
              Accommodation for 3 nights in Hotel Vaishnaoi, Hyderabad
            </span>
            <br className="package-info-text064"></br>
            <span className="package-info-text065">
              Breakfast at Hyderabad Hotel
            </span>
            <br className="package-info-text066"></br>
            <span className="package-info-text067">
              All sightseeing and transfers as per Itinerary
            </span>
            <br className="package-info-text068"></br>
            <span className="package-info-text069">All Taxes Inclusive</span>
            <br className="package-info-text070"></br>
            <span className="package-info-text071">
              Pickup and drop from Hyderabad Railway Station / Bus Stand
            </span>
            <br className="package-info-text072"></br>
            <span className="package-info-text073">
              Driver allowances and parking charges
            </span>
            <br></br>
            <br></br>
          </span>
        </div>
        <img
          alt="image"
          src="https://www.hyderabadtourism.travel/images/packages/hyderabad/splendid-hyderabad-package-3-nights-4-days-34hy02.jpg"
          className="package-info-image3"
        />
      </div>
      <div id="hero 4" className="package-info-hero4">
        <img
          alt="image"
          src="https://www.hyderabadtourism.travel/cache/preview/3e5adb99ada38e693732506720ab810e.jpg"
          className="package-info-image4"
        />
        <div className="package-info-container4">
          <h1 className="package-info-text076">
            Budget Hyderabad Tour Package - 2 Nights / 3 Days (Hotel Sai Krupa)
          </h1>
          <span className="package-info-text077">
            <span>
              2 Nights Hyderabad in 2 Star HotelStarting from Rs. 10,999 /-
            </span>
            <br></br>
            <span>with (Cab) + (Breakfast)(per Couple )</span>
            <br></br>
            <span> Inclusions:</span>
            <br></br>
            <span>
              A/c Indica for 3 Days Sightseeing with 8 Hours / 80 Kms per Day
              Limit
            </span>
            <br></br>
            <span>Accommodation for 2 nights Hotel Sai Krupa Hyderabad</span>
            <br></br>
            <span>Breakfast at Hyderabad Hotel</span>
            <br></br>
            <span>All sightseeing and transfers as per Itinerary</span>
            <br></br>
            <span>
              Pickup and drop from Hyderabad Railway Station / Bus Stand
            </span>
            <br></br>
            <span>Driver allowances and parking charges</span>
            <br></br>
            <span>Check Out Timing 24 Hours</span>
            <br></br>
            <span>Inclusive of All Taxes</span>
            <br></br>
          </span>
        </div>
      </div>
      <div id="hero5" className="package-info-hero5">
        <div className="package-info-container5">
          <h1 className="package-info-text100">
            Economy Hyderabad Tour Package 3 Nights / 4 Days 34HY04 (Hotel Sai
            Krupa)
          </h1>
          <span className="package-info-text101">
            <span>
              {' '}
              3 Nights Hyderabad in 2 Star HotelStarting from Rs. 13,599 /-
            </span>
            <br></br>
            <span>with (Cab) + (Breakfast)(per Couple )</span>
            <br></br>
            <span> Inclusions:</span>
            <br></br>
            <span>
              A/c Indica for 4 Days Sightseeing with 8 Hours / 80 Kms per Day
              Limit
            </span>
            <br></br>
            <span>Accommodation for 3 nights Hotel Sai Krupa Hyderabad</span>
            <br></br>
            <span>Breakfast at Hyderabad Hotel</span>
            <br></br>
            <span>All sightseeing and transfers as per Itinerary</span>
            <br></br>
            <span>
              Pickup and drop from Hyderabad Railway Station / Bus Stand
            </span>
            <br></br>
            <span>Driver allowances and parking charges</span>
            <br></br>
            <span>Check Out Timing 24 Hour</span>
            <br></br>
            <span>Inclusive of All Taxes</span>
            <br></br>
          </span>
          <div className="package-info-btn-group2"></div>
        </div>
        <img
          alt="image"
          src="https://www.hyderabadtourism.travel/images/packages/hyderabad/economy-hyderabad-tour-package-3-nights-4-days-34hy04.jpg"
          className="package-info-image5"
        />
      </div>
      <div className="package-info-footer">
        <div className="package-info-menu">
          <a href="#tour fluent" className="package-info-link5">
            <h1 className="package-info-logo1">TOURFLUENT</h1>
          </a>
          <div className="package-info-links-container2"></div>
          <div className="package-info-follow-container1">
            <span className="package-info-text124">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="package-info-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="package-info-link6"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="package-info-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="package-info-link7"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="package-info-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="package-info-link8"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="package-info-icon15"
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

export default PackageInfo
