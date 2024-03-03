import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import baseUrl from "../../Custom/Custom";

// Gey all Users
export const getUsers = createAsyncThunk(
  "GetAllCategories/getUsers",
  async ({ onPress, nameSearch, roleSearch }, thunkAPI) => {
    try {
      const data = await baseUrl.get(`/api/v1/Users/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
        params: {
          pageSize: 5,
          pageNumber: onPress,
          userName: nameSearch,
          groups: roleSearch,
        },
      });
      return data?.data;
    } catch (error) {
      toast.error(error);
    }
  }
);
// Delete User
export const deleteUser = createAsyncThunk(
  "AddCategories/deleteUser",
  async (idItem, thunkAPI) => {
    try {
      const fetchData = await baseUrl.delete(`/api/v1/Users/${idItem}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
      });
      return fetchData;
    } catch (error) {
      toast.error(error);
    }
  }
);
