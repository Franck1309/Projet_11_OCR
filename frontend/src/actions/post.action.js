import axios from "axios";

export const USER_POSTS = "USER_POSTS";

export const userPosts = (userData) => {
  return (dispatch) => {
    return axios.post("http://localhost:3001/api/v1/user/login", userData)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: USER_POSTS, payload: userData });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
