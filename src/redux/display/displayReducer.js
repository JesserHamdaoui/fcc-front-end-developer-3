import { UPDATE_DISPLAY } from "./displayTypes";

const initialState = {
  display: "",
};

export const displayReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DISPLAY:
      return { ...state, display: action.text };
    default:
      return state;
  }
};
