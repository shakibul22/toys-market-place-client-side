import React, { useState } from 'react';

const ToysCategory = ({ allToy }) => {
  const { title, id, img,catagory } = allToy;
  const [activeTab, setActiveTab] = useState(0);

 

  return (
    <div className='avatar flex'>
      <div className="w-24 h-20 rounded-xl">
        <img src={img} alt={title} />
      </div>
      <div className="inline-block bg-orange-500 w-[5px] h-[80px] rounded-lg mx-2"></div>
      <div>
        <h2 >{title}</h2>
        <button>sub-catagory</button>
        
      
      </div>
    </div>
  );
};

export default ToysCategory;
