import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-us - Travel Agency</title>
        <meta property="og:title" content="About-us - Travel Agency" />
      </Helmet>
      <div className="about-us-features">
        <nav data-role="Header" className="about-us-navbar">
          <Link to="/" className="about-us-navlink">
            <img
              alt="image"
              src="/playground_assets/logo-200h.jpg"
              className="about-us-image"
            />
          </Link>
          <div className="about-us-right-side">
            <div className="about-us-links-container">
              <Link to="/" className="about-us-navlink1 button">
                Home
              </Link>
              <Link to="/about-us" className="about-us-navlink2 button">
                About
              </Link>
              <Link to="/tour-packages" className="about-us-navlink3 button">
                Tour Packages
              </Link>
              <a href="#contact" className="about-us-text">
                Contact
              </a>
            </div>
            <Link to="/log-in" className="about-us-navlink4">
              <SolidButton
                button="Login / Signup"
                rootClassName="solid-button-root-class-name2"
                className="about-us-component"
              ></SolidButton>
            </Link>
          </div>
          <div data-type="BurgerMenu" className="about-us-burger-menu">
            <svg viewBox="0 0 1024 1024" className="about-us-burger-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="about-us-mobile-menu">
            <div className="about-us-nav">
              <div className="about-us-top">
                <h1>Travel</h1>
                <div
                  data-type="CloseMobileMenu"
                  className="about-us-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="about-us-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="about-us-right-side1">
                <div className="about-us-links-container1">
                  <span className="about-us-text01">Home</span>
                  <span className="about-us-text02">About</span>
                  <span className="about-us-text03">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="about-us-link">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="about-us-follow-container">
              <span className="about-us-text05">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="about-us-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-us-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="about-us-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-us-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="about-us-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-us-link3"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="about-us-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="about-us-container1">
        <span id="about" className="about-us-text06">
          <br className="about-us-text07"></br>
          <span className="about-us-text08">
            ABOUT THE AGENCY
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="about-us-text09"></br>
          <br className="about-us-text10"></br>
          <br className="about-us-text11"></br>
          <span className="about-us-text12">‘</span>
          <span className="about-us-text13">
            TourFluent’ “Travel is the main thing you purchase that makes you
            more extravagant”. We, at ‘TourFluent’, swear by this and put stock
            in satisfying travel dreams that make you perpetually rich
            constantly. We have been moving excellent encounters for a
            considerable length of time through our cutting-edge planned
            occasion bundles and other fundamental travel administrations. We
            rouse our clients to carry on with a rich life, brimming with
            extraordinary travel encounters.
          </span>
          <br className="about-us-text14"></br>
          <br className="about-us-text15"></br>
          <span className="about-us-text16">
            A solid and “believed” travel brand of Hyderabad, our qualities
            incorporate a vast and faithful client base, a multi-channel stage
            for relaxation and business explorers, a powerful portable
            eco-framework for a range of voyagers and providers
          </span>
          <br className="about-us-text17"></br>
          <br className="about-us-text18"></br>
          <span className="about-us-text19">.</span>
          <span className="about-us-text20">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="about-us-text21">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-dj3f-800w.png"
          className="about-us-pasted-image"
        />
      </div>
      <div id="contact" className="about-us-container2">
        <div className="about-us-container3">
          <span className="heading about-us-text22">ENQUIRY FORM</span>
        </div>
        <div className="about-us-container4">
          <div className="about-us-container5">
            <label className="about-us-text23">Name</label>
            <input type="text" className="input about-us-textinput" />
            <label className="about-us-text24">Email</label>
            <input type="text" className="input about-us-textinput1" />
            <label className="about-us-text25">Phone Number</label>
            <input type="text" className="input about-us-textinput2" />
            <label className="about-us-text26">Message</label>
            <textarea className="about-us-textarea textarea"></textarea>
            <button className="button about-us-button">Submit</button>
          </div>
          <div
            data-thq="thq-dropdown"
            className="about-us-thq-dropdown list-item"
          >
            <ul data-thq="thq-dropdown-list" className="about-us-dropdown-list">
              <li
                data-thq="thq-dropdown"
                className="about-us-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="about-us-dropdown-toggle"
                >
                  <span className="about-us-text27">Sub-menu Item</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="about-us-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="about-us-dropdown-toggle1"
                >
                  <span className="about-us-text28">Sub-menu Item</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="about-us-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="about-us-dropdown-toggle2"
                >
                  <span className="about-us-text29">Sub-menu Item</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="about-us-dropdown3 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="about-us-dropdown-toggle3"
                >
                  <span className="about-us-text30">Sub-menu Item</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="about-us-dropdown4 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="about-us-dropdown-toggle4"
                >
                  <span className="about-us-text31">Sub-menu Item</span>
                </div>
              </li>
            </ul>
          </div>
          <div
            data-thq="thq-dropdown"
            className="about-us-thq-dropdown1 list-item"
          >
            <ul
              data-thq="thq-dropdown-list"
              className="about-us-dropdown-list1"
            >
              <li
                data-thq="thq-dropdown"
                className="about-us-dropdown5 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="about-us-dropdown-toggle5"
                >
                  <span className="about-us-text32">Sub-menu Item</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="about-us-dropdown6 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="about-us-dropdown-toggle6"
                >
                  <span className="about-us-text33">Sub-menu Item</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="about-us-dropdown7 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="about-us-dropdown-toggle7"
                >
                  <span className="about-us-text34">Sub-menu Item</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="about-us-footer">
        <span className="about-us-text35 input">
          <span className="about-us-text36">CONTACT US</span>
          <br className="about-us-text37"></br>
          <br></br>
          <span>
            Ashoka Metropolitian, 6-3-2 Road No.1,. Street 3, Banjara Hills,
            Hyderabad.
          </span>
          <br></br>
          <br></br>
          <span>+919876543210 | +919632374290 </span>
          <br></br>
          <br></br>
          <span className="about-us-text45">tourfluent@gmail.com</span>
          <br></br>
        </span>
        <div className="about-us-separator"></div>
      </footer>
      <div className="about-us-container6">
        <div id="icon group" className="about-us-icon-group">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer noopener"
            className="about-us-link4"
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="about-us-icon11"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="about-us-link5"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="about-us-icon13"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer noopener"
            className="about-us-link6"
          >
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="about-us-icon15"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
