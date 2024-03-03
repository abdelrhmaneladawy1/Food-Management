import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../../Redux/Features/Auth/ResetPassSlice";
import { Loading } from "../../../SharedModule";

export default function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isReset } = useSelector((state) => state.resetPass);
  console.log("loading", loading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: string) => {
    dispatch(fetchData(data));
  };
  useEffect(() => {
    if (isReset === true) {
      navigate("/login");
    }
  }, [isReset]);
  return (
    <>
      <div>
        <h2> Reset Password</h2>
        <p>Please Enter Your Otp or Check Your Inbox</p>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group my-2 ">
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
        <div className="form-group my-2">
          <input
            type="string"
            className="form-control form-control-lg"
            placeholder="OTP"
            {...register("seed", {
              required: true,
            })}
          />
          {errors.seed && errors.seed.type === "required" && (
            <span className="text-danger my-2">OTP is required</span>
          )}
        </div>
        <div className="form-group my-2">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder=" New Password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <span className="text-danger my-2">Password is required</span>
          )}
        </div>
        <div className="form-group my-2">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder=" Confirm New Password"
            {...register("confirmPassword", {
              required: true,
            })}
          />
          {errors.confirmPassword &&
            errors.confirmPassword.type === "required" && (
              <span className="text-danger my-2">
                Confirm Password is required
              </span>
            )}
        </div>
        <button className="btn btn-success my-2 w-100">
          {loading === true ? <Loading /> : "Send"}
        </button>
      </form>
    </>
  );
}
