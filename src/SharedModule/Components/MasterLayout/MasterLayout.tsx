import { Outlet } from "react-router-dom";
import { SideBar } from "../..";
import NavBar from "../NavBar/NavBar";
import { useTranslation } from "react-i18next";

export default function MasterLayout() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div
        className="d-flex  gap-4 "
        dir={i18n.language == "ar" ? "rtl" : "ltr"}
      >
        <div className="sidebar-container   ">
          <SideBar />
        </div>
        <div className=" w-100">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
