import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  getCategories,
  updateCategories,
} from "../../../Api/Categories/Categories";

export default function UpdateCategories({ close, CategoryData }) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  useEffect(() => {
    setValue("name", CategoryData.name);
  }, []);
  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(updateCategories({ id: CategoryData.id, data }))
      .then(() => {
        dispatch(getCategories({}));
        close();
        toast.success(t("updatedCategoriesSuccessfully"));
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <>
      <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        <h4>{t("EditCategory")}</h4>
        <p>{t("AddCategoryDetails")}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder={t("CategoryName")}
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <span className="text-danger">{t("CategoryNameisRequired")}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success my-4">
            {t("Edit")}
          </button>
        </form>
      </div>
    </>
  );
}
