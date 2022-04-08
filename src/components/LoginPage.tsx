import React, { FC } from "react";
import { useSelector } from "react-redux";

import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { userSelector } from "../store/user/userSlice";
import { useAppDispatch } from "../store";

import icons from "../assets/icons";
import Button from "./Button";
import { fetchUserProfile } from "../store/user/actions";

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  let location = useLocation();
  const { user } = useSelector(userSelector);

  let from = location.pathname || "/";

  if (user.profile) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  async function onBtnClick(event: React.MouseEvent<HTMLButtonElement>) {
    await dispatch(fetchUserProfile());
    navigate(from, { replace: true });
  }

  return (
    <section className="login-container">
      <div className="login-container__logo">
        <icons.logo />
      </div>
      <div className="login-container__form">
        <div className="login-container__form-title">
          <h2 className="heading-primary">Login</h2>
        </div>

        <div className="login-container__form-button">
          <Button
            onClick={onBtnClick}
            isLoading={user.loading === "pending"}
            className="button__primary heading-tertiary"
          >
            <icons.iconGoogle
              style={{
                marginRight: 10,
                backgroundColor: "#fff",
                borderRadius: "50%",
              }}
              width={30}
              height={30}
            />
            Login with Google
          </Button>
          <p className="login-container__form-text">
            Don't have an account? Just click the{" "}
            <span className="color-primary">login button</span> it will sign you
            in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
