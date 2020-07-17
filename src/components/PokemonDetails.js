import React from 'react';
import { useSelector } from 'react-redux';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';

const PokemonDetails = ({ open = false, handleClose }) => {
  const { single } = useSelector((state) => state.dataReducer);

  let styles = createMuiTheme({
    content: {
      display: 'flex',
      justifyContent: 'center'
    },
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
      <IconButton
          onClick={() => handleClose()}
          style={{
            display: 'flex',
            float: 'right',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <CloseIcon />
        </IconButton>
        { single &&
          <CardMedia
            component="img"
            title={single.name}
            alt={single.name}
            height="140"
            image={single.image}
            style={{ objectFit: 'contain' }}
          />
        }
      </DialogTitle>
      <DialogContent style={{ marginBottom: '20px' }}>
        <Typography style={styles.content} variant="h4" component="h2">
          {single ? single.name : ""}
        </Typography>
        <Typography style={styles.content} variant="h6" component="h2">
          {single ? single.classification : ""}
        </Typography>
        {single && single.types &&
          single.types.map((type) => (
            <Typography
              key={uuidv4()}
              variant="body2"
              color="textSecondary"
              component="h2"
              style={styles.content}
            >
              <Box fontStyle="italic">
                {type}
              </Box>
            </Typography>
          ))
        }
        <Typography style={styles.content} variant="h6" component="h2">
          Ataques / Dano
        </Typography>
        {single && single.attacks &&
          single.attacks.special.map((attack) => (
            <Typography
              key={uuidv4()}
              style={styles.content}
              variant="body2"
              component="h2"
            >
              {`(${attack.type}) ${attack.name} - ${attack.damage}`}
            </Typography>
          ))
        }
      </DialogContent>
    </Dialog>
  );
}

export default PokemonDetails;