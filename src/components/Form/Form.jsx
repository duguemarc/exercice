import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './Form.css';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { createDog, createFox } from '../../services/animal';
import { capitalize } from '../../utils/tools';

const Form = ({ setListOfElements }) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('dog');

    const createAnimal = async () => {
        const capitalizedTitle = capitalize(title);

        if (type === 'dog') {
            return await createDog(capitalizedTitle);
        }
        return await createFox(capitalizedTitle);
    };

    return (
        <div className="Form__container">
            <div>
                <TextField
                    id="outlined-basic"
                    label="Nom de l'animal"
                    variant="outlined"
                    size="small"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="Type"
                        onChange={(e) => {
                            setType(e.target.value);
                        }}
                        size="small"
                    >
                        <MenuItem value={'dog'}>Chien</MenuItem>
                        <MenuItem value={'fox'}>Renard</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <Button
                    variant="contained"
                    size="medium"
                    onClick={async () => {
                        if(title!== ''){
                            const animal = await createAnimal();
                            setListOfElements((old) => [...old, animal]);
                        }
                         else {
                            alert('Il faut entrer un nom !')
                        }
                    }}
                >
                    Ajout
                </Button>
            </div> 
            <div>
                <Button 
                    variant="contained"
                    size="medium"
                    color="secondary"
                    onClick={() => {
                        setListOfElements([]);
                    }}
                >
                    Réinitialiser
                </Button>
            </div>
        </div>
    );
};

export default Form;
