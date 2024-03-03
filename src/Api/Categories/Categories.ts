import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../Custom/Custom";
import { toast } from "react-toastify";

// Get all Categories
export const getCategories = createAsyncThunk(
  "GetAllCategories/getCategories",
  async ({ onPress, filterByName }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await baseUrl.get(`/api/v1/Category/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
        params: {
          pageSize: 5,
          pageNumber: onPress,
          name: filterByName,
        },
      });
      return data?.data;
    } catch (error) {
      toast.error(error);
      rejectWithValue(error.message);
    }
  }
);

// update categories
export const updateCategories = createAsyncThunk(
  "AddCategories/updateCategories",
  async ({ id, data }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const fetchData = await baseUrl.put(`/api/v1/Category/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
      });
      return fetchData;
    } catch (error) {
      toast.error(error);
      rejectWithValue(error.message);
    }
  }
);

// Add the category
export const addCategories = createAsyncThunk(
  "AddCategories/addCategories",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const fetchData = await baseUrl.post(`/api/v1/Category/`, data, {
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
// Delete the category
export const deleteCategories = createAsyncThunk(
  "AddCategories/deleteCategories",
  async (idItem, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const fetchData = await baseUrl.delete(`/api/v1/Category/${idItem}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
      });
    } catch (error) {
      toast.error(error);
    }
  }
);
