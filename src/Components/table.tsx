import React from 'react';

interface TableData {
    heading: string;
    description: string;
}

export interface TableDataProps {
    tableData: TableData[]
}

const Table: React.FC<TableDataProps> = ({ tableData }) => {

  return (
    <div>
      <table className="table">
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="cell">
                <h3>{row.heading}</h3>
              </td>
              <td className="cell right-cell">
                <p>{row.description}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
