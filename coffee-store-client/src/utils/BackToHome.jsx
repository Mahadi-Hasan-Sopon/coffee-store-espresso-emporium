import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function BackToHome() {
  return (
    <Link to="/">
      <button
        className="text-slaty text-3xl font-rancho flex items-center gap-2"
        type="button"
      >
        <BsArrowLeft />
        Back to home
      </button>
    </Link>
  );
}

export default BackToHome;
