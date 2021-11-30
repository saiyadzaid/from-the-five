/** @format */

const initialState = {
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, { type, status, payload }) => {
  const loading = { ...state, loading: true };
  const error = { ...state, loading: false, error: payload };
  let localCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

  switch (type) {
    case 'GET_CART':
      switch (status) {
        case 'loading':
          return loading;
        case 'success':
          return {
            ...state,
            loading: false,
            cart: payload.cart,
          };
        case 'error':
          return error;
      }
      break;
    case 'ADD_TO_CART':
        switch (status) {
          case 'loading':
            return loading;
          case 'success':
          localCart.push(payload.cart);
          localStorage.setItem('cart', JSON.stringify(localCart));
            return {
              ...state,
              loading: false,
              cart: localCart,
            };
          case 'error':
            return error;
        }
        break;

    case 'REMOVE_FROM_CART':
        switch (status) {
          case 'loading':
            return loading;
          case 'success':
            let filteredProducts = localCart.filter(product => product.product !== payload);
            localStorage.setItem('cart', JSON.stringify(filteredProducts));
            return {
              ...state,
              loading: false,
              cart: filteredProducts,
            };
          case 'error':
            return error;
        }
      break;
  
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    default:
      return state;
  }
};
export default cartReducer;
