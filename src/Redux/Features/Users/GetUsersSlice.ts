import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../../Api/Users/Users";
export interface Props {
  data: any;
  loading: boolean;
  error: null | string;
}

const initialState: Props = {
  data: [],
  loading: false,
  error: null,
};
const GetUsersSlice = createSlice({
  name: "getUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default GetUsersSlice.reducer;
