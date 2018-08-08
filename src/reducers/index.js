export default (state, action) => {
  switch (action.type) {
    case "SET_TECHNOLOGY":
      return {
        // Don't mutate, return new copy
        ...state,
        tech: action.tech
      };

    default:
      return state;
  }
};
