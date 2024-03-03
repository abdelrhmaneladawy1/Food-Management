import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  addCategories,
  getCategories,
} from "../../../Api/Categories/Categories";

interface FormData {
  name: string;
}

interface Props {
  close: () => void;
}

export default function AddCategories({ close }: Props): JSX.Element {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(addCategories(data))
      .then(() => {
        dispatch(getCategories({}));
        close();
        toast.success(t("addedCategoriesSuccessfully"));
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <>
      <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        <h4>{t("AddNewCategory")}</h4>
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
            {t("Create")}
          </button>
        </form>
      </div>
    </>
  );
}
