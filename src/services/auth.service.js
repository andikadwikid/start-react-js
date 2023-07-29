import axios from "axios";
import jwtDecode from "jwt-decode";
export const login = async (data, callback) => {
  try {
    const response = await axios.post(
      "https://fakestoreapi.com/auth/login",
      data
    );
    const token = response.data.token;
    callback(true, token);
  } catch (err) {
    callback(false, err);
  }
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};
