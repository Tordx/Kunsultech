import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {


  return (
    <nav id = 'mobile-cancel-nav' className={`navigation-links-nav ${props.rootClassName} `}>
      <a onClick={() => window.scrollTo(0, 0)} className="navigation-links-text">{props.text1}</a>
      <a onClick={() => window.scrollTo(0, 800)} className="navigation-links-text1">{props.text2}</a>
      <a onClick={() => window.scrollTo(0, 1589)} className="navigation-links-text2">{props.text3}</a>
      <span onClick={() => window.scrollTo(0, 10000)} className="navigation-links-text3">{props.text4}</span>
    </nav>
    
  )
}

NavigationLinks.defaultProps = {
  text1: 'Home',
  text2: 'Pricing',
  text3: 'About',
  text4: 'Contact us',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks
