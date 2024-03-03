import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { changePass } from "../../../Api/Auth/ChangePassword/ChangePassword";
import { useDispatch } from "react-redux";
import SuccessRequest from "../../../SharedModule/Components/SuccessRequest/SuccessRequest";
import { useState } from "react";

interface IFormInput {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
export default function ChangePass({ handleClose }) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (userData) => {
    dispatch(changePass({ setShow, userData, handleClose }));
  };
  const newPassword = watch("newPassword");
  const confirmNewPassword = watch("confirmNewPassword");

  return (
    <>
      {show == false ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          className="p-3"
        >
          <h5 className="mb-4">{t("ChangePassword")}</h5>
          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control form-control-lg "
              placeholder={t("oldPassword")}
              {...register("oldPassword", {
                required: true,
              })}
            />
            {errors.oldPassword && errors.oldPassword.type === "required" && (
              <span className="text-danger my-2">
                {t("oldPasswordisRequired")}
              </span>
            )}
          </div>
          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder={t("newPassword")}
              {...register("newPassword", {
                required: true,
              })}
            />
            {errors.newPassword && errors.newPassword.type === "required" && (
              <span className="text-danger my-2">
                {t("newPasswordisRequired")}
              </span>
            )}
          </div>
          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder={t("confirmNewPassword")}
              {...register("confirmNewPassword", {
                required: true,
                validate: (value) =>
                  value === newPassword || "Passwords do not match",
              })}
            />
            {errors.confirmNewPassword &&
              errors.confirmNewPassword.type === "required" && (
                <span className="text-danger my-2">
                  {t("confirmNewPassword")}
                </span>
              )}
            {errors.confirmNewPassword &&
              errors.confirmNewPassword.type === "validate" && (
                <span className="text-danger my-2">
                  {errors.confirmNewPassword.message}
                </span>
              )}
          </div>
          <button type="submit" className="btn my-2 btn-success w-100 text">
            {t("Edit")}
          </button>
        </form>
      ) : (
        <SuccessRequest message="Password Edited successfully" />
      )}
    </>
  );
}
