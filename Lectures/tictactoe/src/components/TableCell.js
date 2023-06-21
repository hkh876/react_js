import { memo } from 'react';
import '../styles/TableCell.css';

const TableCell = memo(({rowIndex, cellIndex, cellData, cellOnClick}) => {
    return (
        <td className="table-cell" onClick={(e) => cellOnClick(e, rowIndex, cellIndex)}>{cellData}</td>
    );
});

export default TableCell;