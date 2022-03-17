import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import OneCard from '../Card/Card';

const CardContainer = ({ listOfElements }) => {
    const capitalize = (text) =>
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    return (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>{capitalize('nom')}</TableCell>
                    <TableCell>{capitalize('type')}</TableCell>
                    <TableCell>{capitalize('image')}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {listOfElements.map((card, index) => (
                    <OneCard
                        type={card.type}
                        title={card.title}
                        imageURL={card.url}
                        key={index}
                    />
                ))}
            </TableBody>
        </Table>
    );
};

export default CardContainer;
