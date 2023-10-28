import { SORT_TABLE_ACTIONS } from "../store"

export const setURL = (payload) => {
  return {
    type: SORT_TABLE_ACTIONS.SET_URL,
    payload,
  }
}

export const setSortType = (payload) => {
  return {
    type: SORT_TABLE_ACTIONS.SET_SORT_TYPE,
    payload,
  }
}

export const setSortOption = (payload) => {
  console.log({ sorrrt: payload })
  return {
    type: SORT_TABLE_ACTIONS.SET_SORT_OPTION,
    payload,
  }
}

export const setColumns = (payload) => {
  return {
    type: SORT_TABLE_ACTIONS.SET_COLUMNS,
    payload,
  }
}

export const setFilteredData = (payload) => {
  return {
    type: SORT_TABLE_ACTIONS.SET_FILTERED_DATA,
    payload,
  }
}

