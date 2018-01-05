let nextID = 0

export const addCard = (text, translate) => {
    return {
        type: 'ADD_CARD',
        id: nextID++,
        text,
        translate
    }
}

export const flipCard = (id) => {
    return {
        type: 'FLIP_CARD',
        id
    }
}