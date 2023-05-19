import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
const Register = () => {
  const { user, createUser, googleUser, updateUserProfile } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";


  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        updateUserProfile(name, photo);
        navigate(from, { replace: true });

        form.reset();

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        
      });
  };


  const handleGoogle = () => {
    googleUser()
      .then(result => {
        const googleUsed = result.user;
        console.log(googleUsed);
      })
      .catch(error => {
        console.log(error)
      })
  };



  return (


  <div className='flex flex-col md:flex-row sm:flex-col justify-content-center align-items-center '>
      <form onSubmit={handleCreateUser} className="w-full md:w-[570px] mt-15 mb-10 p-10  bg-white rounded-lg text-black">
      <h3 className='text-2xl font-bold mb-5'>Create an account</h3>
      <div className="form-control">

        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input  type="text" name='name' placeholder="Name" className="input input-bordered w-full" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
      </div>
      
      <div className="form-control">
        <label className="label">
          <span className="label-text">PhotoURL</span>
        </label>
        <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" />

      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

      </div>
   

      <div className="form-control">
        <label className="flex gap-4 cursor-pointer mt-4">
          <input type="checkbox" className="checkbox" required />
          <span className="label-text">Accept terms & conditions</span>
        </label>
      </div>
      <div className="form-control mt-6 mb-3">
        <button type="submit" value="register" className="btn btn-warning">Create an account</button>
      </div>
      {error && <p className='text-center text-error mb-2'>{error}</p>}
      <p className='text-center'>Already have an account? <Link to='/login' className='text-warning underline'>Login</Link></p>
      <div className=" social-button-container grid grid-rows-2 justify-items-center w-50 mt-3">
      <p>_____________or_______________</p>
        <div onClick={handleGoogle} className="">
          <img

            className=" social-button"
            src="https://i.ibb.co/gSTHXZJ/google-btn.png"
            alt=""
          />
        </div>
      
      </div>
    </form>
     <div className="col-md-6">
     <img
       className="w-100"
       src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=826&t=st=1683184979~exp=1683185579~hmac=a3fbecb0b235ca218a1331776d51a6229da1c3baf8eb01e0058f917acb0a7252"
       alt=""
     />
   </div>
  </div>


  );
};

export default Register;