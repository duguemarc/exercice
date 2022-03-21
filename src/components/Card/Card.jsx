import { TableCell, TableRow } from '@mui/material';
import { capitalize } from '../../utils/tools';
import './Card.css';

const OneCard = ({ title, type, imageURL }) => {

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{title}</TableCell>
            <TableCell>{capitalize(type)}</TableCell>
            <TableCell>
                <div className="OneCard__imageContainer">
                    <img src={imageURL} />
                </div>
            </TableCell>
        </TableRow>
    );
};

export default OneCard;
