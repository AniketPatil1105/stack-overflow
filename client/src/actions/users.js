import * as api from "../api";

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getAllUsers();
    console.log(data);
    dispatch({ type: "FETCH_USERS", payload: data });
    console.log("fetching user is successful");
  } catch (error) {
    console.log(error+"fetching user is unsuccessful");
  }
};
 export const updateProfile = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(id, updateData);
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
}; 