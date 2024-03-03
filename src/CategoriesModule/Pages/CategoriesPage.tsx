import { useTranslation } from "react-i18next";
import { Header, SubHeader } from "../../SharedModule";

import { useState } from "react";
import { Modal } from "react-bootstrap";
import { AddCategories, CategoriesList } from "..";
import imgHader from "../../assets/images/foods-amico.svg";
import DeleteCategories from "../Components/DeleteCategories/DeleteCategories";
import UpdateCategories from "../Components/UpdateCategories/UpdateCategories";
export default function CategoriesPage() {
  const { t, i18n } = useTranslation();
  // Modal handler
  const [modalState, setModalState] = useState("close");
  const [idItem, setIdItem] = useState("");
  const [getData, setgetData] = useState("");

  const showAddModal = () => {
    setModalState("addModal");
  };
  const showDeleteModal = (id) => {
    setModalState("deleteModal");
    setIdItem(id);
  };
  const showUpdateModal = (item) => {
    setModalState("updateModal");
    setgetData(item);
    setIdItem(item.id);
  };

  const handleClose = () => setModalState("close");

  return (
    <>
      <Modal show={modalState == "addModal"} onHide={handleClose}>
        <Modal.Body>
          <AddCategories close={handleClose} />
        </Modal.Body>
      </Modal>
      <Modal show={modalState == "deleteModal"} onHide={handleClose}>
        <Modal.Body>
          <DeleteCategories close={handleClose} idItem={idItem} />
        </Modal.Body>
      </Modal>
      <Modal show={modalState == "updateModal"} onHide={handleClose}>
        <Modal.Body>
          <UpdateCategories close={handleClose} CategoryData={getData} />
        </Modal.Body>
      </Modal>

      <Header
        title={t("categories")}
        description={t("categoriesDescription")}
        imgHader={imgHader}
      />
      <div className=" container-fluid">
        <SubHeader
          title={t("CategoriesTableDetails")}
          description={t("YouCanCheckAllDetails")}
          btnName={t("AddNewCategory")}
          handleShow={showAddModal}
        />
        <CategoriesList
          handleShow={showDeleteModal}
          showUpdateModal={showUpdateModal}
        />
      </div>
    </>
  );
}
