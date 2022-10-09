import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card1.css'

const BlogPostCard1 = (props) => {
  return (
    <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src1}
        className="blog-post-card1-image"
      />
      <div className="blog-post-card1-container">
        <span className="blog-post-card1-text">{props.label}</span>
        <span className="blog-post-card1-text1">{props.description}</span>
        <div className="blog-post-card1-container1">
          <div className="blog-post-card1-profile">
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="blog-post-card1-image1"
            />
            <span className="blog-post-card1-text2">{props.author}</span>
          </div>
          <span className="blog-post-card1-text3">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard1.defaultProps = {
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  time: '5 min read',
  profile_alt: 'profile',
  description:
    'The city of Hyderabad along with umpteen numbers of sightseeing options also offers interesting shopping options. The city is known for shopping for pearls, handicrafts along with various apparels, leather goods and traditional jewelry. From high end shopping malls offering all kinds of international brands to local bazaars and roadside stalls, the city of Hyderabad presents its visitors with an ultimate shopping experience. Some of the common shopping areas of Hyderabad are Abids, Basheer Bagh, Nampally, Begum Bazar, Laad Bazaar and MG Road. At these places, you will find both shopping malls as well as stores for good. Abids has been one of the prime commercial centres of Hyderabad since the 90s. And at Nampally, you have the annual festival Hyderabad Numaish which is also known as All-India Industrial Exhibition and attracts merchants as well as visitors from not just the entire country but also from the continent nearby',
  image_alt: 'image',
  author: 'Jon Doe',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&w=200',
  label: '',
  image_src1:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
}

BlogPostCard1.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  time: PropTypes.string,
  profile_alt: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  author: PropTypes.string,
  profile_src: PropTypes.string,
  label: PropTypes.string,
  image_src1: PropTypes.string,
}

export default BlogPostCard1
