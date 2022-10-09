import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import OutlineButton from '../components/outline-button'
import BlogPostCard1 from '../components/blog-post-card1'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Travel Agency</title>
        <meta property="og:title" content="Travel Agency" />
      </Helmet>
      <nav data-role="Header" className="landing-page-navbar">
        <Link to="/" className="landing-page-navlink">
          <img
            alt="image"
            src="/playground_assets/logo-200h.jpg"
            className="landing-page-image"
          />
        </Link>
        <div className="landing-page-right-side">
          <div className="landing-page-links-container">
            <Link to="/" className="landing-page-navlink1 button">
              Home
            </Link>
            <Link to="/about-us" className="landing-page-navlink2 button">
              About
            </Link>
            <Link to="/tour-packages" className="landing-page-navlink3 button">
              Tour Packages
            </Link>
            <Link to="/about-us" className="landing-page-text">
              Contact
            </Link>
          </div>
          <Link to="/log-in" className="landing-page-navlink4">
            <SolidButton
              button="Login / Signup"
              rootClassName="solid-button-root-class-name9"
              className="landing-page-component"
            ></SolidButton>
          </Link>
        </div>
        <div data-type="BurgerMenu" className="landing-page-burger-menu">
          <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu">
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className="landing-page-mobile-menu">
          <div className="landing-page-nav">
            <div className="landing-page-top">
              <h1>Travel</h1>
              <div
                data-type="CloseMobileMenu"
                className="landing-page-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="landing-page-icon03">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="landing-page-right-side1">
              <div className="landing-page-links-container1">
                <span className="landing-page-text01">Home</span>
                <span className="landing-page-text02">About</span>
                <span className="landing-page-text03">Tour Packages</span>
                <span>Contact</span>
              </div>
              <a href="#main-section" className="landing-page-link">
                <SolidButton button="Explore places"></SolidButton>
              </a>
            </div>
          </div>
          <div className="landing-page-follow-container">
            <span className="landing-page-text05">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="landing-page-icons-container">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link01"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="landing-page-icon05"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link02"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="landing-page-icon07"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link03"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="landing-page-icon09"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div id="top" className="landing-page-top-container"></div>
      <div id="tour fluent" className="landing-page-banner">
        <span className="landing-page-text06">Hyderabad Tourism</span>
        <span className="landing-page-text07">
          <span>
            Hyderabad, The city of Nizams is one of the oldest cities not just
            in India but in the world. A city that has almost everything to
            offer its visitors, Hyderabad makes for one of the most interesting
            places to visit. A blend of rich cultural and historical heritages,
            age old traditions and best of modern facilities, the city of
            Hyderabad presents an environment that is unmatched to any.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <div className="landing-page-btn-group">
          <Link
            to="/sign-in"
            id="sign in"
            className="landing-page-navlink5 button"
          >
            Get Started
          </Link>
          <Link to="/about-us" className="landing-page-navlink6 button">
            Learn More
          </Link>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <h1>Most famous places</h1>
        <span className="landing-page-text11">Recommended</span>
        <div className="landing-page-cards-container">
          <div className="landing-page-container01">
            <img
              alt="image"
              src="/playground_assets/charminar-300h.webp"
              className="landing-page-image1"
            />
            <div className="landing-page-container02">
              <span className="landing-page-text12">Charminar</span>
              <span className="landing-page-text13">
                The Charminar is a mosque and monument located in Hyderabad,
                Telangana, India. Constructed in 1591, the landmark is a symbol
                of Hyderabad and officially incorporated in the emblem of
                Telangana The Charminar&apos;s long history includes the
                existence of a mosque on its top floor for more than 425 years
              </span>
              <a
                href="https://en.wikipedia.org/wiki/Charminar"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link04"
              >
                <OutlineButton
                  button1="Discover place"
                  className="landing-page-component02"
                ></OutlineButton>
              </a>
            </div>
          </div>
          <div className="landing-page-container03">
            <img
              alt="image"
              src="/playground_assets/ramoji-film-city-hyderabad-tourism-entry-fee-timings-holidays-reviews-header-300h.jpeg"
              className="landing-page-image2"
            />
            <div className="landing-page-container04">
              <span className="landing-page-text14">Ramoji Film City</span>
              <span className="landing-page-text15">
                Since 1991, Ramoji Film City has been alluring tourists from
                every corner of the country. One of the largest film studios in
                the world it has the capacity to house almost 50 film units
                within a given point of time.
              </span>
              <a
                href="https://www.ramojifilmcity.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link05"
              >
                <OutlineButton
                  button1="Discover place"
                  className="landing-page-component03"
                ></OutlineButton>
              </a>
            </div>
          </div>
          <div className="landing-page-container05">
            <img
              alt="image"
              src="/playground_assets/golconda-fort-hyderabad-tourism-entryfee-timings-package-tour-300h.jpeg"
              className="landing-page-image3"
            />
            <div className="landing-page-container06">
              <span className="landing-page-text16">Golconda Fort</span>
              <span className="landing-page-text17">
                Just 11 km away from the city, the architectural marvel Golconda
                Fort is well connected to the rest of the city. Built by Qutub
                Shahi Kings, this fort presents an impressive structure, with
                eight gates and 87 bastions.
              </span>
              <a
                href="https://en.wikipedia.org/wiki/Golconda"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link06"
              >
                <OutlineButton
                  button1="Discover place"
                  className="landing-page-component04"
                ></OutlineButton>
              </a>
            </div>
          </div>
          <div className="landing-page-container07">
            <div className="landing-page-container08">
              <img
                alt="image"
                src="/playground_assets/chowmahalla-1-17-300h.webp"
                className="landing-page-image4"
              />
              <div className="landing-page-container09">
                <span className="landing-page-text18">Chowmahalla Palace</span>
                <span className="landing-page-text19">
                  Chowmahalla Palace, with literal meaning of ‘four palaces’ in
                  Urdu language was built in the 18th century. It was during the
                  reign of fifth Nizam, Afzar-ud-Daulah, Asaf Jav V, from 1857
                  to 1869, that the palace was completed.
                </span>
                <a
                  href="https://en.wikipedia.org/wiki/Chowmahalla_Palace"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link07"
                >
                  <OutlineButton
                    button1="Discover place"
                    className="landing-page-component05"
                  ></OutlineButton>
                </a>
              </div>
            </div>
          </div>
          <div className="landing-page-container10">
            <img
              alt="image"
              src="/playground_assets/birla-mandir-hyderabad-tourism-entryfee-timings-package-tour-300h.jpeg"
              className="landing-page-image5"
            />
            <div className="landing-page-container11">
              <span className="landing-page-text20">Birla Mandir</span>
              <span className="landing-page-text21">
                Located atop 280-foot-high hillock of Kalapahad, the beautiful
                Birla Mandir has derived its name from the industrialist Birlas
                who have constructed Birla temples in various parts of the
                country.
              </span>
              <a
                href="https://en.wikipedia.org/wiki/Birla_Mandir,_Hyderabad"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link08"
              >
                <OutlineButton
                  button1="Discover place"
                  className="landing-page-component06"
                ></OutlineButton>
              </a>
            </div>
          </div>
          <div className="landing-page-container12">
            <img
              alt="image"
              src="/playground_assets/salar%20jung-300h.jpg"
              className="landing-page-image6"
            />
            <div className="landing-page-container13">
              <span className="landing-page-text22">Salar Jung Museum</span>
              <span className="landing-page-text23">
                The Salar Jung Museum is an art museum located at Dar-ul-Shifa,
                on the southern bank of the Musi River in the city of Hyderabad,
                Telangana, India. It is one of the notable National Museums of
                India. Originally a private art collection of the Salar Jung
                family, it was endowed to the nation after the death of Salar
                Jung III.
              </span>
              <a
                href="https://www.salarjungmuseum.in/"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link09"
              >
                <OutlineButton
                  button1="Discover place"
                  className="landing-page-component07"
                ></OutlineButton>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="landing-page-text24">Blog Posts</h1>
      <div className="landing-page-blog">
        <div className="landing-page-container14">
          <BlogPostCard1
            label="Once a Hyderabadi, Always a Hyderabadi - The Beauty of Hyderabad"
            author="Deev McForehead"
            image_src1="/playground_assets/blog%201-1500w.jpg"
            description="Once a Hyderabadi always a Hyderabadi is what describes a typical Hyderabadi wherever they go, be it out of the city or out of the country. The typical Hyderabadi hindi dialect, the laid back attitude, being a complete foodie and enjoying even a small achievement with a bunch of friends is what differentiates a hyderabadi from the others.  The place has created such a kind of influence on its culture and people that one can easily identify a hyderabadi from a large group of people. The old heritage monuments, Pearls, the Hyderabadi biryani, Irani chai is what describes this city of Nawabs."
            profile_src="https://st.depositphotos.com/1973997/1935/i/950/depositphotos_19353231-stock-photo-very-sad-man.jpg"
            rootClassName="rootClassName3"
          ></BlogPostCard1>
        </div>
        <div className="landing-page-container15">
          <BlogPostCard1
            label="Think Biryani Think Hyderabad!!"
            author="Yeneesa Weiner"
            image_src="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
            image_src1="/playground_assets/think-biryani-think-hyderabad-1500w.jpg"
            description="Amongst the numerous epithets associated with Hyderabad, the one which is most likely to attract tourists of all age groups, all generations, all genders alike is Biryani City. And the famous Hyderabadi Dum Biryani is synonymous with Paradise Restaurant or Persis Gold is a popular hotel located in MG Road, Secunderabad, India. Recipient of Best Biryani 2012 Times Food Award, does one really need any more incentives to taste the biryani of this restaurant?"
            profile_src="/playground_assets/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959-200h.jpg"
            rootClassName="rootClassName2"
          ></BlogPostCard1>
        </div>
        <div className="landing-page-container16">
          <BlogPostCard1
            label="Shopping in Hyderabad"
            author="Foornatree Prenchpries"
            image_src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxjaXR5fGVufDB8fHx8MTYyNjQ1MDI4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            image_src1="/playground_assets/shopping-street-in-hyderabad-1280x720-1500w.jpg"
            description="The city of Hyderabad along with umpteen numbers of sightseeing options also offers interesting shopping options. The city is known for shopping for pearls, handicrafts along with various apparels, leather goods and traditional jewelry. From high end shopping malls offering all kinds of international brands to local bazaars and roadside stalls, the city of Hyderabad presents its visitors with an ultimate shopping experience.  Some of the common shopping areas of Hyderabad are Abids, Basheer Bagh, Nampally, Begum Bazar, Laad Bazaar and MG Road. At these places, you will find both shopping malls as well as stores for good."
            profile_src="/playground_assets/istockphoto-1300512215-612x612-200h.jpg"
            rootClassName="rootClassName1"
          ></BlogPostCard1>
        </div>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-menu">
          <a href="#tour fluent" className="landing-page-link10">
            <h1 className="landing-page-logo1">TOURFLUENT</h1>
          </a>
          <div className="landing-page-links-container2">
            <div className="landing-page-container17">
              <Link to="/tour-packages" className="landing-page-navlink7">
                Tour packages
              </Link>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link11"
              >
                About us
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link12"
              >
                Contact us
              </a>
            </div>
          </div>
          <div className="landing-page-follow-container1">
            <span className="landing-page-text25">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="landing-page-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link13"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="landing-page-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link14"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="landing-page-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link15"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="landing-page-icon15"
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

export default LandingPage
