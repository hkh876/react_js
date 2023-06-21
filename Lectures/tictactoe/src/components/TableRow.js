import { memo } from 'react';
import TableCell from "./TableCell";

const TableRow = memo(({rowIndex, rowData, cellOnClick}) => {
    return (
        <tr>
            {rowData.map((value, index) => {
                return <TableCell key={index} rowIndex={rowIndex} cellData={value} cellIndex={index} cellOnClick={cellOnClick}/>
            })}
        </tr>
    );
});

export default TableRow;