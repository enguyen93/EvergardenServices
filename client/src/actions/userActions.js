import axios from "axios";

import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_RECIPIENT,
  ADD_MESSAGE,
  LOAD_MESSAGES
} from "./types";

export const openModal = () => dispatch => {
  type: OPEN_MODAL
};

export const closeModal = () => dispatch => {
  type: CLOSE_MODAL
};

export const addRecipient = (recipientData) => dispatch => {
  axios.post("/api/recipients/", recipientData)
    .then(res => res.json())
    .then(recipient => dispatch(
      {
        type: ADD_RECIPIENT,
        payload: recipient
      }
    ));
};

export const addMessage = (messageData) => dispatch => {
  axios.post("/api/messages/", messageData)
    .then(res => res.json())
    .then(message => dispatch(
      {
        type: ADD_MESSAGE,
        payload: message
      }
    ));
};

export const loadMessages = (recipientId) => dispatch => {
  axios.get("/api/messages/", recipientId)
    .then(res => res.json())
    .then(messages => dispatch(
      {
        type: LOAD_MESSAGES,
        payload: messages
      }
    ));
};
