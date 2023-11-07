import axios from "axios";

// Set API using .env
const notesAPI = axios.create({
  baseURL: "http://localhost:5000/api/v1/notes"
});

// Fetch the data
export const fetchData = async () => {
  const response = await axios.get("http://localhost:5000/api/v1/notes");
  const data = await response?.data;
  return data;
};
