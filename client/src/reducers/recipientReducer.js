import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_RECIPIENT
} from "../actions/types";

const initialState = {
  recipients: [],
  recipient: {},
  modal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:

      break;

    case CLOSE_MODAL:

      break;

    case ADD_RECIPIENT:
      return {
        ...state,
        recipients: action.payload
      };
      break;
    default:
      return state;
      break;
  }
}