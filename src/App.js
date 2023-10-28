import './App.css';
import  { React } from 'react';
import _get from 'lodash/get';
import { connect } from "react-redux";
import SortTable from './Components/SortTable';
import InputBox from './Components/InputBox';
import {getAPIData, mapData, extractColumns } from './services';
import * as sortTableActions from './actions';

function App({
  selected, filteredData, columns, setURL, setColumns, setFilteredData, setSortOption, setSortType,
}) {
  const handleURLChange = (e) => {
    setURL(e.target.value);
  }

  const handleFetch = (e) => {
    getAPIData(selected.url).then(({ data }) => {
      let col = extractColumns(data)
      setFilteredData(mapData(col, data));
      setColumns(col);
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
      <div className="Title">
        <h2>Sortable Table Manager</h2>
        <p>A fundamental, yet highly functional, sortable table component using ReactJS. This dynamic table retrieves data from an API source and presents both string and numeric information in a structured, 2-dimensional table format. Additionally, it empowers users to intuitively sort the data, enhancing usability and data organization.</p>
        <p>Click on the column header to sort using column and click on the arrows to change the sort order.</p>
      </div>
      <InputBox 
        handleURLChange={handleURLChange} 
        handleFetch={handleFetch}
      />
      {columns.length !== 0 && (
        <SortTable 
          columns={columns} 
          rows={filteredData}
          sortOption={selected.sortOption} 
          sortType={selected.sortType} 
          handleSortTypeChange={handleSortTypeChange}
          handleSortOptionChange={handleSortOptionChange}
        />)
      }
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
