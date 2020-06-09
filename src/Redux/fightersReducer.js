/*

const SET_FIGHTERS = "Set-fighters";
const DELETE_ROW = "Delete-row";

let initialState = {
    fighters: [],
};


const fightersReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_FIGHTERS:{
            return { ...state, fighters: action.fighters}
        }
        case DELETE_ROW: {
          return {...state,fighters: state.fighters.filter( fighter => fighter.id !== action.id)}
        }
        default: return state
    }
};

export const setFightersAC = (fighters) =>{
    return {type: SET_FIGHTERS, fighters  }
};

export const deleteRow = (id) => {
    return {type: DELETE_ROW, id}
};

export default fightersReducer;
/!*export const setFightersThunck = async (dispatch) => {
    let response = await FightersAPI.getFighters();
    dispatch(setFightersAC(response))
};*!/


*/
