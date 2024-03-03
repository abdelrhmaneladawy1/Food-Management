import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SubHeader({
  title,
  description,
  btnName,
  btnLink,
  handleShow,
}) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className=" row home align-items-center  rounded-3 py-4 mx-2 my-4 align-content-center">
        <div className="col-sm-8">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        {btnName && (
          <div className="col-sm-4 text-end">
            <Link to={btnLink}>
              <button className="btn px-3 btn-success" onClick={handleShow}>
                {btnName}
                {i18n.language == "en" ? (
                  <i className=" fa-solid fa-arrow-right"></i>
                ) : (
                  <i className=" fa-solid fa-arrow-left"></i>
                )}{" "}
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
