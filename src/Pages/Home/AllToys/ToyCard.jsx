import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ToyCard = ({ allToy}) => {
  const {name } =allToy;
  return (
    <div className="card card-compact w-86 bg-base-100 shadow-xl">
      <figure>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
         <Link > <BsArrowRight size={20} className="text-orange-500" /></Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;