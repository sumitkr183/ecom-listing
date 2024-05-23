import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const getReq = async (endpoint: string) => {
  try {
    const response = await axiosClient.get(endpoint);

    return response.data || [];
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
