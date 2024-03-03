import recipesReducer from "./Features/Recipes/GetAllRecipesSlice";
import getAllTage from "./Features/Recipes/GetAllTageSlice";
import getUsersReducer from "./Features/Users/GetUsersSlice";
/** @format */
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Features/Auth/LoginSlice";
import ResetPassSlice from "./Features/Auth/ResetPassSlice";
import resetRequestPass from "./Features/Auth/ResetRequestPassSlice";
import AddCategories from "./Features/Categories/AddCategoriesSlice";
import GetAllCategories from "./Features/Categories/GetAllCategoriesSlice";
import addRecipes from "./Features/Recipes/AddRecipesSlice";
const Store = configureStore({
  reducer: {
    login: loginReducer,
    resetRequest: resetRequestPass,
    resetPass: ResetPassSlice,
    GetAllCategories,
    AddCategories,
    getUsersReducer,
    recipesReducer,
    getAllTage,
    addRecipes,
  },
});

export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
