import React, { useContext, useState } from "react";
import Title from "../Title/Title";
import { Button, Table } from "flowbite-react";
import { useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
const [modalShow, setModalShow] = React.useState(false);

  const [searchText, setSearchText] = useState("");
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, [user]);
  console.log(allToys);

  const handleDelete = (_id) => {
    console.log('delete', _id);
    fetch(`http://localhost:5000/allToys/${_id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
                alert('Deleted successfully');
                const remaining = allToys.filter(toy => toy._id !== _id);
                setAllToys(remaining);
            }
        }

        )
}
  // const handleSearch = () => {
  //   fetch(`http://localhost:5000/getToysByText/${searchText}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setToys(data);
  //     });
  // };
  // const handleToyUpdate = (data) => {
  //   console.log(data);
  //   fetch(`http://localhost:5000/updateToy/${data._id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (result.modifiedCount > 0) {
  //         setControl(!control);
  //       }
  //       console.log(result);
  //     });
  // };

  return (
    <div >
        <Title title="My Toys-Kid's Zone"></Title>
      <div className="my-Toys-container bg-cyan-100">
        <h1 className="text-center p-4 ">ALL My Toys</h1>
        <div className="search-box p-2 text-center">
          <input type="text" className="p-1" /> <button className="shadow-xl bg-stone-500 px-3 py-1.5 rounded-md text-white">Search</button>
        </div>
        <Table className="container md:mx-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Ratings</th>
              <th>Quantity</th>
              <th>Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {allToys?.map((toy, index) =>  ( <>
                <td>{toy.name}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.category}</td>
                <td>{toy.price}</td>
                <td>{toy.rating}</td>
                <td>{toy.quantity}</td>
                <td><Link to={`/update/${toy._id}`}><button>Update</button></Link>
                      </td>
                {/* <td><Button variant="primary" onClick={() => setModalShow(true)}> Edit</Button>
                  <UpdateModal show={modalShow} onHide={() => setModalShow(false)} toy={toy} andletoyUpdate={handletoyUpdate} />
                </td> */}
                <td>
                 
                   <button onClick={() => handleDelete(toy._id)}>X</button>
                </td>
              </>)
            
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyToys;

