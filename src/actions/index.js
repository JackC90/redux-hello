function setTechnology(text) {
  return {
    type: "SET_TECHNOLOGY",
    tech: text
  };
}

const _setTechnology = text => {{ type: "SET_TECHNOLOGY", text }};