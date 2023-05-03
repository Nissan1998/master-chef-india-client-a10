import React from "react";
import Lottie from "lottie-react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const [error, status] = useRouteError();
  console.log(error);
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-96">
          <Lottie animationData={error} loop={true}></Lottie>
        </div>
        <h3 className="text-5xl">{error?.message}</h3>
      </div>
    </div>
  );
};

export default ErrorPage;
