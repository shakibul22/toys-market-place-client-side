import  { useEffect, useState } from 'react';
import ToysCategory from './ToysCatagory';

const Catagory = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setAllToys(data));
    }, []);
    console.log(allToys);
    return (
        <div>
            <div><h2 className='text-4xl font-extrabold text-cyan-400 my-9'>Catagory Features:</h2></div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-7 mt-9">
                {allToys.map(allToy => (
                    <ToysCategory key={allToy.id} allToy={allToy} />
                ))}
            </div>
        </div>
    );
};

export default Catagory;