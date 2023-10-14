import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="max-w-[1920px] 2xl:mx-auto">
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
