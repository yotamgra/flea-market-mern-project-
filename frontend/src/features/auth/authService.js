import axios from "axios";

const API_URL = "http://localhost:5000/users";

//Register user
const register = async (userData) => {
  console.log("befor axios")
  const response = await axios.post(API_URL, userData);
  console.log("after axios")
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Login user
const login = async (userData) => {
  console.log(userData);
  const response = await axios.post(API_URL + "/login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Logout user
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
