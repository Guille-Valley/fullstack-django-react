import Footer from "componenst/navigation/Footer";
import Navbar from "componenst/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Home() {
  return (
    <Layout>
      <Navbar></Navbar>
      Home
      <Footer></Footer>
    </Layout>
  );
}
export default Home;
