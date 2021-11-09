const initialState = {
  colors: [],
  color: null,
  loading: false,
  error: null,
};

const colorsReducer = (state = initialState, { type, status, payload }) => {
  const loading = { ...state, loading: true };
  const error = { ...state, loading: false, error: payload };

  switch (type) {
    case "GET_COLORS":
      switch (status) {
        case "loading":
          return loading;
        case "success":
          return {
            ...state,
            loading: false,
            colors: payload.colors,
          };
        case "error":
          return error;
      }
      break;
    case "GET_COLOR":
      switch (status) {
        case "loading":
          return loading;
        case "success":
          return {
            ...state,
            loading: false,
            color: payload.color,
          };
        case "error":
          return error;
      }
      break;
    case "CLEAR_COLOR":
      return { ...state, color: null };
    default:
      return state;
  }
};
export default colorsReducer;
