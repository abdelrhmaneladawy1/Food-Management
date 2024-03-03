import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { UsersList } from "..";
import { Header, SubHeader } from "../../SharedModule";
import imgHader from "../../assets/images/foods-amico.svg";
import UserDelete from "../Components/UserDelete/UserDelete";

export default function UsersPage() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState("close");
  const [idItem, setIdItem] = useState("");
  const [getData, setgetData] = useState("");
  const handleClose = () => setModalState("close");

  const showDeleteModal = (id) => {
    setModalState("deleteModal");
    setIdItem(id);
  };

  return (
    <>
      <Modal show={modalState == "deleteModal"} onHide={handleClose}>
        <Modal.Body>
          <UserDelete close={handleClose} idItem={idItem} />
        </Modal.Body>
      </Modal>
      <Header
        title={t("users")}
        description={t("categoriesDescription")}
        imgHader={imgHader}
      />
      <div className=" container-fluid">
        <SubHeader
          title={t("UsersTableDetails")}
          description={t("YouCanCheckAllDetails")}
        />
        <UsersList handleShow={showDeleteModal} />
      </div>
    </>
  );
}
