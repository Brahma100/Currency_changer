import { actionTypes } from "../actions";

const initialState = {
  products:[],
  currency:'INR'
}

const getDataReducer = (state=initialState, action) => {
  let data=action.payload
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return {...state,products: data};
    case actionTypes.MODIFY_CURR:
      return {...state,currency:data};
    default:
      return initialState;
  }
};

export default getDataReducer;
