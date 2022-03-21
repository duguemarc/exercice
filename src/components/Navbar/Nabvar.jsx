import './Navbar.css';
import Switch from '@mui/material/Switch';
import darkTheme from '../../assets/darkTheme.png';
import lightTheme from '../../assets/lightTheme.png';
import ThemeContext from '../../contexts/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { capitalize } from '../../utils/tools';

const Navbar = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const {theme, setTheme } = useContext(ThemeContext);

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    return (
        <div className={theme==='light' ? "navbar__container" : "navbar__container_dark"}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {capitalize('animalerie')}
                </Typography>
                <div className="navbar__switch">
                    <img src={lightTheme} />
                    <Switch
                        {...label}
                        onChange={handleChange}
                        checked={isChecked}
                        color="secondary"
                    />
                    <img src={darkTheme} />
                </div>
            </Toolbar>
        </AppBar>
        </div>
    );
};

export default Navbar;
