import Swal from "sweetalert2";

const AddBrand = () => {
    const handleBrand = e =>{
        e.preventDefault();
        const form = e.target;
        const brandName = form.brandName.value;
        const photourl = form.photourl.value;
        const newBrand = {brandName, photourl};
        console.log(newBrand)

        fetch('https://food-bevarage-server-il07zob08-khaledas-projects.vercel.app/brands',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Product added successfully !',
                    'success'
                  )
            }
        })
    }
    return (
        <div className="w-1/2 mx-auto mt-10">
            <form onSubmit={handleBrand}>
                <input className="border-2 p-2" type="text" name="brandName" placeholder="name"/> <br /><br />
                <input className="border-2 p-2" type="text" name="photourl" /> <br /><br />
                <input type="submit" value="Submit" className="btn" />
            </form>
        </div>
    );
};

export default AddBrand;