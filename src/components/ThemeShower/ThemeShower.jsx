import { Typography } from '@mui/material';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

export const ThemeShower = () => {
    const capitalize = (text) =>
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

    const { themes } = useContext(ThemeContext);

    return (
        <Typography>
            {capitalize('thème Utilisé')} : {themes || 'Thème non défini'}
        </Typography>
    );
};
