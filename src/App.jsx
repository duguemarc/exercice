import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getFirstItems } from '../consts';
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Nabvar';
import { ThemeShower } from './components/ThemeShower/ThemeShower';
import ThemeContext from './contexts/ThemeContext';

function App() {
    const [theme, setTheme] = useState('light');

    const contextTheme = {
        theme: theme,
        setTheme: setTheme,
    };

    const [listOfElements, setListOfElements] = useState([]);

    useEffect(() => {
        getFirstItems().then((firstItems) => {
            setListOfElements(firstItems);
        });
    }, []);

    const getNbOfAnimals = (type) => {
        try {
            return listOfElements.fiter((element) => element.type === type)
                .length;
        } catch (e) {
            console.error(e);
            return 0;
        }
    };

    return (
        <ThemeContext.Provider value={contextTheme}>
            <div className={`app ${theme}`}>
                <Navbar />
                <main>
                    <ThemeShower />
                    <Form setListOfElements={setListOfElements} />
                    <div>
                        <Typography variant="h4">Statistiques: </Typography>
                        <Typography>
                            Nombre de chien : {getNbOfAnimals('dog')}
                        </Typography>
                        <Typography>
                            Nombre de renard : {getNbOfAnimals('fox')}
                        </Typography>
                    </div>
                    <CardContainer listOfElements={listOfElements} />
                </main>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
