
const Banner = () => {
    return (
        <div className=" relative">
            <h2 className="text-white absolute top-20 md:left-20 text-5xl font-extrabold">Food for  
            <span className="text-red-600 text-6xl"> delicious</span><br />  and 
            <br /><span className="tracking-wider text-6xl text-yellow-400 ">Nutritions</span></h2>
              <img className="h-[400px] w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9_baAeAM78Qe85W4JBL67ppkS8D3PguT3A&usqp=CAU" alt="" />
        </div>
    );
};

export default Banner;