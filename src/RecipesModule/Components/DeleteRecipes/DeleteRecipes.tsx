import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteRecipes, getRecipes } from "../../../Api/Recipes/Recipes";
import deleteImage from "../../../assets/images/NoData.svg";

export default function DeleteRecipes({ close, idItem }) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteRecipes(idItem)).then(() => {
      dispatch(getRecipes({}));
      close();
      toast.success(t("recipesDeletedSuccessfully"));
    });
  };

  return (
    <>
      <div className="text-center">
        <img src={deleteImage} alt="deleteImage" />
        <div className="m-3">
          <h4>{t("deleteRecipes")}</h4>
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
