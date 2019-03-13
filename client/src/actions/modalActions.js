import axios from "axios";

import { GET_RECIPIENTS } from "./types";

// Get Recipients
export const getRecipients = () => dispatch => {
  axios
    .get("/api/recipients/")
    .then(res =>
      dispatch({
        type: GET_RECIPIENTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_RECIPIENTS,
        payload: null
      })
    );
};

