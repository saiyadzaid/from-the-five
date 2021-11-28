/** @format */
import TestIMG from "../../../assets/Images/test1.jpg";
const product = {
  name: "Test 1",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  washcareDescription:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  price: 1200,
  category: "612e4ceb87ad6849446dc911",
  productItems: [
    {
      color: "612e4ceb87ad6849446dc911",
      qty: 5,
      images: [
        {
          uid: 1,
          name: "file1",
          url: TestIMG,
        },
        {
          uid: 2,
          name: "file1",
          url: TestIMG,
        },
        {
          uid: 3,
          name: "file1",
          url: TestIMG,
        },
        {
          uid: 4,
          name: "file1",
          url: TestIMG,
        },
      ],
    },
  ],
  size: ["XL", "S", "XS"],
  isActive: true,
};
const initialFilterState = {
  category: null,
  size: [],
};
const initialState = {
  products: [],
  product: null,
  filters: initialFilterState,
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, { type, status, payload }) => {
  const loading = { ...state, loading: true };
  const error = { ...state, loading: false, error: payload };

  switch (type) {
    case "GET_PRODUCTS":
      switch (status) {
        case "loading":
          return loading;
        case "success":
          return {
            ...state,
            loading: false,
            products: payload.products,
          };
        case "error":
          return error;
      }
      break;
    case "GET_PRODUCT":
      switch (status) {
        case "loading":
          return loading;
        case "success":
          return {
            ...state,
            loading: false,
            product: payload.product,
          };
        case "error":
          return error;
      }
      break;
    case "SET_FILTERS":
      switch (status) {
        case "loading":
          return loading;
        case "success":
          return {
            ...state,
            loading: false,
            filters: {
              category: payload.filter.category,
            },
          };
        case "error":
          return error;
      }
      break;
    case "CLEAR_PRODUCT":
      return { ...state, product: null };
    default:
      return state;
  }
};
export default productsReducer;
