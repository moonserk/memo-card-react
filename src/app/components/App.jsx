import React from 'react'
import VisibleCardsList from '../containers/VisibleCardsList'
import AddCardContainer from '../containers/AddCardContainer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
const App = () => {
    return (
        <div className='container text-center'>
            <AddCardContainer />
            <div className='album'>
            <VisibleCardsList />
            </div>
        </div>
    )
}

export default App
