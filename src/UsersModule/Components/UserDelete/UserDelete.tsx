import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import deleteImage from "../../../assets/images/NoData.svg";
import { deleteUser, getUsers } from "../../../Api/Users/Users";

export default function UserDelete({ close, idItem }) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteUser(idItem)).then(() => {
      dispatch(getUsers(idItem));
      close();
      toast.success(t("userDeletedSuccessfully"));
    });
  };

  return (
    <>
      <div className="text-center">
        <img src={deleteImage} alt="deleteImage" />
        <div className="m-3">
          <h4>{t("deleteUser")}</h4>
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
