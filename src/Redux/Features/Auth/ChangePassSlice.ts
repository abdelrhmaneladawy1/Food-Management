import { createSlice } from "@reduxjs/toolkit";
import { changePass } from "../../../Api/Auth/ChangePassword/ChangePassword";

const initialState = {
  errors: null,
};
const ChangePassSlice = createSlice({
  name: "resetPass",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(changePass.pending, (state) => {});
    builder.addCase(changePass.fulfilled, (state, action) => {});
    builder.addCase(changePass.rejected, (state, action) => {
      state.errors = action.payload;
    });
  },
});

export default ChangePassSlice.reducer;
