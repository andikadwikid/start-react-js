import axios from "axios";

export const getPoducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

export const getDetailPoduct = async (id) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};
