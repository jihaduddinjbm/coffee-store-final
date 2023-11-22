import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, details, photo} = coffee;
    const handleUpdatedCoffee = event =>{
        event.preventDefault();

    
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            if(data.modifiedId > 0){
                alert('Coffee updated successfully');
            }
        })
    }



    return (
        <div className="text-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-center mb-4"> Update Coffee: {name}  </h2>
            <p className="text-xl mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda at aut iste ex molestias, architecto nulla nihil, itaque vel fuga labore, quisquam quis quae. Necessitatibus cum tenetur quos!</p>
          
                <form onSubmit={handleUpdatedCoffee}>
                    {/* form row name & quantity*/}
                    <div className="md:flex gap-2 mb-8">
                     <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-next">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text"  placeholder="Coffee name" name="name" defaultValue={name} className="input input-bordered w-full"  />
                        </label>

                     </div>
                     <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-next">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available quantity" defaultValue={quantity} className="input input-bordered w-full"  />
                        </label>

                     </div>
                    </div>
                    {/* form row supplier & Taste */}
                    <div className="md:flex gap-2 mb-8">
                     <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-next">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text"  placeholder="Supplier" name="supplier" defaultValue={supplier} className="input input-bordered w-full"  />
                        </label>

                     </div>
                     <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-next">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" defaultValue={taste}  className="input input-bordered w-full"  />
                        </label>

                     </div>
                    </div>
                    {/* form row category & Details */}
                    <div className="md:flex gap-2 mb-8">
                     <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-next">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text"  placeholder="Category" name="category" defaultValue={category} className="input input-bordered w-full"  />
                        </label>

                     </div>
                     <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-next">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="details" defaultValue={details} className="input input-bordered w-full"  />
                        </label>

                     </div>
                    </div>
                    {/* form row photo */}
                    <div className="mb-8">
                     <div className="form-control w-full">
                        <label className="label">
                            <span className="label-next">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text"  placeholder="photo url" name="photo" defaultValue={photo} className="input input-bordered w-full"  />
                        </label>
                     </div>
                    </div>
                     <input type="submit" value="update coffee" className="btn btn-block" />
                </form>
            
        </div>
    );
};

export default UpdateCoffee;