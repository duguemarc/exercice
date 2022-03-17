import { TableCell, TableRow } from '@mui/material';
import './Card.css';

const OneCard = ({ title, type, imageURL }) => {
    const capitalize = (text) =>
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
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
