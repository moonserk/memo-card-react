import React from 'react'
import Card from "./Card";
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
const CardsList = ({cards, onCardClick}) => (
    <div className='row'>
       {cards.map(card => (
            <Card key={card.id} {...card} onClick={() => onCardClick(card.id)} />
        ))}
    </div>
)

CardsList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            translate: PropTypes.string.isRequired,
            flip: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    onCardClick: PropTypes.func.isRequired
}

export default CardsList