import React from 'react';
import { useDispatch } from 'react-redux';
import {
  CardContent,
  Card,
  CardMedia,
  CardActions,
  Typography
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import actions from '../actions/index';

const PokemonCard = ({
  image,
  name,
  classification,
  types,
  attacks,
}) => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(actions.dataAction.setOne({
      name,
      classification,
      image,
      attacks,
      types
    }));
    dispatch(actions.detailAction.setClose());
    dispatch(actions.modalAction.setOpenEdit());
  };

  const handleOpenDetails = () => {
    dispatch(actions.modalAction.setCloseEdit());
    dispatch(actions.dataAction.setOne({
      name,
      classification,
      image,
      attacks,
      types
    }));
    dispatch(actions.detailAction.setOpen());
  }

  return (
    <Card
      style={{
        width: '320px',
        height: '350px',
        margin: '30px',
        borderRadius: 5
      }}
    >
      <Typography variant="h5" component="h5">
        {name}
      </Typography>
      <CardMedia
        component="img"
        title={name}
        alt={name}
        height="140"
        image={image}
        style={{ objectFit: 'contain' }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent style={{ flex: '1 0 auto' }}>
          <Typography variant="h6" component="h2">
            {classification}
          </Typography>
          {types &&
            types.map((type) => (
              <Typography
                key={type}
                variant="body2"
                color="textSecondary"
                component="h2"
              >
                <Box fontStyle="italic">
                  {type}
                </Box>
              </Typography>
            ))}
        </CardContent>
      </div>
      <CardActions style={{ justifyContent: 'center' }}>
        <Tooltip title="Detalhes">
          <IconButton
            aria-label="detalhar"
            onClick={() => handleOpenDetails()}
          >
            <SearchIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Editar">
          <IconButton
            aria-label="editar"
            onClick={() => handleOpenModal()}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;