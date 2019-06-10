import React from 'react'
import ReactTable from 'react-table'
import './CardSearchResults.css'
import 'react-table/react-table.css'

const CardSearchResults = ({ results, handleClick }) => (
  <div>
    <ReactTable
      data={results}
      columns={[
        {
          Header: 'Rarity',
          accessor: 'rarity',
          maxWidth: 90
        },
        {
          Header: 'Name',
          accessor: 'name',
          Cell: data => (
            <span className={data.row.rarity.toLowerCase()}>
              {data.row.name}
            </span>
          )
        },
        {
          Header: 'Type',
          accessor: 'type',
          maxWidth: 70
        },
        {
          Header: 'Class',
          accessor: 'cardClass',
          maxWidth: 80
        },
        {
          Header: 'Mana',
          accessor: 'cost',
          maxWidth: 45
        },
        {
          Header: 'Attack',
          accessor: 'attack',
          maxWidth: 55
        },
        {
          Header: 'Health',
          accessor: 'health',
          maxWidth: 55
        },
        {
          Header: 'Set',
          accessor: 'set',
          maxWidth: 90
        }
      ]}
      defaultSorted={[
        {
          id: 'name'
        }
      ]}
      className="CardSearchResults -highlight"
      defaultPageSize={10}
      showPagination={true}
      getTdProps={(state, rowInfo, column, instance) => {
        return {
          onClick: (e, handleOriginal) => {
            if (handleOriginal) {
              handleOriginal()
            }

            handleClick(rowInfo.original)
          }
        }
      }}
    />
  </div>
)

export default CardSearchResults
