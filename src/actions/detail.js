const setOpen = () => {
  return {
    type: 'SET_OPEN',
    payload: true,
  };
};

const setClose = () => {
  return {
    type: 'SET_CLOSE',
    payload: false,
  };
};

export default {
  setOpen,
  setClose
};
