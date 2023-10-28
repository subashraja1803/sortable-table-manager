import React from "react";

export default function SortOptions(props) {
  const { columns, handleChange } = props;
  
  return(
    <select name = "sortOptions" id = "sortOptions" onChange={handleChange}>
      {
        columns.map((data, index)=>{
          return (
            <option key = { index } value = {data.identifier}>{data.headerName}</option>
          )
        })
      }
    </select>
  )
}