import Navbar from "../Navbar";
import About from "../About";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Navbar page="home" />
      <div className="text-center mt-5"></div>
      <About></About>
      <Footer></Footer>
    </>
  );
};

export default Home;
