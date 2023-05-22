import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ToyDetails = () => {
    const { _id } = useParams();
    const [item, setItem] = useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/toys/${_id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        //     const findData=data.find((toy)=>toy._id===_id);
        //   setItem(findData); 
        })
    },[_id])
    console.log(_id);
  
   
    return (
        <div>

            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
            </a>

        </div>
    );
};

export default ToyDetails;