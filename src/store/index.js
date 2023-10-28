// import { createStore }  from 'redux';
// import { reducer } from "../reducers";
import { handleActions } from 'redux-actions';
// import { devToolsEnhancer } from "redux-devtools-extension";
import produce from 'immer';

const initialState = {
  selected: {
    url: "",
    sortOption: "",
    sortType: "asc",
  },
  columns:[],
  filteredData:[],
}

export const SORT_TABLE_ACTIONS = {
  SET_URL: 'SORT_TABLE_SET_URL',
  SET_SORT_OPTION: 'SORT _TABLE_SET_SORT_OPTION',
  SET_SORT_TYPE: 'SORT_TABLE_SET_SORT_TYPE',
  SET_COLUMNS: 'SORT_TABLE_SET_COLUMNS',
  SET_FILTERED_DATA: 'SORT_TABLE_SET_FILTERED_DATA',
}

export default handleActions({
 [SORT_TABLE_ACTIONS.SET_URL]: (state, { payload }) => ({
  ...state,
  selected: { ...state.selected, url: payload },
 }),
 [SORT_TABLE_ACTIONS.SET_SORT_OPTION]: (state, { payload }) => ({
  ...state,
  selected: { ...state.selected, sortOption: payload },
 }),
 [SORT_TABLE_ACTIONS.SET_SORT_TYPE]: (state, { payload }) => ({
  ...state,
  selected: { ...state.selected, sortType: payload },
 }),
 [SORT_TABLE_ACTIONS.SET_COLUMNS]: (state, { payload }) => ({
  ...state, columns: payload,
 }),
 [SORT_TABLE_ACTIONS.SET_FILTERED_DATA]: (state, { payload }) => ({
  ...state, filteredData: payload,
 }),
}, initialState)

// export const store = createStore(reducer, initialState, devToolsEnhancer());