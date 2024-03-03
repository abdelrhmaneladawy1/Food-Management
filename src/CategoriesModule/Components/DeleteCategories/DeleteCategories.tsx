import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import deleteImage from "../../../assets/images/NoData.svg";
import {
  deleteCategories,
  getCategories,
} from "../../../Api/Categories/Categories";

export default function DeleteCategories({ close, idItem }) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCategories(idItem)).then(() => {
      dispatch(getCategories({}));
      close();
      toast.success(t("categoriesDeletedSuccessfully"));
    });
  };

  return (
    <>
      <div className="text-center">
        <img src={deleteImage} alt="deleteImage" />
        <div className="m-3">
          <h4>{t("deleteCategory")}</h4>
          <p className=" text-muted">{t("deleteCategoryDesc")}</p>
        </div>
        <div className="flex justify-content-end w-100 text-end">
          <button className="btn btn-outline-danger" onClick={handleDelete}>
            {t("Delete")}
          </button>
        </div>
      </div>
    </>
  );
}
