const initialState = Array(9).fill(null);

export const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "NEXT_TURN": {
      state.splice(payload.index, 1, payload.sim);
      return state;
    }
    case "NEW_GAME": {
         return (state = Array.from(initialState));
    }
    default:
      return state;
  }
};
