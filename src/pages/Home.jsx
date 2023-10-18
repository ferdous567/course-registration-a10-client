import AskQues from "../components/AskQues";
import Banner from "../components/Banner";
import Brand from "../components/Brand";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Brand></Brand>
            <AskQues></AskQues>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;