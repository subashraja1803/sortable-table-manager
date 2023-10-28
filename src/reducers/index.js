export function reducer(state, action) {
  switch (action.type) {
    case "SET_URL":
      return {
        ...state,
        selected: {
          ...state.selected,
          url: action.payload,
        },
      };

    case "SET_SORT_OPTION":
      return {
        ...state,
        selected: {
          ...state.selected,
          sortOption: action.payload,
        },
      };

    case "SET_SORT_TYPE":
      return {
        ...state,
        selected: {
          ...state.selected,
          sortType: action.payload,
        },
      };

    case "SET_COLUMNS":
      return {
        ...state,
        columns: action.payload,
      };

    case "SET_FILTERED_DATA":
      return {
        ...state,
        filteredData: action.payload,
      };
    default:
      return state;
  }
}