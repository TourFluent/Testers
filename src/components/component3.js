import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className={`component3-container ${props.rootClassName} `}>
      <div className="component3-container1">
        <span className="heading component3-text">{props.text7}</span>
        <label className="component3-text01">{props.text}</label>
        <input type="text" className="input component3-textinput" />
        <label className="component3-text02">{props.text1}</label>
        <input type="text" className="input component3-textinput1" />
        <label className="component3-text03">{props.text2}</label>
        <input type="text" className="input component3-textinput2" />
        <div
          data-thq="thq-dropdown"
          className="component3-thq-dropdown list-item"
        >
          <ul data-thq="thq-dropdown-list" className="component3-dropdown-list">
            <li
              data-thq="thq-dropdown"
              className="component3-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="component3-dropdown-toggle"
              >
                <span className="component3-text04">Sub-menu Item</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="component3-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="component3-dropdown-toggle1"
              >
                <span className="component3-text05">Sub-menu Item</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="component3-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="component3-dropdown-toggle2"
              >
                <span className="component3-text06">Sub-menu Item</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="component3-dropdown3 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="component3-dropdown-toggle3"
              >
                <span className="component3-text07">Sub-menu Item</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="component3-dropdown4 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="component3-dropdown-toggle4"
              >
                <span className="component3-text08">Sub-menu Item</span>
              </div>
            </li>
          </ul>
        </div>
        <div
          data-thq="thq-dropdown"
          className="component3-thq-dropdown1 list-item"
        >
          <ul
            data-thq="thq-dropdown-list"
            className="component3-dropdown-list1"
          >
            <li
              data-thq="thq-dropdown"
              className="component3-dropdown5 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="component3-dropdown-toggle5"
              >
                <span className="component3-text09">Sub-menu Item</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="component3-dropdown6 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="component3-dropdown-toggle6"
              >
                <span className="component3-text10">Sub-menu Item</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="component3-dropdown7 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="component3-dropdown-toggle7"
              >
                <span className="component3-text11">Sub-menu Item</span>
              </div>
            </li>
          </ul>
        </div>
        <label className="component3-text12">{props.text6}</label>
        <textarea className="component3-textarea textarea"></textarea>
        <button id="submit" className="component3-button button">
          {props.button}
        </button>
      </div>
    </div>
  )
}

Component3.defaultProps = {
  rootClassName: '',
  textinput_placeholder1: 'placeholder',
  text7: 'ENQUIRY FORM',
  textarea_placeholder1: 'placeholder',
  textinput_placeholder: 'placeholder',
  text6: 'Message',
  text: 'Name',
  text1: 'Email',
  textinput_placeholder3: 'placeholder',
  text2: 'Phone Number',
  textinput_placeholder2: 'placeholder',
  textarea_placeholder: 'placeholder',
  button: 'SUBMIT',
}

Component3.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text7: PropTypes.string,
  textarea_placeholder1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
  text2: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  button: PropTypes.string,
}

export default Component3
