import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../../Redux/Features/Auth/ResetRequestPassSlice";
import { Loading } from "../../../SharedModule";
import { IForgetInputs } from "../../../interfaces/Auth";

export default function ResetRequestPass() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isReset } = useSelector((state) => state.resetRequest);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: IForgetInputs) => {
    dispatch(fetchData(data));
  };
  useEffect(() => {
    if (isReset === true) {
      navigate("/reset-pass");
    }
  }, [isReset]);

  return (
    <>
      <div>
        <h2>Request Reset Password</h2>
        <p>Please Enter Your Email And Check Your Inbox</p>
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
        <button className="btn btn-success my-2 w-100">
          {loading === true ? <Loading /> : "Send"}
        </button>
      </form>
    </>
  );
}
