import { connect } from 'react-redux'
import { flipCard } from '../actions/index';
import CardsList from '../components/CardsList'

const mapStateToProps = (state) => {
    return {
        cards: state
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
       onCardClick: id => {
           dispatch(flipCard(id))
       } 
    }
}

const VisibleCardsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardsList)

export default VisibleCardsList
