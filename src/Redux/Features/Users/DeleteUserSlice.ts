import { createSlice } from "@reduxjs/toolkit";
import { deleteUser } from "../../../Api/Users/Users";
const initialState: Props = {
  data: [],
  loading: false,
  error: null,
};

const DeleteUserSlice = createSlice({
  name: "deleteUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default DeleteUserSlice.reducer;
