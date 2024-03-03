import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import baseUrl from "../../../Custom/Custom";
import { jwtDecode } from "jwt-decode";

interface LoginState {
  role: null;
  data: [];
  loading: boolean;
  errors: string | null;
}
const initialState: LoginState = {
  role: null,
  data: [],
  loading: false,
  errors: null,
};
const saveAuthData = () => {
  if (localStorage.getItem("AuthToken")) {
    const encodedToken = localStorage.getItem("AuthToken");
    const decodedToken = jwtDecode(encodedToken);
    const role = decodedToken.roles[0];
    localStorage.setItem("role", role);
  }
};

const fetchData = createAsyncThunk("login/fetchData", async (userData) => {
  const response = await baseUrl
    .post(`/api/v1/Users/Login`, userData)
    .then((res) => {
      toast.success("successfully loggedIn");
      localStorage.setItem("AuthToken", res.data.token);
    })
    .catch((err) => {
      toast.error(err.response.data.message);
    });
  return response;
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.role = action.payload;
      state.loading = false;
      saveAuthData();
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export { fetchData, saveAuthData };
export default loginSlice.reducer;
