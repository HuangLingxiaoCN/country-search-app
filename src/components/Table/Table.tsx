import React, { ReactElement } from 'react'

import TableTr from './TableTr'
import styles from './Table.module.css'

function Table(props: any) {
  return (
    <div className={styles.divContainer}>
      <table>
        <thead>
          <tr>
            {props.tableHeader.map((header: ReactElement) => (
              <th key={Math.random()}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((data: any) => {
            return (
              <TableTr
                flag={data.flag}
                language={data.language}
                name={data.name}
                population={data.population}
                region={data.region}
                key={Math.random()}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
