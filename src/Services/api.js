import axios from "axios";


export const createBulkData = async (requests) => {
  const apiCalls = requests.map(({ endpoint, data }) => axios.post(endpoint, data));
  return Promise.all(apiCalls);
};