import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size="5em" />
      <h1>404</h1>
      <p className="lead">Sorry, this page does not exist</p>
      <Link href="/" className="btn btn-primary">
        Go Back
      </Link>
    </div>
  );
};
export default NotFound;