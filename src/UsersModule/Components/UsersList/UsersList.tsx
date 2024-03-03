import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../Api/Users/Users";
import LoadingData from "../../../SharedModule/Components/Loading/LoadingData";
import NoData from "../../../SharedModule/Components/NoData/NoData";
import Pagination from "../../../SharedModule/Components/Pagination/Pagination";
import logo from "../../../assets/images/menu-logo.png";

export default function UsersList({ handleShow }) {
  const { data, loading } = useSelector((state) => state.getUsersReducer);
  const [onPress, setonPress] = useState(null);
  const totalNumberOfPages = data.totalNumberOfPages;
  const [nameSearch, setNameSearch] = useState("");
  const [roleSearch, setRoleSearch] = useState(null);
  const getNameSearch = (name) => {
    setNameSearch(name);
  };
  const getRoleSearch = (role) => {
    setRoleSearch(role);
  };

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const list = data?.data?.map((item) => (
    <tr key={item.id}>
      <td>{item.userName}</td>
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
      <td>{item.email}</td>
      <td>{item.phoneNumber}</td>
      <td>
        <button
          className="btn btn-outline-danger mx-2"
          onClick={() => {
            handleShow(item.id);
          }}
        >
          <i className="fa fa-trash mx-2"></i>
          {t("Delete")}
        </button>
      </td>
    </tr>
  ));
  useEffect(() => {
    dispatch(getUsers({ onPress, nameSearch, roleSearch }));
  }, [dispatch, nameSearch, onPress, roleSearch]);

  return (
    <>
      <div className="row w-75 m-auto">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder={t("FilterByName")}
            onChange={(e) => {
              getNameSearch(e.target.value);
            }}
          />
        </div>
        <div className="col-md-4">
          <select
            onChange={(e) => {
              getRoleSearch(e.target.value);
            }}
            className="form-select"
          >
            <option value="">{t("Roles")}</option>
            <option value={1}>{t("Admin")}</option>
            <option value={2}>{t("Users")}</option>
          </select>
        </div>
      </div>
      {list?.length > 0 ? (
        <Table striped bordered hover className="w-75 m-auto my-5 text-center">
          <thead>
            <tr>
              <th> {t("name")}</th>
              <th> {t("image")}</th>
              <th> {t("email")}</th>
              <th> {t("phone")}</th>
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
      <Pagination
        setonPress={setonPress}
        totalNumberOfPages={totalNumberOfPages}
      />
    </>
  );
}
