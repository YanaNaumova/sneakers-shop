import { ADD_PRODUCT, DELETE_PRODUCT, SET_CART_ITEMS } from "../actions";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    case SET_CART_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;
