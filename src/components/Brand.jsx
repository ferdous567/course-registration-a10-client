import { Link } from "react-router-dom";

const Brand = () => {
    return (
        <div className="my-10 w-3/4 mx-auto">
            <h2 className="text-center text-4xl font-bold my-10">Highest Brands</h2>
            <div className="md:grid grid-cols-3 gap-6">
           <Link>
           <div className="card bg-base-100 shadow-xl mb-5">
                <figure className="px-10 pt-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDAJGv4dPfcI3utmVD_fnyJpOaAlmyQMX8Q&usqp=CAU" alt="Coca-Cola" className="rounded-xl h-[150px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Coca-Cola !</h2>
                    
                </div>
            </div>
           </Link>
           <Link>
           <div className="card bg-base-100 shadow-xl mb-5">
                <figure className="px-10 pt-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfioeElMx1M069OstvDGDAPSUS1o0OV366TA&usqp=CAU" alt="McDonald-s" className="rounded-xl h-[150px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">McDonald-s !</h2>
                    
                </div>
            </div>
           </Link>
           <Link>
           <div className="card bg-base-100 shadow-xl mb-5">
                <figure className="px-10 pt-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqm4vmxOoL9rbz-U5P0n14ZODh3koATjj_Cg&usqp=CAU" alt="PepsiCo" className="rounded-xl h-[150px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">PepsiCo !</h2>
                    
                </div>
            </div>
           </Link>
           <Link>
           <div className="card bg-base-100 shadow-xl mb-5">
                <figure className="px-10 pt-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzneUQ7-Ay-nAfcWvipwXzOyIX1zNXevErw&usqp=CAU" alt="Nestlé" className="rounded-xl h-[150px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Nestlé !</h2>
                    
                </div>
            </div>
           </Link>
           <Link>
           <div className="card bg-base-100 shadow-xl mb-5">
                <figure className="px-10 pt-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLp48kjBh-Tvz3qw0EZJgkaNNF7mmsW5n9w&usqp=CAU" alt="Kellogg's" className="rounded-xl h-[150px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Kelloggs !</h2>
                    
                </div>
            </div>
           </Link>
           <Link>
           <div className="card bg-base-100 shadow-xl mb-5">
                <figure className="px-10 pt-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_LocEaVSzFaGKqo0bF770SQoQGd9bp8qzQ&usqp=CAU" alt="Starbucks" className="rounded-xl h-[150px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Starbucks !</h2>
                    
                </div>
            </div>
           </Link>
           
        </div>
        </div>
    );
};

export default Brand;