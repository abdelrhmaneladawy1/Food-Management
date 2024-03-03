import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import baseUrl from "../../../Custom/Custom";

export const changePass = createAsyncThunk(
  "resetPass/fetchData",
  async ({ setShow, userData, handleClose }) => {
    const response = await baseUrl
      .put(`/api/v1/Users/ChangePassword/`, userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
      })
      .then((res) => {
        setShow(true);
        setTimeout(() => {
          handleClose();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
    return response;
  }
);
