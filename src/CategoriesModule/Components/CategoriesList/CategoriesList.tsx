import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { getCategories } from "../../../Api/Categories/Categories";
import LoadingData from "../../../SharedModule/Components/Loading/LoadingData";
import NoData from "../../../SharedModule/Components/NoData/NoData";
import Pagination from "../../../SharedModule/Components/Pagination/Pagination";
export default function CategoriesList({ handleShow, showUpdateModal }) {
  const { t, i18n } = useTranslation();
  const { categoriesData, loading } = useSelector(
    (state) => state.GetAllCategories
  );
  const [onPress, setonPress] = useState(null);
  const totalNumberOfPages = categoriesData.totalNumberOfPages;
  const [filterByName, setFilterByName] = useState("");
  const handleChange = (e: string) => {
    setFilterByName(e);
  };

  const list = categoriesData?.data?.map((item) => (
    <tr key={item?.id}>
      <td>{item?.name}</td>
      <td>
        {" "}
        <button
          className="btn btn-outline-warning"
          onClick={() => {
            showUpdateModal(item);
          }}
        >
          <i className="fa fa-edit px-2"></i>
          {t("Edit")}
        </button>
        <button
          className="btn btn-outline-danger mx-2"
          onClick={() => {
            handleShow(item?.id);
          }}
        >
          <i className="fa fa-trash mx-2"></i>
          {t("Delete")}
        </button>
      </td>
    </tr>
  ));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories({ onPress, filterByName }));
  }, [dispatch, filterByName, onPress]);

  return (
    <>
      <div className="row w-100 m-auto">
        <input
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          className="form-control w-25 "
          placeholder={t("FilterByName")}
        />
      </div>
      {list?.length > 0 ? (
        <div>
          <Table
            striped
            bordered
            hover
            className="w-75 m-auto my-3 text-center"
          >
            <thead>
              <tr>
                <th> {t("name")}</th>
                <th>{t("actions")}</th>
              </tr>
            </thead>
            {list?.length > 0 ? (
              <tbody>{loading ? <LoadingData /> : list}</tbody>
            ) : (
              <div>No Data</div>
            )}
          </Table>
          <Pagination
            setonPress={setonPress}
            totalNumberOfPages={totalNumberOfPages}
          />
        </div>
      ) : (
        <NoData />
      )}
    </>
  );
}
