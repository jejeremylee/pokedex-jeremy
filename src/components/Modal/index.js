import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [nickName, setNickName] = useState("");
  const {pokemonName, buttonImg, pokemon, pokemonImg} = props;

  const handleClickOpen = () => {
    const probs = probabilityCatch()
    if(probs ===  "yes"){
        setOpen(true);
    }
    else{ 
        alert('Oh no the pokemon has sucessfully escaped!');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const probabilityCatch = () => { 
    const prob = ["yes", "no"];
    const random = Math.floor(Math.random() * prob.length);
    return prob[random]
}

  const handleSubmit = (pokemon,pokemonImg, nickName) =>{
    if(nickName.length === 0){
        alert('Please give your pokemon a nickname!');
    }
    else{
        const pokemonsInStorage = JSON.parse(localStorage.getItem("myPokemons"));
        if(pokemonsInStorage.length !== 0){
            let nicknameChecker = pokemonsInStorage.filter((pokemon) => pokemon[1].toLowerCase() === nickName.toLowerCase());
            if(nicknameChecker.length !== 0){
                alert('Nickname already used by other pokemon, please give another nickname!');
            }
            else{
                const pokemonData = [pokemon, nickName, pokemonImg];
                let pokemonInStorage = JSON.parse(localStorage.getItem("myPokemons"));
            
                let appendPayload = [...pokemonInStorage, pokemonData];
                localStorage.setItem('myPokemons', JSON.stringify(appendPayload));
                handleClose();
            }
        }
        else{
            const pokemonData = [pokemon, nickName, pokemonImg];
            let pokemonInStorage = JSON.parse(localStorage.getItem("myPokemons"));
        
            let appendPayload = [...pokemonInStorage, pokemonData];
            localStorage.setItem('myPokemons', JSON.stringify(appendPayload));
            handleClose();
        }
    }
  }

  return (
    <div>
        <button className="catch-button" onClick={handleClickOpen}> 
            <img src={buttonImg} alt="catch" className="pokeball-catch-button"/>
            Catch!
        </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">You successfully caught a {props.pokemonName}!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Give your {pokemonName} a nickname:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="nickname"
            onChange={(event) => {setNickName(event.target.value)}} 
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>handleSubmit(pokemon, pokemonImg, nickName)} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}