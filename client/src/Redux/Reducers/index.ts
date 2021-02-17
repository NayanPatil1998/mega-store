import userEvent from "@testing-library/user-event";

interface IinitialState {
    user: any,
    cart: []
}

const initialState : IinitialState = {
    user: null,
    cart : []
}

const reducer = (state: IinitialState = initialState, action : any) : IinitialState => {
    return state
}



export default reducer;
