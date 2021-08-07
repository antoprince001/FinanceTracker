import * as IT from "./incomeTypes";
import axios from "axios";

export const saveIncome = (Income) => {
  return (dispatch) => {
    dispatch({
      type: IT.SAVE_INCOME_REQUEST,
    });
    axios
      .post("http://localhost:5000/api/income", Income)
      .then((response) => {
        console.log(response);
        dispatch(incomeSuccess(response.data));
      })
      .catch((error) => {
        console.log('error'+error);
        dispatch(incomeFailure(error));
      });
  };
};

export const fetchIncome =  (month,year) => {
  return (dispatch) => {
    dispatch({
      type: IT.FETCH_INCOME_REQUEST,
    });
    axios
      .get("http://localhost:5000/api/incomebydate?month="+month+"&year=" + year )
      .then((response) => {
        console.log(response.data);
        dispatch(incomeSuccess(response.data));
      })
      .catch((error) => {
        console.log('err'+error);
        dispatch(incomeFailure(error));
      });
  };
};

// export const updateBook = (book) => {
//   return (dispatch) => {
//     dispatch({
//       type: BT.UPDATE_BOOK_REQUEST,
//     });
//     axios
//       .put("http://localhost:8081/rest/books", book)
//       .then((response) => {
//         dispatch(bookSuccess(response.data));
//       })
//       .catch((error) => {
//         dispatch(bookFailure(error));
//       });
//   };
// };

// export const deleteBook = (bookId) => {
//   return (dispatch) => {
//     dispatch({
//       type: BT.DELETE_BOOK_REQUEST,
//     });
//     axios
//       .delete("http://localhost:8081/rest/books/" + bookId)
//       .then((response) => {
//         dispatch(bookSuccess(response.data));
//       })
//       .catch((error) => {
//         dispatch(bookFailure(error));
//       });
//   };
// };

const incomeSuccess = (income) => {
  return {
    type: IT.INCOME_SUCCESS,
    payload: income,
  };
};

const incomeFailure = (error) => {
  return {
    type: IT.INCOME_FAILURE,
    payload: error,
  };
};