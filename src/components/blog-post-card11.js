import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card11.css'

const BlogPostCard11 = (props) => {
  return (
    <div className={`blog-post-card11-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card11-image"
      />
      <div className="blog-post-card11-container">
        <span className="blog-post-card11-text">{props.label}</span>
        <span className="blog-post-card11-text1">{props.title}</span>
        <span className="blog-post-card11-text2">{props.description}</span>
        <div className="blog-post-card11-container1">
          <div className="blog-post-card11-profile">
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="blog-post-card11-image1"
            />
            <span className="blog-post-card11-text3">{props.author}</span>
          </div>
          <span className="blog-post-card11-text4">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard11.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  title: 'HIIIII FOORNAJSD',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  image_alt: 'image',
  rootClassName: '',
  author: 'Jon Doe',
  profile_alt: 'profile',
  time: '5 min read',
  label: 'ENTERPRISE',
}

BlogPostCard11.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  profile_src: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  author: PropTypes.string,
  profile_alt: PropTypes.string,
  time: PropTypes.string,
  label: PropTypes.string,
}

export default BlogPostCard11
