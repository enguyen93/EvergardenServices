import axios from "axios";

export default {

  // recipient routes

  // GET recipients
  getRecipients: () => {
    return axios.get("/api/recipients/");
  },
  // POST a new recipient
  postRecipients: (recipientData) => {
    return axios.post("/api/recipients/", recipientData);
  },
  // DELETE a recipient by id
  deleteRecipients: (id) => {
    return axios.delete("/api/recipients/" + id);
  },
  // UPDATE an existing recipient
  updateRecipients: (id) => {
    return axios.put("/api/recipients/" + id);
  },

  // message routes

  // GET all messages of selected recipient
  getMessages: (recipientId) => {
    return axios.get("/api/messages/" + recipientId);
  },
  // POST message for selected recipient
  postMessages: (messageData) => {
    return axios.post("/api/messages/", messageData);
  },
  // DELETE a message by id
  deleteMessages: (id) => {
    return axios.delete("/api/messages/" + id);
  },
  // UPDATE an existing message
  updateMessages: (id) => {
    return axios.put("/api/messages/" + id);
  }
};