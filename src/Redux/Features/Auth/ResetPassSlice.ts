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

const fetchData = createAsyncThunk("resetPass/fetchData", async (userData) => {
  const response = await baseUrl
    .post(`/api/v1/Users/Reset`, userData)
    .then((res) => {
      toast.success("Password has been updated successfully");
    })
    .catch((err) => {
      toast.error(err.response.data.message);
    });
  return response;
});

const ResetPassSlice = createSlice({
  name: "resetPass",
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
export default ResetPassSlice.reducer;
