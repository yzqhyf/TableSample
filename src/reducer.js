const FETCH_DATA = "FETCH_DATA";
const DELETE_ROW = "DELETE_ROW";
const FILTER_ACTION = "FILTER_ACTION";

const initialState = {
  lists: [],
  filter: "SHOW_ALL"
};

export const fetchTableList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        lists: action.lists
      };
    }
    case DELETE_ROW: {
      // console.log(state);
      const lists = state.lists.filter(list => list.id !== action.id);
      return {
        ...state,
        lists: [...lists]
      };
    }
    default: {
      return state;
    }
  }
};

export const dropdownFilter = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ACTION: {
      return {
        ...state,
        filter: action.status
      };
    }
    default: {
      return state;
    }
  }
};
