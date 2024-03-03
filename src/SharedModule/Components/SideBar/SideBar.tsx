import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import { ChangePass } from "../../../AuthModule";
import logo from "../../../assets/images/menu-logo.png";

export default function SideBar({}) {
  let [isCollapsed, setIsCollapsed] = useState(true);
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("role");
    navigate("/login");
  };
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Modal handler
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <ChangePass handleClose={handleClose} />
        </Modal.Body>
      </Modal>
      <div className="sidebar-container   ">
        <Sidebar
          collapsed={isCollapsed}
          rtl={i18n.language == "ar" ? true : false}
        >
          {localStorage.getItem("role") === "Admin" ? (
            <Menu className="  ">
              <li className="" onClick={handleToggle}>
                <img className="w-100 my-4" src={logo} alt="logo" />
              </li>
              <MenuItem
                icon={<i className="fa fa-home"></i>}
                component={<Link to="/dashboard" />}
              >
                {" "}
                {t("home")}
              </MenuItem>
              <MenuItem
                icon={<i className="fa-solid fa-users"></i>}
                component={<Link to="/dashboard/users" />}
              >
                {t("users")}
              </MenuItem>
              <MenuItem
                icon={<i className="fa-solid fa-burger "></i>}
                component={<Link to="/dashboard/recipes" />}
              >
                {" "}
                {t("recipes")}
              </MenuItem>
              <MenuItem
                icon={<i className="fa-solid fa-table-list"></i>}
                component={<Link to="/dashboard/categories" />}
              >
                {" "}
                {t("categories")}
              </MenuItem>
              <MenuItem
                icon={<i className="fa-solid fa-unlock"></i>}
                title="Change Password"
                onClick={handleShow}
              >
                {" "}
                {t("changePassword")}
              </MenuItem>
              <MenuItem
                icon={
                  <i className="fa-solid fa-arrow-right-from-bracket text-danger"></i>
                }
                onClick={handleLogout}
              >
                {" "}
                {t("logout")}
              </MenuItem>
            </Menu>
          ) : (
            <>
              <Menu className="  ">
                <li className="" onClick={handleToggle}>
                  <img className="w-100 my-4" src={logo} alt="logo" />
                </li>
                <MenuItem
                  icon={<i className="fa fa-home"></i>}
                  component={<Link to="/dashboard" />}
                >
                  {" "}
                  {t("home")}
                </MenuItem>
                <MenuItem
                  icon={<i className="fa-solid fa-burger "></i>}
                  component={<Link to="/dashboard/recipes" />}
                >
                  {" "}
                  {t("recipes")}
                </MenuItem>
                <MenuItem
                  icon={
                    <i className="fa-solid fa-arrow-right-from-bracket text-danger"></i>
                  }
                  onClick={handleLogout}
                >
                  {" "}
                  {t("logout")}
                </MenuItem>
              </Menu>
            </>
          )}
        </Sidebar>
      </div>
    </>
  );
}
