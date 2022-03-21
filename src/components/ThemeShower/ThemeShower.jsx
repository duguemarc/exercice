import { Typography } from '@mui/material';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import { capitalize } from '../../utils/tools';

export const ThemeShower = () => {
    const { theme } =  useContext(ThemeContext);

    return (
        <Typography>
            {capitalize('thème Utilisé')} : {theme || 'Thème non défini'}
        </Typography>
    );
};
