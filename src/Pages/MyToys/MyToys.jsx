import { useContext } from "react";
import Title from "../Title/Title";
import { AuthContext } from "../../Providers/AuthProvider";
import { Table } from "flowbite-react";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
        <Title title="My Toys-Kid's Zone"></Title>
      <div className="my-jobs-container">
        <h1 className="text-center p-4 ">ALL My Toys</h1>
        <div className="search-box p-2 text-center">
          <input type="text" className="p-1" /> <button>Search</button>
        </div>
        <Table className="container">
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
            <tr>
              {/* <td>{index + 1}</td>
              <td>{job.title}</td>
              <td>{job.category}</td>
              <td>{job.vacancy}</td>
              <td>{job.salary}</td> */}
              <td></td>
            
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyToys;