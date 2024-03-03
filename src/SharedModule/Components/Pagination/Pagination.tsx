import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";

export default function Pagination({ setonPress, totalNumberOfPages }) {
  const handlePageClick = (item) => {
    setonPress(item.selected + 1);
  };
  const { t, i18n } = useTranslation();

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={t("Next")}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={totalNumberOfPages}
        previousLabel={t("Previous")}
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
      />
    </div>
  );
}
