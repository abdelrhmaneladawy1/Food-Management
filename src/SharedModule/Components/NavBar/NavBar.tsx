import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import userImg from "../../../assets/images/auth-bg.png";
import { useLocation } from "react-router-dom";
export default function NavBar() {
  const { t, i18n } = useTranslation();
  let location = useLocation();

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary rounded-3">
        <Container>
          <Navbar.Brand href="#home">{t("dashboard")}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
        <Navbar.Collapse id="basic-navbar-nav" className="mx-5">
          <div className="m-3 d-flex align-items-center gap-2">
            <img
              src={userImg}
              alt=""
              width="50px"
              height="50px"
              className=" rounded-5"
            />
            <h5>Abdelrhman</h5>
          </div>
          {i18n.language == "ar" ? (
            <Button
              className="btn btn-success text-white"
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              En
            </Button>
          ) : (
            <Button
              className="btn  btn-success text-white"
              onClick={() => {
                i18n.changeLanguage("ar");
              }}
            >
              ع
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
