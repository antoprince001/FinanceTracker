import * as IT from "./incomeTypes";

const initialState = {
  income: "",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IT.SAVE_INCOME_REQUEST:
    case IT.FETCH_INCOME_REQUEST:
    case IT.UPDATE_INCOME_REQUEST:
    case IT.DELETE_INCOME_REQUEST:
      return {
        ...state,
      };
    case IT.INCOME_SUCCESS:
      return {
        income: action.payload,
        error: "",
      };
    case IT.INCOME_FAILURE:
      return {
        income: "",
        error: action.payload,
      };
   
    default:
      return state;
  }
};

export default reducer;
