import React from 'react';
import './Footer.css';
import { TextField, Button, FormControlLabel, RadioGroup } from '@material-ui/core';


import Radio from '@material-ui/core/Radio';

import Checkbox from '@material-ui/core/Checkbox';

import BottomNavigation from '../BottomNavigation/BottomNavigation';


const Footer = () => {
    return (
        
        <div className="footer">
            <BottomNavigation />
            <form>
                <TextField label="Etunimi" variant="outlined" fullWidth margin="dense"></TextField>
                <TextField label="Sukunimi" variant="outlined" fullWidth margin="dense"></TextField>
                <TextField label="Puhelin" type="phone" variant="outlined" fullWidth margin="dense"></TextField>
                <TextField label="Sähköposti" type="email" variant="outlined" fullWidth margin="dense"></TextField>
                

                <RadioGroup arial-label="gender" name="gender1">
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>

               
                <RadioGroup arial-label="valita" name="valinta">
                    <FormControlLabel value="omakotitalo" control={<Checkbox />} label="Omakotitalo" />
                    <FormControlLabel value="rivitalo" control={<Checkbox />} label="Rivitalo" />
                    <FormControlLabel value="kerrostalo" control={<Checkbox />} label="Kerrostalo" />
                </RadioGroup>
       

                <Button label="primary" variant="outlined" margin="dense">Lähetä</Button>
            </form>
        </div>
    );
}

export default Footer;