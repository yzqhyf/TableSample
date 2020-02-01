const FETCH_DATA = "FETCH_DATA";
const DELETE_ROW = "DELETE_ROW";
const FILTER_ACTION = "FILTER_ACTION";
const FETCH_START = "FETCH_START";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAIL = "FETCH_FAIL";

export const getLists = data => {
  console.log(data);
  return {
    type: FETCH_DATA,
    lists: data
  };
};

export const deleteRow = id => {
  return {
    type: DELETE_ROW,
    id: id
  };
};

export const filterByStat = status => {
  return {
    type: FILTER_ACTION,
    status: status
  };
};

export const fetch_start = () => {
  return {
    type: FETCH_START,
    pending: true
  };
};

export const fetch_success = data => {
  return {
    type: FETCH_SUCCESS,
    data: data
  };
};

export const fetch_error = error => {
  return {
    type: FETCH_FAIL,
    error: error
  };
};
