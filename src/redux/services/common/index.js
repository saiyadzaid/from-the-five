import axiosInstance from "../../../config/httpHandler";

export const getRecords = (path, ACTION) => {
  return async (dispatch) => {
    dispatch(ACTION("loading"));
    const response = await axiosInstance.get(path);
    dispatch(ACTION("success", response.data));
    try {
    } catch (error) {
        console.log("error = ", error);
      dispatch(ACTION("error", error));
    }
  };
};
