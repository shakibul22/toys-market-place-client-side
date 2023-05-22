import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Title from '../Title/Title';
import swal from 'sweetalert';


const AddToy = () => {
    const { user } = useContext(AuthContext);
    const [pictureUrl, setPictureUrl] = useState('');
    const [name, setName] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [sellerEmail, setSellerEmail] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    const handleAddToy = (event) => {
        event.preventDefault();
 
        const subCategoryData = { pictureUrl, name, sellerName:user?.displayName, subCategory, sellerEmail:user?.email, price, rating, quantity, description, };

        fetch('http://localhost:5000/PostToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(subCategoryData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    swal('Success', 'Added Toy successfully!', 'success');
                }
            });
    };
    console.log(user);

    return (
        <div className="container mx-auto  p-4">
            <Title title="Add Toy-Kid's Zone"></Title>

            <h1 className="text-2xl font-bold mb-8 text-center">Add A Toy</h1>
            <form onSubmit={handleAddToy} className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">

                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerName" className="block mb-1">
                        Seller Name:
                    </label>
                    <input
                        type="text"
                        id="sellerName"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={user?.displayName}
                        onChange={(e) => setSellerName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerEmail" className="block mb-1">
                        Seller Email:
                    </label>
                    <input
                        type="email"
                        id="sellerEmail"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={user?.email}
                        onChange={(e) => setSellerEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="pictureUrl" className="block mb-1">
                        Picture URL of the toy:
                    </label>
                    <input
                        type="text"
                        id="pictureUrl"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={pictureUrl}
                        onChange={(e) => setPictureUrl(e.target.value)}
                    />
                </div>

                <div className="mb-3 ">

                    <label htmlFor="subCategory" className="block mb-1">
                       Sub-category:
                    </label>
                    <select className='w-full border border-gray-300 rounded px-3 py-2' value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
                        <option value="">select</option>
                        <option value='Mathematics Toys'>Mathematics Toys</option>
                        <option value='Science Toys'>Science Toys</option>
                        <option value='Language Toys'>Language Toys</option>
                    </select>

                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block mb-1">
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block mb-1">
                        Rating:
                    </label>

                    <input
                        type="number"
                        id="rating"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block mb-1">
                        Available quantity:
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-1">
                        Detail description:
                    </label>
                    <textarea
                        id="description"
                        className="w-full border border-gray-300 rounded px-3"
                        rows="2"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 h-14 md:mt-7 text-white rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddToy;

// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../../Providers/AuthProvider';
// import Title from '../Title/Title';
// import swal from 'sweetalert';


// const AddToy = () => {
//     const { user } = useContext(AuthContext);

//     const [pictureUrl, setPictureUrl] = useState('');
//     const [name, setName] = useState('');
//     const [sellerName, setSellerName] = useState('');
//     const [sellerEmail, setSellerEmail] = useState('');
//     const [category, setCategory] = useState('');
//     const [subCategory, setSubCategory] = useState('');
//     const [price, setPrice] = useState('');
//     const [rating, setRating] = useState('');
//     const [availableQuantity, setAvailableQuantity] = useState('');
//     const [detailDescription, setDetailDescription] = useState('');



//     const handleAddToy = (event) => {
//         event.preventDefault();

//         const toyInformation = {
//             name:name,
//             category:category,
//             subcategories: [
//                 {
//                     subCName: subCategory,
//                     name: name,
//                     price: parseFloat(price),
//                     rating: parseFloat(rating),
//                     availableQuantity: parseInt(availableQuantity),
//                     detailDescription,pictureUrl,
//                     sellerName:user?.displayName,
//                     sellerEmail:user?.email,
//                 }
//             ]
//         }

//         fetch('https://toys-market-place-server.vercel.app/toys', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify(toyInformation),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 if (data.insertedId) {
//                     swal('Success', 'Added Toy successfully!', 'success');
//                 }
//             });
//         console.log(toyInformation);
//     }

//     return (
//         <div>
//             <Title title='Add Toy-Kids Zone'></Title>
//             <h2 className='text-center text-4xl font-bold'>ADD A TOY</h2>
//             <form onSubmit={handleAddToy} className=' mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold text-lg">Name:</span>
//                     </label>
//                     <input type="text" value={name} className="input input-bordered" placeholder='Enter Toy Name' onChange={(e) => setName(e.target.value)} required />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold text-lg">Seller Name:</span>
//                     </label>
//                     <input type="text" className="input input-bordered" value={user?.displayName} onChange={(e) => setSellerName(e.target.value)} />
//                 </div>

//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold text-lg">Picture URL :</span>
//                     </label>
//                     <input type="text" value={pictureUrl} className="input input-bordered" placeholder='Enter Photo URL' onChange={(e) => setPictureUrl(e.target.value)} required />
//                 </div>



//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold text-lg">Seller Email:</span>
//                     </label>
//                     <input type="email" className="input input-bordered" value={user?.email} onChange={(e) => setSellerEmail(e.target.value)} />
//                 </div>

//                 <div className='mt-4 mb-4 form-control'>
//                     <label>Category:</label>
//                     <select className='border' value={category} onChange={(e) => setCategory(e.target.value)} required>
//                         <option value="">Select</option>
//                         <option value="Mathematical Toys">Mathematical Toys</option>
//                         <option value="Science Toys">Science Toys</option>
//                         <option value="Language Toys">Language Toys</option>
//                     </select>
//                 </div>
//                 <div className='mb-4 form-control'>
//                     <label>Sub Category:</label>
//                     <select className='border' value={subCategory} onChange={(e) => setSubCategory(e.target.value)} required>
//                         <option value="">Select</option>
//                         <option value="Lamborghini">Lamborghini </option>
//                         <option value="Mini Police">Mini Police  </option>
//                         <option value="Formula 1">Formulayi</option>
//                         {/* <option value="Muscle cars">Muscle cars </option>
//                         <option value="Dragsters">Dragsters</option>
//                         <option value="Mini Fire Trucks">Mini Fire Trucks</option>
//                         <option value="Ambulances">Ambulances</option>
//                         <option value="Rally cars">Rally cars</option>
//                         <option value="NASCAR cars">NASCAR cars</option> */}
//                     </select>
//                 </div>

//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold text-lg">Price</span>
//                     </label>
//                     <input type="number" value={price} className="input input-bordered" onChange={(e) => setPrice(e.target.value)} required />
//                 </div>

//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold text-lg">Rating:</span>
//                     </label>
//                     <input type="number" value={rating} className="input input-bordered" onChange={(e) => setRating(e.target.value)} required />
//                 </div>

//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold text-lg">Available Quantity:</span>
//                     </label>
//                     <input type="number" value={availableQuantity} className="input input-bordered" onChange={(e) => setAvailableQuantity(e.target.value)} required />
//                 </div>

//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold text-lg">Detail Description:</span>
//                     </label>
//                     <textarea className="input input-bordered" value={detailDescription} onChange={(e) => setDetailDescription(e.target.value)} required></textarea>
//                 </div>

//                 <button className="btn btn-block" type="submit">Add Toy</button>
//             </form>
//         </div>
//     );
// };

// export default AddToy;