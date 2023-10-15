import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <div className="max-w-[1920px] 2xl:mx-auto">
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
