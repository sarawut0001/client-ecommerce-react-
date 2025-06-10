import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h1>Sidbar</h1>
      <h1>Header</h1>
      <hr />
      <Outlet />
    </div>
  );
};
export default AdminLayout;
