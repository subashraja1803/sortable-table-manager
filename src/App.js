import './App.css';
import  { React } from 'react';
import _get from 'lodash/get';
// import { store } from './store';
import { connect } from "react-redux";
import SortTable from './Components/SortTable';
import InputBox from './Components/InputBox';
import {getAPIData, mapData, extractColumns } from './services';
import * as sortTableActions from './actions';

function App({
  selected, filteredData, columns, setURL, setColumns, setFilteredData, setSortOption, setSortType,
}) {
  console.log(setSortOption);
  // https://jsonplaceholder.typicode.com/users

  // const selected = useSelector((store) => store.selected);
  // const filteredData = useSelector((store) => store.filteredData);
  // const columns = useSelector((store) => store.columns);
  console.log(selected);
  const handleURLChange = (e) => {
    setURL(e.target.value);
  }

  const handleFetch = (e) => {
    // console.log(selected.url);
    getAPIData(selected.url).then(({ data }) => {
      console.log(data);
      let col = extractColumns(data)
      console.log(col);
      setFilteredData(mapData(col, data));
      setColumns(col);
      console.log(col[0].identifier)
      setSortOption(col[0].identifier);
    });
  }

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.innerText);
  } 
  const handleSortTypeChange = () => {
     if (selected.sortType==="asc") {
       setSortType("desc");
     }
     else if(selected.sortType==="desc") {
      setSortType("asc");
    } 
  } 

  return (
    <div className="App">
      <InputBox 
      handleURLChange = {handleURLChange} 
      handleFetch = {handleFetch}
      />
      <SortTable 
        columns={columns} 
        rows={filteredData} 
        sortOption={selected.sortOption} 
        sortType={selected.sortType} 
        handleSortTypeChange={handleSortTypeChange}
        handleSortOptionChange={handleSortOptionChange}
      />
      <div className="SampleLinks">
        <h3>Sample Links</h3>
        <span>https://jsonplaceholder.typicode.com/posts - 100 posts</span>
        <span>https://jsonplaceholder.typicode.com/comments - 500 comments</span>
        <span>https://jsonplaceholder.typicode.com/albums - 100 albums</span>
        <span>https://jsonplaceholder.typicode.com/todos - 200 todos</span>
        <span>https://jsonplaceholder.typicode.com/users - 10 posts</span>
      </div>
    </div>
  );
}

const mapStateToProps = ({ sortTableStore }) => ({
  selected: _get(sortTableStore, 'selected'),
  filteredData: _get(sortTableStore, 'filteredData'),
  columns: _get(sortTableStore, 'columns'),
});

const mapDispatchToProps = (dispatch) => ({
  setURL: payload => dispatch(sortTableActions.setURL(payload)),
  setFilteredData: payload => dispatch(sortTableActions.setFilteredData(payload)),
  setColumns: payload => dispatch(sortTableActions.setColumns(payload)),
  setSortOption: payload =>  dispatch(sortTableActions.setSortOption(payload)),
  setSortType: payload => dispatch(sortTableActions.setSortType(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
