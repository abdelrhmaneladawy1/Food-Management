import { createSlice } from "@reduxjs/toolkit";
import { getAllTage } from "../../../Api/Tage/Tage";
export interface Props {
  allTages: any;
  loading: boolean;
  error: null | string;
}

const initialState: Props = {
  allTages: [],
  loading: false,
  error: null,
};
const GetAllTageSlice = createSlice({
  name: "getAllTage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllTage.fulfilled, (state, action) => {
      state.loading = false;
      state.allTages = action.payload;
    });
    builder.addCase(getAllTage.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default GetAllTageSlice.reducer;
