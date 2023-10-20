
const Contact = () => {
    return (
        <div className="bg-pink-200 w-3/4 mx-auto p-8 my-10">
            <h2 className="text-center text-3xl mb-5">Our Location and Address</h2>
            <div className=" md:flex justify-around">
            <div className="my-10 ">
                <h2 className="text-2xl font-bold">Our Address</h2>
                <p>44 Kemal Ataturk Ave, </p>
                <p>Banani, Dhaka 1213</p>
                <p>contact: 0184-000000</p>
                <p>Email: info@example.com</p>
            </div>
            <div>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9RJZE5IaU5p-mMFpXxmgkxkpdW0LFvNIvg&usqp=CAU" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Contact;