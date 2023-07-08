import axios from "axios";

const getPoducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

export default getPoducts;
