import React from "react"
import { useTable, usePagination } from "react-table"
import { Input, CustomInput } from "reactstrap"

import { SideBar }  from '../components'
import Links from '../components/Links'


import styled from 'styled-components'
const Wrapper = styled.div`
    padding: 0 40px 40px 40px; 
    fixed: left;
`

const TableContainer = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    prepareRow,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable({
    columns,
    data,
  },
  usePagination
  )

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };

  const onChangeInInput = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };

  return (
<Wrapper>
  <div className="ui raised centered segment">
    <table className="ui selectable table" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td className="collapsing" {...cell.getCellProps()}>{cell.render("Cell")}</td>
              })}
            </tr>
          )
        })}
      </tbody>
      <tfoot>
        {footerGroups.map(group => (
          <tr {...group.getFooterGroupProps()}>
            {group.headers.map(column => (
              <td {...column.getFooterProps()}>{column.render("Footer")}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
    <div className="row" style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
    <div className="column">
      Page{" "}
      <strong>
        {pageIndex + 1} of {pageOptions.length}
      </strong>
    </div>

      <button className="ui button"
        color="primary"
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        <i class="angle double left icon"></i>
      </button>
      <button className="ui button"
        color="primary"
        onClick={previousPage}
        disabled={!canPreviousPage}
      >
        <i class="angle left icon"></i>
      </button>

    
      <button className="ui button" color="primary" onClick={nextPage} disabled={!canNextPage}>
      <i class="angle right icon"></i>
      </button>
      <button className="ui button" 
        color="primary"
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}>
        <i class="angle double right icon"></i>
      </button>
   
<div className="column">
      <Input
        type="number"
        min={1}
        style={{ width: 50 }}
        max={pageOptions.length}
        defaultValue={pageIndex + 1}
        onChange={onChangeInInput}
        className="ui input"
      />
      <CustomInput className="ui input" type="select" value={pageSize} onChange={onChangeInSelect}>
        
        {[5, 10, 15, 20, 40].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </CustomInput>
      </div>
    </div>
    </div>
</Wrapper>
  )
}

export default TableContainer