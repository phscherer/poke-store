const setOpenEdit = () => {
  return {
    type: 'SET_OPEN_EDIT',
    payload: true,
  };
};

const setCloseEdit = () => {
  return {
    type: 'SET_CLOSE_EDIT',
    payload: false,
  };
};

export default {
  setOpenEdit,
  setCloseEdit
};
