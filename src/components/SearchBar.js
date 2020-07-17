import React, { useState, useEffect } from 'react';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import useDebounce from '../utils/useDebounce';
import { GET_POKEMON, GET_POKEMONS } from '../utils/queries';
import actions from '../actions/index';

const SearchBar = () => {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 600);
  const dispatch = useDispatch();
  const { data } = useQuery(GET_POKEMONS, {
    variables: { first: 50 },
  });

  const [handleSearch] = useLazyQuery(GET_POKEMON, {
    onCompleted: (api) => {
      if (api.pokemon === null) {
        dispatch(actions.dataAction.setNotFound("Pokémon não foi encontrado!"));
      } else {
        dispatch(actions.dataAction.setData([api.pokemon]));
      }
    },
  });

  const handleClean = () => {
    if (data) dispatch(actions.dataAction.setData(data.pokemons));
  }

  useEffect(() => {
    if (debouncedText === '') {
      handleClean();
    } else {
      handleSearch({
        variables: { name: debouncedText },
      });
    }
    // eslint-disable-next-line
  }, [debouncedText]);

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <TextField
      id="search"
      value={text || ""}
      size="small"
      placeholder="Consulte pokémons..."
      onChange={handleChange}
      variant="outlined"
      style={{ marginTop: '1%', width: '500px' }}
     />
  );
};

export default SearchBar;