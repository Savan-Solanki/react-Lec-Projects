const initialValue = {
    item:[]
}

export const reducer = (state = initialValue,action) => {
    switch (action.type) {
        case "addData" :
            return{item: [...state.item,action.payload]}
        default:
            return state;    
    }
}