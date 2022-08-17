import axios from "axios";
import { UserDefault } from "../entities/User";

const BASE_URL = "http://localhost:5000";

const userService = {
  list: async (): Promise<UserDefault[] | null> => {
    try {
      const { data } = await axios.get(`${BASE_URL}/auth/all`);
      return data.data;
    } catch (error) {
      return null;
    }
  },

  count: async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/auth/count`);
      return data.data;
    } catch (error) {
      return null;
    }
  },

  register: async (
    nameValue: string,
    emailValue: string,
    passwordvalue: string,
    roleValue: string,
    phone: string,
    gender: string,
    dni: string,
    lastname: string
  ): Promise<UserDefault[] | null> => {
    try {
      const { data } = await axios({
        url: `${BASE_URL}/auth/register`,
        method: "post",
        data: {
          name: nameValue,
          lastname: lastname,
          gender: gender,
          email: emailValue,
          dni: dni,
          phone: phone,
          password: passwordvalue,
          role: roleValue,
        },
      });
      return data;
    } catch (error) {
      return null;
    }
  },

  login: async (emailValue: string, passwordValue: string) => {
    try {
      const { data } = await axios({
        url: `${BASE_URL}/auth/login`,
        method: "post",
        data: {
          email: emailValue,
          password: passwordValue,
        },
      });
      return data;
    } catch (error) {
      return null;
    }
  },

  verify: async () => {
    try {
      const { data } = await axios({
        url: `${BASE_URL}/auth/verify`,
        method: "get",
        headers: {
          token: localStorage.token,
        },
      });

      return data;
    } catch (error) {
      return false;
    }
  },

  showName: async () => {
    try {
      const { data } = await axios({
        url: `${BASE_URL}/auth/getName`,
        method: "get",
        headers: {
          token: localStorage.token,
        },
      });
      return data;
    } catch (error) {
      return null;
    }
  },

  
  getuser: async (emailValue: string) => {
    try {
      const { data } = await axios({
        url: `${BASE_URL}/auth/getUserbyEmail`,
        method: "post",
        data: {
          email: emailValue,
        },
      });
      return data;
    } catch (error) {
      return null;
    }
  },





};

export default userService;
