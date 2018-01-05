import React from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions/index';

let AddCardContainer = ({dispatch}) => {
    let inputText
    let inputTranslate
    return (
        <div>
        <form
            onSubmit={(e) =>{
                e.preventDefault()
                if(!inputText.value.trim() || !inputTranslate.value.trim()){
                    return
                }
            
                dispatch(addCard(inputText.value, inputTranslate.value))
                inputText.value = ""
                inputTranslate.value = ""
            }}
        >
        <input className='btn' ref={node => {
            inputText = node
        }}
        />
        <input className='btn' ref={node => {
            inputTranslate = node
        }}
        />
        <button className='btn button' type='submit'>
            Add Card
        </button>
        </form>
        </div>
    )
}

AddCardContainer = connect()(AddCardContainer)

export default AddCardContainer