import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getCategories } from "../../../Api/Categories/Categories";
import { addRecipe, getRecipes } from "../../../Api/Recipes/Recipes";
import { getAllTage } from "../../../Api/Tage/Tage";

interface FormData {
  name: string;
}
interface Props {
  close: () => void;
}
export default function AddRecipes({ close, categoriesData }) {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { allTages } = useSelector((state) => state.getAllTage);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data) => {
    const addFormData = new FormData();
    addFormData.append("name", data["name"]);
    addFormData.append("description", data["description"]);
    addFormData.append("price", data["price"]);
    addFormData.append("tagId", data["tagId"]);
    addFormData.append("recipeImage", data["recipeImage"][0]);
    addFormData.append("categoriesIds", data["categoriesIds"]);
    dispatch(addRecipe(addFormData)).then(() => {
      close();
      dispatch(getRecipes({}));
      toast.success(t("addedRecipeSuccessfully"));
    });
  };
  useEffect(() => {
    dispatch(getAllTage());
  }, [dispatch]);
  const categoryList = categoriesData?.data?.map((category) => (
    <option key={category?.id} value={category?.id}>
      {category?.name}
    </option>
  ));
  const tageList = allTages?.map((tag) => (
    <option key={tag.id} value={tag.id}>
      {tag.name}
    </option>
  ));
  return (
    <>
      <div dir={i18n.language == "ar" ? "rtl" : "ltr"}>
        <h4>{t("AddNewRecipes")}</h4>
        <p>{t("AddCategoryDetails")}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder={t("RecipeName")}
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <span className="text-danger">{t("RecipeNameisRequired")}</span>
            )}
          </div>
          <div className="form-group my-3">
            <textarea
              className="form-control form-control-lg"
              placeholder={t("description")}
              {...register("description", {
                required: true,
              })}
            ></textarea>

            {errors.description && errors.description.type === "required" && (
              <span className="text-danger">{t("RecipeDescisRequired")}</span>
            )}
          </div>
          <div className="form-group my-3">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder={t("price")}
              {...register("price", {
                required: true,
              })}
            />
            {errors.price && errors.price.type === "required" && (
              <span className="text-danger">{t("priceIsRequired")}</span>
            )}
          </div>
          <div className="row">
            <div className="col">
              <select
                className="form-control"
                {...register("tagId", {
                  required: true,
                })}
              >
                <option>{t("tag")}</option>
                {tageList}
              </select>
              {errors.tagId && errors.tagId.type === "required" && (
                <span className="text-danger">{t("tagisRequired")}</span>
              )}
            </div>
            <div className="col">
              <select
                className="form-control"
                {...register("categoriesIds", {
                  required: true,
                })}
              >
                <option>{t("CategoryName")}</option>
                {categoryList}
              </select>
            </div>
          </div>
          <div className="form-group text-center my-3 uploadContainer ">
            <input
              type="file"
              className="form-control form-control-lg d-none"
              placeholder={t("CategoryName")}
              {...register("recipeImage")}
              id="file-input"
            />

            <label htmlFor="file-input" className="btn cursor-pointer ">
              <i className="animate__animated animate__shakeY text-success my-3 fa-solid fa-arrow-up-from-bracket uploadImg"></i>
              <div>Choose a Item Image to Upload</div>
            </label>
          </div>
          <button className="btn btn-secondary d-block m-auto">
            {t("Create")}
          </button>
        </form>
      </div>
    </>
  );
}
