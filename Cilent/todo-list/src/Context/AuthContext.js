import { createContext, useEffect, useReducer } from "react"

const initial = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null
}

export const AuthSearch = createContext(initial);

const Authreducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null
            }
        case "LOGIN_FAILED":
            return {
                user: null,
                loading: false,
                error: action.payload,
            }
        case "LOGOUOT":
            return {
                user: null,
                loading: false,
                error: null,
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Authreducer, initial);

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])


    return (
        <AuthSearch.Provider value={{
            user: state.user,
            loading: state.loading,
            error: state.error,
            dispatch,
        }}
        >{children}</AuthSearch.Provider>
    )

}