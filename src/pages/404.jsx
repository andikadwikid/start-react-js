// import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  //   const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold mb-2 text-blue-600">Oops!</h1>
      <p className="font-medium text-slate-500 mb-8">
        Sorry, an unexpected error occurred.
      </p>
      {/* <p className="text-red-600">{error.statusText || error.message}</p> */}
    </div>
  );
};

export default ErrorPage;
