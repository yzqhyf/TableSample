import mockRequests from "./requests.json";
import { getLists } from "./action";

export const getRequestsSync = () => mockRequests;

export const getRequests = () => {
  return async dispatch => {
    let response = await new Promise((resolve, reject) => {
      setTimeout(() => resolve(mockRequests), 500);
    });
    dispatch(getLists(response));
  };
};
