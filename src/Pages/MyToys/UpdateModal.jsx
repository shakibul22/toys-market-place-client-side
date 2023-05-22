import React, { useContext, useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const UpdateModal = ({id}) => {
    const { user } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    

    const handleToggleModal = () => {
        setShowModal((prevShowModal) => !prevShowModal);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleToyUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const sellerName = form.sellerName.value;

        const subCategoryData = { name, sellerName, subCategory,  price,  quantity,};
        console.log(subCategoryData);

        fetch(`http://localhost:5000/updateToy/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(subCategoryData),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }
    return (
        <div>
            <React.Fragment>
                <Button onClick={handleToggleModal}>
                    Update
                </Button>
                <Modal
                    dismissible={true}
                    show={showModal}
                    onClose={handleCloseModal}
                >
                    <Modal.Header>
                       Please Update 
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleToyUpdate} className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">

                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    
                                    name="name"
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
                                    name="sellerName"
                                />
                            </div>

                            <div className="mb-3 ">

                                <label htmlFor="subCategory" className="block mb-1">
                                    Sub-category:
                                </label>
                                <select className='w-full border border-gray-300 rounded px-3 py-2' name="subCategory">
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
                                   name="price"
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
                                  name="quantity"
                                />
                            </div>

                            <button
                                type="submit" value='Update'
                                className="bg-blue-500 h-14 md:mt-7 text-white rounded hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button onClick={handleToggleModal}>
                            I accept
                        </Button>
                        <Button
                            color="gray"
                            onClick={handleCloseModal}
                        >
                            Decline
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </React.Fragment>

        </div >
    );
};

export default UpdateModal;