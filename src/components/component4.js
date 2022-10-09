import React from 'react'

import PropTypes from 'prop-types'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className={`component4-container ${props.rootClassName} `}>
      <input
        type="text"
        id="email"
        required
        placeholder={props.textinput_placeholder}
        className="input component4-textinput"
      />
      <label className="component4-text">{props.text}</label>
    </div>
  )
}

Component4.defaultProps = {
  rootClassName: '',
  textinput_placeholder: 'Email',
  text: 'Email *',
}

Component4.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
}

export default Component4
