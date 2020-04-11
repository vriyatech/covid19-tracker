import React from 'react'
import { useTable, useExpanded, useSortBy, useFilters, usePagination } from 'react-table'

function textFilter(rows, ids, filterValue) {
    return rows.filter((r) =>
        ids.some((id) => {
            const value = r.values[id]
            return String(value).toLowerCase().includes(String(filterValue).toLowerCase())
        })
    )
}

// flatten filter so that the filter can match subrows
// reference: https://github.com/uqix/reactkit-table/blob/master/src/filter/flatten.js
function flatten(filter) {
    return function(rows, ids, filterValue) {
        const flatRows = treeToFlat(rows).map((r) => ({
            ...r,
            // or useFilters would recursively filter subRows
            subRows: [],
            depth: 0,
            xFlat: true
        }))
        return filter(flatRows, ids, filterValue)
    }
}

function treeToFlat(rows) {
    return [ ...rows, ...rows.map((r) => treeToFlat(r.subRows || [])).reduce((pre, cur) => [ ...pre, ...cur ], []) ]
}

const RegionFilter = (placeholderText) => ({ column: { filterValue, preFilteredRows, setFilter } }) => {
    return (
        <input
            className="data-table-input"
            value={filterValue || ''}
            onChange={(e) => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            placeholder={placeholderText}
        />
    )
}

export default function RawTable(props) {
    const { columns, data, initialState, onRowClick, filterPlaceholder } = props

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, 
        page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }, } = useTable(
        {
            columns,
            data,
            defaultColumn: { Filter: RegionFilter(filterPlaceholder), filter: flatten(textFilter) },
            initialState: { pageIndex: 0 },
            getResetExpandedDeps: false
        },
        useFilters,
        useSortBy,
        useExpanded,
        usePagination
    )

    return (
        <>

        <div className="data-table-wrap">
            {headerGroups[0].headers[1].render('Filter')}
            <table className="data-table" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup, i) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column, j) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr id={`table-${row.original.region}`} {...row.getRowProps()}>
                                {row.cells.map((cell, cellIdx) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            onClick={cellIdx > 0 ? () => onRowClick(row) : null}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        {/* <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> */}
      </div>
            <div style={{ display: 'none' }}>{rows.length} regions</div>
        </div>
        </>
    )
}
