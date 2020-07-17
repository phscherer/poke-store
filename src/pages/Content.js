import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';

import PokemonCard from '../components/PokemonCard';
import PokemonEdit from '../components/PokemonEdit';
import PokemonDetails from '../components/PokemonDetails';
import Loading from '../components/Loading';
import { GET_POKEMONS } from '../utils/queries';
import actions from '../actions/index';

const Content = () => {
  const dispatch = useDispatch();
  const { data } = useQuery(GET_POKEMONS, {
    variables: { first: 50 },
  });
  const pokemons = useSelector((state) => state.dataReducer);
  const { openEdit } = useSelector((state) => state.modalReducer);
  const { openDetails } = useSelector((state) => state.detailReducer);

  useEffect(() => {
    if (data) dispatch(actions.dataAction.setData(data.pokemons));
  }, [data, dispatch]);

  const handleCloseModal = () => {
    dispatch(actions.modalAction.setCloseEdit());
  }

  const handleCloseDetails = () => {
    dispatch(actions.detailAction.setClose());
  }

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="flex-start"
      justify="flex-start"
      style={{ minHeight: '100vh' }}
    >
      <PokemonEdit open={openEdit} handleClose={handleCloseModal} />
      <PokemonDetails open={openDetails} handleClose={handleCloseDetails} />
      {
        pokemons.length === 0 && <Loading />
      }
      {
        pokemons.data &&
        pokemons.data.map((pokemon) => (
          <Grid item xs={12} sm={6} md={3} key={uuidv4()}>
            <PokemonCard
              image={pokemon.image}
              name={pokemon.name}
              classification={pokemon.classification}
              types={pokemon.types}
              attacks={pokemon.attacks}
            />
          </Grid>
        ))
      }
    </Grid>
  );
}

export default Content;