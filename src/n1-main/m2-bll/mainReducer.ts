const initState = {

}

const GET_MAIN = 'GET_MAIN';

export type MainType = ReturnType<typeof getMainAC>

export const mainReducer = (state = initState, action: MainType): typeof initState => {
    switch (action.type) {
        case GET_MAIN: {
            return {...state}
        }
        default:
            return state
    }
}

export const getMainAC = () => ({type: GET_MAIN} as const)