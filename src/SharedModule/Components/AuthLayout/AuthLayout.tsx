import { Outlet } from "react-router-dom";
import { logo } from "../../../assets";
export default function AuthLayout() {
  return (
    <>
      <div className="auth-container  container-fluid  ">
        <div className="bg-overlay  row vh-100 justify-content-center align-items-center">
          <div className=" p-5   col-md-6 bg-white rounded ">
            <img
              width="300px"
              className="d-block m-auto"
              src={logo}
              alt="logo"
            />

            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
