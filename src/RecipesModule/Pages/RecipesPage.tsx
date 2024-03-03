import { useTranslation } from "react-i18next";
import { Header, SubHeader } from "../../SharedModule";
import imgHader from "../../assets/images/foods-amico.svg";
import { RecipesList } from "..";
import { Modal } from "react-bootstrap";
import AddRecipes from "../Components/AddRecipes/AddRecipes";
import { useEffect, useState } from "react";
import DeleteRecipes from "../Components/DeleteRecipes/DeleteRecipes";
import UpdateRecipes from "../Components/UpdateRecipes/UpdateRecipes";
import { useDispatch, useSelector } from "react-redux";
import { getAllTage } from "../../Api/Tage/Tage";
import { getCategories } from "../../Api/Categories/Categories";

export default function RecipesPage() {
  const { t, i18n } = useTranslation();
  const { recipesData, loading } = useSelector((state) => state.recipesReducer);
  const { allTages } = useSelector((state) => state.getAllTage);
  const { categoriesData } = useSelector((state) => state.GetAllCategories);
  const [modalState, setModalState] = useState("close");
  const handleClose = () => setModalState("close");
  const [idItem, setIdItem] = useState(0);
  const [data, setData] = useState([]);

  const showAddModal = () => {
    setModalState("addModal");
  };
  const showDeleteModal = (id) => {
    setModalState("deleteModal");
    setIdItem(id);
  };
  const showUpdateModal = (data) => {
    setModalState("updateModal");
    setData(data);
    setIdItem(data.id);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories({}));
    dispatch(getAllTage());
  }, [dispatch]);

  return (
    <>
      <Modal show={modalState == "addModal"} onHide={handleClose}>
        <Modal.Body>
          <AddRecipes close={handleClose} categoriesData={categoriesData} />
        </Modal.Body>
      </Modal>
      <Modal show={modalState == "deleteModal"} onHide={handleClose}>
        <Modal.Body>
          <DeleteRecipes close={handleClose} idItem={idItem} />
        </Modal.Body>
      </Modal>
      <Modal show={modalState == "updateModal"} onHide={handleClose}>
        <Modal.Body>
          <UpdateRecipes
            close={handleClose}
            data={data}
            categoriesData={categoriesData}
            allTages={allTages}
          />
        </Modal.Body>
      </Modal>
      <Header
        title={t("Recipes")}
        description={t("categoriesDescription")}
        imgHader={imgHader}
      />
      <div className=" container-fluid">
        <SubHeader
          title={t("RecipeTableDetails")}
          description={t("YouCanCheckAllDetails")}
          btnName={t("AddNewRecipe")}
          handleShow={showAddModal}
        />

        <RecipesList
          handleShowDelete={showDeleteModal}
          handleShowUpdate={showUpdateModal}
          data={data}
          loading={loading}
          categoriesData={categoriesData}
          recipesData={recipesData}
          allTages={allTages}
        />
      </div>
    </>
  );
}
