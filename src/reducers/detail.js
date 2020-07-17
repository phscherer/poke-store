const detailReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_OPEN':
      return {
        ...state,
        openDetails: action.payload,
      };
    case 'SET_CLOSE':
      return {
        ...state,
        openDetails: action.payload,
      };
    default:
      return state;
  }
};

export default detailReducer;