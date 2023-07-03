import { Link } from "react-router-dom";

const AuthLayouts = ({ children, title, type }) => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your detail.
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-center mt-4 text-sm text-gray-500">
        Don't have an account? &nbsp;
        <Link to="/register" className="text-blue-600 underline">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-center mt-4 text-sm text-gray-500">
        Already have an account? &nbsp;
        <Link to="/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
