import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { sortbyKey } from "../services";


const SortTable = ( props ) => {
  const { columns, rows, sortOption, sortType, handleSortTypeChange, handleSortOptionChange } = props;

  const sortedRows = sortbyKey(rows, sortOption, sortType);


  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  return (
    <div className="SortTable">
      `<TableContainer component={Paper}>
        <Table className="UsersTable" stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => {
                return (
                  <TableCell key = { index }>
                    <div className="tableHeader">
                      <span className="TableHeaderText" onClick={handleSortOptionChange}>{ column.headerName }</span>
                      {
                      column.identifier === sortOption 
                      ? (sortType === "asc" 
                        ? <ArrowUpwardIcon onClick={handleSortTypeChange}/> 
                        :  <ArrowDownwardIcon onClick={handleSortTypeChange}/>) 
                      : <></> 
                      }
                    </div>
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map((row, row_index) => {
              return (
                <StyledTableRow key = { row_index }>
                  {
                    columns.map((column , column_index) => {
                      return (
                        <TableCell key = { column_index }>
                          { row[column.identifier] }
                        </TableCell>
                      )
                    })
                  }
                </StyledTableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>`
    </div>
  )
}

export default SortTable;