import { useRouteError } from "react-router-dom";
import "./Error.css";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="loader">
      <h1>Error 404 : {error.statusText || error.message}</h1>
    </div>
  );
};

export default Error;
