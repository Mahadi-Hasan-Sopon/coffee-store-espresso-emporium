import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
