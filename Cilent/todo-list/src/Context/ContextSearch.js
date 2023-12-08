import { createContext, useReducer } from "react"

const initial = {
    city:undefined,
    dates:[],
    option:{
        adult:undefined,
        Children:undefined,
        room:undefined,
    }
}

export const ContextSearch = createContext(initial);

const searchreducer = (state,action) =>{
    switch(action.type)
    {
        case "NEW_SEARCH":
            return action.payload
        case "RESET_SEARCH":
            return initial
        default:
            return state;
    }
}

export const SearchContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(searchreducer,initial);

    return(
        <ContextSearch.Provider value={{
            city: state.city,
            dates: state.dates,
            option:state.option,
            dispatch,
        } }
        >{children}</ContextSearch.Provider>
    )

}