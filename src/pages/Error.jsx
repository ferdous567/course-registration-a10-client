import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center">
            <img className=" h-[300px] w-1/2 mx-auto my-10" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStYd2rCJ1TC3XkGNxOVjHWOvKPmAkgjuFXlA&usqp=CAU" alt="" />
            <h2 className="text-3xl text-red-600 font-bold mb-8"> Sorry, page not found!</h2>
            <Link>
                <button className="btn btn-outline btn-error">Go Home</button>
            </Link>
        </div>
    );
};

export default Error;