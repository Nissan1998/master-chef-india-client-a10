import React from "react";
import Lottie from "lottie-react";
import Error from "../../assets/98488-bot-error-404.json";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="d-flex flex-direction-column  justify-content-center align-items-center">
      <div className="w-96">
        <Lottie animationData={Error} loop={true}></Lottie>
      </div>
      <h3 className="text-5xl">{error?.message}</h3>
    </div>
  );
};

export default ErrorPage;
