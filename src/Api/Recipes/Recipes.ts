import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../Custom/Custom";
import { toast } from "react-toastify";

// Get All Recipes
export const getRecipes = createAsyncThunk(
  "GetAllRecipes/getRecipes",
  async ({ onPress, tage, categorie, recipesName }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await baseUrl.get(`/api/v1/Recipe/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
        params: {
          pageSize: 5,
          pageNumber: onPress,
          name: recipesName,
          tagId: tage,
          categoryId: categorie,
        },
      });
      return data.data;
    } catch (error) {
      toast.error(error);
    }
  }
);

// Add Recipe
export const addRecipe = createAsyncThunk(
  "AddRecipes/addRecipe",
  async (data, thunkAPI) => {
    try {
      const fetchData = await baseUrl.post(`/api/v1/Recipe/`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
      });
    } catch (error) {
      toast.error(error);
    }
  }
);
// Update the recipe
export const updateRecipe = createAsyncThunk(
  "UpdateRecipes/updateRecipe",
  async ({ id, data }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const fetchData = await baseUrl.put(`/api/v1/Recipe/${id}`, data, {
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

// Delete the Recipe
export const deleteRecipes = createAsyncThunk(
  "DeleteRecipes/deleteRecipe",
  async (idItem, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const fetchData = await baseUrl.delete(`/api/v1/Recipe/${idItem}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
      });
    } catch (error) {
      toast.error(error);
    }
  }
);
