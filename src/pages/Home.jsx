import { useLoaderData } from "react-router-dom";
import AskQues from "../components/AskQues";

import Brand from "../components/Brand";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import Header from "../components/Header";

const Home = () => {

    const brands = useLoaderData();
   
  

    return (
        <div>
            <Header></Header>
            <Brand brands={brands}></Brand>
            <AskQues></AskQues>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;