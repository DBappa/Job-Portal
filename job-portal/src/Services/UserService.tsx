import axios from "axios";
const base_url = "http://localhost:8081/users";
const registerUser = async (user: any) => {
  return axios
    .post(`${base_url}/register`, user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const loginUser = async (login: any) => {
  return axios
    .post(`${base_url}/login`, login)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const sendOtp = async (email: string) => {
  return axios
    .post(`${base_url}/sendOtp/${email}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const verifyOtp = async (email: string, otp: string) => {
  return axios
    .get(`${base_url}/verifyOtp/${email}/${otp}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const resetPassword = async (email: string, password: string) => {
  return axios
    .post(`${base_url}/changePass`, { email, password })
    .then((response) => {
      return response.data;   
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export { registerUser, loginUser, sendOtp, verifyOtp, resetPassword };
