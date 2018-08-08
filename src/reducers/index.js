export default (state, action) => {
  switch (action.type) {
    case "SET_TECHNOLOGY":
      return {
        // Don't mutate, create copy of state
        ...state,
        tech: action.tech
      };

    default:
      return state;
  }
};
