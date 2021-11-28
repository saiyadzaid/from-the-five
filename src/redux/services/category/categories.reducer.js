/** @format */

const initialState = {
  categories: [],
  category: null,
  loading: false,
  error: null,
};

const categoriesReducer = (state = initialState, { type, status, payload }) => {
  const loading = { ...state, loading: true };
  const error = { ...state, loading: false, error: payload };

  switch (type) {
    case 'GET_CATEGORIES':
      switch (status) {
        case 'loading':
          return loading;
        case 'success':
          return {
            ...state,
            loading: false,
            categories: payload.categories,
          };
        case 'error':
          return error;
      }
      break;
    case 'GET_CATEGORY':
      switch (status) {
        case 'loading':
          return loading;
        case 'success':
          return {
            ...state,
            loading: false,
            category: payload.category,
          };
        case 'error':
          return error;
      }
      break;
    case 'CLEAR_CATEGORY':
      return { ...state, category: null };
    default:
      return state;
  }
};
export default categoriesReducer;
