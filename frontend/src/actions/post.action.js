import axios from "axios";

export const USER_POSTS = "USER_POSTS"; // authentification de l'utilisateur

export const userPosts = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        userData
      );
      dispatch({ type: USER_POSTS, payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
};
