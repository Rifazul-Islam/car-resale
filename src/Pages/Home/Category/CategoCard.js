import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const CategoCard = ({secondhand}) => {
   
      const {user} = useContext(AuthContext)
    const {img,name,Locatin,resalePrice,originalPrice,years,} = secondhand


    return (
        <div className='mb-5 mt-3'>
            <div className="card card-compact h-[400px]  flex justify-between  bg-base-200 shadow-xl">
         <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
       <div className='grid justify-items-start '>
       <p className='ml-7 font-bold'> Location :  {name}</p>
        <p className='ml-7 font-bold'> Location :  {Locatin} </p>
       <p className='ml-7 font-bold'>  Resale Price: {resalePrice}Tk </p>
       <p className='ml-7  font-bold'> Original Price : {originalPrice} </p>
       <p className='ml-7 font-bold'> Youre : {years} </p>
       <p className='ml-7 font-bold'> Seller Name : {user?.displayName} </p>

      
       </div>
      
     </div>
     <div className="card-actions justify-end mb-5 mr-3">
     <button className="btn btn-success btn-sm ">Booking Now</button>
     </div>
  </div>
</div>
    
    );
};

export default CategoCard;


    