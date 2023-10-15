import BackToHome from "../../utils/BackToHome";
import Footer from "../Footer/Footer";

function Error() {
  return (
    <div>
      <div className="px-6 md:px-20 lg:mx-40">
        <div className="flex justify-center my-12">
          <BackToHome />
        </div>
        <img
          className="w-full max-h-[800px]"
          src="https://i.ibb.co/bPFwG2B/404.gif"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
}

export default Error;
