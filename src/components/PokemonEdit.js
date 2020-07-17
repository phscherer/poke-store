import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import { TextField, Grid } from "@material-ui/core";
import actions from '../actions/index';

const PokemonEdit = ({ open = false, handleClose }) => {
  const dispatch = useDispatch();
  const { single } = useSelector((state) => state.dataReducer);
  const pokemons = useSelector((state) => state.dataReducer);

  const [name, setName] = useState(single ? single.name : "");
  const [classification, setClassification] = useState(
    single ? single.classification : ""
  );

  const handleSubmit = () => {
    const newPokemon = pokemons.data.map((newPoke) => {
      if (newPoke.name === single.name) {
        newPoke.name = name;
        newPoke.classification = classification;
      }

      return { ...newPoke, newPoke };
    });

    dispatch(actions.dataAction.setData(newPokemon));
    dispatch(actions.modalAction.setCloseEdit());
  };

  useEffect(() => {
    setName(single ? single.name : '');
    setClassification(single ? single.classification : '');
  }, [single]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {`Atualizar pokémon ${single ? single.name : ""}`}
      </DialogTitle>
      <DialogContent>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              id="name"
              label="Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item>
            <TextField
              id="classification"
              label="Classificação"
              onChange={(e) => setClassification(e.target.value)}
              value={classification}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button
          autoFocus
          color="secondary"
          onClick={handleClose}
          variant="contained"
          size="small"
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          autoFocus
          onClick={() => handleSubmit()}
        >
          <SaveIcon />
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PokemonEdit;