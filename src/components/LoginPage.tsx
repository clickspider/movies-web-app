import React, { FC } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import icons from "../assets/icons";

interface LoginProps {
  className?: string;
}

const LoginPage: FC<LoginProps> = ({ className = "" }) => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = {
    user: false,
    signin: (username: any, fn: any) => {
      navigate("/");
    },
  };

  let from = location.pathname || "/";

  if (auth.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  function onBtnClick(event: React.MouseEvent<HTMLButtonElement>) {
    auth.signin("", () => {
      navigate(from, { replace: true });
    });
  }
  return (
    <div className={`login-container ${className}`}>
      <div className="login-container__logo">
        <icons.logo />
      </div>
      <div className="login-container__form">
        <div className="login-container__form-title">
          <h2>Login</h2>
        </div>

        <div className="login-container__form-button">
          <button onClick={onBtnClick}>Login with Google</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
