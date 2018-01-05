const cards = (state = [], action) => {
    switch(action.type){
        case 'ADD_CARD':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    translate: action.translate,
                    flip: false
                }
            ]
        case 'FLIP_CARD':
            return state.map(card => {
                if (card.id === action.id){
                    return Object.assign({}, card, {
                        flip: !card.flip
                    }) 
                }
                else{
                    return card 
                }
            })
        default:
            return state
    }
}

export default cards