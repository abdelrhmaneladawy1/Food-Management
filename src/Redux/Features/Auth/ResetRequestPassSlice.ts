import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import baseUrl from "../../../Custom/Custom";

interface LoginState {
  data: [];
  loading: boolean;
  isReset: boolean;
  errors: string | null;
}
const initialState: LoginState = {
  data: [],
  loading: false,
  isReset: false,
  errors: null,
};

const fetchData = createAsyncThunk(
  "resetRequest/fetchData",
  async (userData) => {
    const response = await baseUrl
      .post(`/api/v1/Users/Reset/Request`, userData)
      .then(() => {
        toast.success("successfully Sended ");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
    return response;
  }
);

const ResetRequestPassSlice = createSlice({
  name: "resetRequest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.isReset = true;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export { fetchData };
export default ResetRequestPassSlice.reducer;
