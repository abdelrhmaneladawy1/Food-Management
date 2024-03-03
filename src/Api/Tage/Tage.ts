import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import baseUrl from "../../Custom/Custom";

export const getAllTage = createAsyncThunk(
  "GetAllTages/getAllTage",
  async (__, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await baseUrl.get(`/api/v1/tag/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
        params: {
          pageSize: 5,
          pageNumber: 1,
        },
      });
      return data.data;
    } catch (error) {
      toast.error(error);
    }
  }
);
