import React from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Card = ({text, translate, onClick, flip}) => (
    <div
        className='card elementCard cc'
        onClick={onClick}>
            {!flip ? text : translate}
    </div>
)

Card.propTypes = {
    text: PropTypes.string.isRequired,
    translate: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    flip: PropTypes.bool.isRequired
}

export default Card 