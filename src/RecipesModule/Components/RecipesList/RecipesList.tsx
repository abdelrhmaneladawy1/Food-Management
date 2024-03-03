import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../../Api/Recipes/Recipes";
import LoadingData from "../../../SharedModule/Components/Loading/LoadingData";
import NoData from "../../../SharedModule/Components/NoData/NoData";
import Pagination from "../../../SharedModule/Components/Pagination/Pagination";
import logo from "../../../assets/images/menu-logo.png";

export default function RecipesList({
  handleShowDelete,
  handleShowUpdate,
  recipesData,
  loading,
  categoriesData,
  allTages,
}) {
  const [onPress, setonPress] = useState(null);
  const totalNumberOfPages = recipesData?.totalNumberOfPages;
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [tage, setTage] = useState(null);
  const [categorie, setCategorie] = useState(null);
  const [recipesName, setRecipesName] = useState("");
  const getTageValue = (value) => {
    setTage(value);
  };
  const getRecipesName = (name) => {
    console.log(name);
    setRecipesName(name);
  };
  const getCategorieValue = (value) => {
    setCategorie(value);
  };

  const list = recipesData?.data?.map((item) => (
    <tr key={item?.id}>
      <td>{item?.name}</td>
      <td>
        {item.imagePath ? (
          <img
            src={`https://upskilling-egypt.com:443/` + item.imagePath}
            alt="image"
            width="50px"
          />
        ) : (
          <img src={logo} alt="" width="50px" />
        )}
      </td>
      <td>{item?.price}</td>
      <td>{item?.description}</td>
      <td>{item?.tag?.name}</td>
      <td>{item?.category[0]?.name}</td>
      <td className="d-flex flex-nowrap">
        <button
          className="btn btn-outline-warning"
          onClick={() => {
            handleShowUpdate(item);
          }}
        >
          <i className="fa fa-edit px-2"></i>
          {t("Edit")}
        </button>
        <button
          className="btn btn-outline-danger mx-2"
          onClick={() => {
            handleShowDelete(item.id);
          }}
        >
          <i className="fa fa-trash mx-2"></i>
          {t("Delete")}
        </button>
      </td>
    </tr>
  ));
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

  useEffect(() => {
    dispatch(getRecipes({ onPress, tage, categorie, recipesName }));
  }, [categorie, dispatch, onPress, recipesName, tage]);

  return (
    <>
      <div className="row m-auto w-75">
        <div className="col-md-4">
          <input
            onChange={(e) => {
              getRecipesName(e.target.value);
            }}
            className="form-control  "
            placeholder={t("FilterByName")}
          />
        </div>
        <div className="col-md-3">
          <select
            onChange={(e) => {
              getCategorieValue(e.target.value);
            }}
            className="form-select"
          >
            <option>{t("CategoryName")}</option>
            {categoryList}
          </select>
        </div>
        <div className="col-md-3">
          <select
            onChange={(e) => {
              getTageValue(e.target.value);
            }}
            className="form-select"
          >
            <option>{t("tag")}</option>
            {tageList}
          </select>
        </div>
      </div>
      <div className="table-responsive">
        {list?.length > 0 ? (
          <Table
            striped
            bordered
            hover
            className="table w-75 m-auto my-5 text-center"
          >
            <thead>
              <tr>
                <th> {t("name")}</th>
                <th> {t("image")}</th>
                <th> {t("Price")}</th>
                <th> {t("description")}</th>
                <th> {t("tag")}</th>
                <th> {t("CategoryName")}</th>
                <th>{t("actions")}</th>
              </tr>
            </thead>
            {list?.length > 0 ? (
              <tbody>{loading ? <LoadingData /> : list}</tbody>
            ) : (
              <div>No Data</div>
            )}
          </Table>
        ) : (
          <NoData />
        )}
      </div>
      <Pagination
        setonPress={setonPress}
        totalNumberOfPages={totalNumberOfPages}
      />
    </>
  );
}
