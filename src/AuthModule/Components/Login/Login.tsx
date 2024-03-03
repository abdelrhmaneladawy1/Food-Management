import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../../../Redux/Features/Auth/LoginSlice";
import { Loading } from "../../../SharedModule";
import { ILoginInputs } from "../../../interfaces/Auth";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>();

  const onSubmit: SubmitHandler<ILoginInputs> = (data) => {
    dispatch(fetchData(data));
  };
  if (localStorage.getItem("role") === "User") {
    navigate("/dashboard");
  } else if (localStorage.getItem("role") === "Admin") {
    navigate("/dashboard");
  }
  return (
    <>
      <div>
        <div>
          <h2>Login</h2>
          <p>Welcome Back! Please enter your details</p>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group ">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email address"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <span className="text-danger my-2">Email is required</span>
            )}
          </div>
          <div className="form-group my-3">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter your Password"
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && (
              <span className="text-danger my-2">Password is required</span>
            )}
          </div>
          <div className="d-flex justify-content-between my-3  ">
            <Link
              to="/forget-password"
              className="text-decoration-none text-success"
            >
              Registration ?
            </Link>
            <Link
              to="/reset-request-pass"
              className="text-decoration-none text-success"
            >
              Forgot Password{" "}
            </Link>
          </div>
          <button className="btn btn-success w-100">
            {loading === true ? <Loading /> : "Login"}
          </button>
        </form>
      </div>
    </>
  );
}
