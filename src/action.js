const FETCH_DATA = "FETCH_DATA";
const DELETE_ROW = "DELETE_ROW";
const FILTER_ACTION = "FILTER_ACTION";

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
