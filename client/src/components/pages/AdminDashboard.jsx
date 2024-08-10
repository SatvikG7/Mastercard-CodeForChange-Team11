import Navbar from "../Navbar";
import Footer from "../Footer";

const AdminDashboard = () => {
  return (
    <>
      <Navbar page="admin" />
      <div className="text-center">Admin Dashboard Protected Route</div>
      <Footer></Footer>
    </>
  );
};

export default AdminDashboard;
