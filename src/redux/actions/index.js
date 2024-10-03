export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const SET_CART_ITEMS = "SET_CART_ITEMS";

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const setCartItems = (items) => ({
  type: SET_CART_ITEMS,
  payload: items,
});
