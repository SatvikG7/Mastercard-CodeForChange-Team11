import Navbar from "../Navbar";
import About from "../About";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Navbar page="home" />
      <div className="text-center">Hello World</div>
      <About></About>
      <Footer></Footer>
    </>
  );
};

export default Home;
