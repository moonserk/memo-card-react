 
import './assets/stylesheets/style.scss'
import 'bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import cards from './app/reducers/cards';
import { addCard } from './app/actions/index';

let store = createStore(cards)

store.dispatch(addCard("Hello", "Здравствуйте"))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))


