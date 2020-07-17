const modalReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_OPEN_EDIT':
      return {
        ...state,
        openEdit: action.payload,
      };
    case 'SET_CLOSE_EDIT':
      return {
        ...state,
        openEdit: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;