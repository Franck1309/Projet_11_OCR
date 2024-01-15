import axios from "axios";

export const USER_DATA = "USER_DATA";

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
