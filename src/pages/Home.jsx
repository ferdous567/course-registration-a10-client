import { useLoaderData } from "react-router-dom";
import AskQues from "../components/AskQues";
import Banner from "../components/Banner";
import Brand from "../components/Brand";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {

    const products = useLoaderData();
    console.log(products);
    
    // const filter = products.brand

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Brand products={products}></Brand>
            <AskQues></AskQues>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;