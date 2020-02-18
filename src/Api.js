import mockRequests from "./requests.json";
import axios from "axios";
import {
  getLists,
  fetch_start,
  fetch_success,
  fetch_fail
} from "./action/action";

export const getRequestsSync = () => mockRequests;

// export const getRequests = () => {
//   return async dispatch => {
//     let response = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(mockRequests);
//       }, 1000);
//     });
//     dispatch(getLists(response));
//   };
// };

export const getRequests= () => {
  return async dispatch=> {
    let response = await new Promise((resolve, reject)=> {
      setTimeout(()=> {
        resolve(mockRequests);
      }, 1000);
    });
    dispatch(getLists(response));
  }
}

export const getGithubInfo = () => {
  return async dispatch => {
    try {
      dispatch(fetch_start());
      let response = await axios.get("https://api.github.com/users/yzqhyf");
      dispatch(fetch_success(response.data));
    } catch (error) {
      dispatch(fetch_fail(error));
    }
  };
};
