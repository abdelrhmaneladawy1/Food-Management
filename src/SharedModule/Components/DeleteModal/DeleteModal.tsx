import { useTranslation } from "react-i18next";
import deleteImage from "../../../assets/images/NoData.svg";

export default function DeleteModal({ handleDelete }) {
  const { t, i18n } = useTranslation();

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
