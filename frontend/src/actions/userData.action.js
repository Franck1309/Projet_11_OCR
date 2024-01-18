import axios from "axios";

export const USER_DATA = "USER_DATA";
export const SIGN_OUT = "SIGN_OUT";
export const USER_EDIT = "USER_EDIT";

export const userPosts = (userData) => {
  return async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        userData
      );
      window.localStorage.setItem("tokenLocal", response.data.body.token); // Enregistre le token au localStorage
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export const userData = (token) => (dispatch) => {
  return axios
    .post("http://localhost:3001/api/v1/user/profile", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      dispatch({ type: USER_DATA, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const userEdit = (token, updatedUserData) => (dispatch) => {
  return axios
    .put("http://localhost:3001/api/v1/user/profile", updatedUserData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      dispatch({ type: USER_EDIT, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
