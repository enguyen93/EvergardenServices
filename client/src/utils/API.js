import axios from "axios";

export default {
  // Get recipients
  getRecipients: () => {
    return axios.get("/api/recipients");
  },
  // post a new recipient
  postRecipients: (recipientData) => {
    return axios.post("/api/recipients", recipientData);
  },
  // delete a recipient by id
  deleteRecipients: (id) => {
    return axios.delete("/api/recipients" + id);
  },
  // update an existing recipient
  updateRecipients: (id) => {
    return axios.put("/api/recipients")
  }
}