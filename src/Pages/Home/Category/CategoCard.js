import React, { useContext } from 'react';

import { BiCheck } from "react-icons/bi";
import { AuthContext } from '../../../contexts/AuthProvider';

const CategoCard = ({secondhand,setProductAllData}) => {
   
      const {user} = useContext(AuthContext)
    const {img,name,Locatin,resalePrice,originalPrice,years,} = secondhand


    return (
        <div className='mb-5 mt-3'>
         <div className="card card-compact h-[400px]  bg-base-200 flex justify-between  shadow-xl">
         <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
       <div className='grid justify-items-start '>
       <p className='ml-7 font-bold'> Name : {name}</p>
       <p className='ml-7 font-bold'> Location : {Locatin} </p>
       <p className='ml-7 font-bold'>  Resale Price: {resalePrice}Tk </p>
       <p className='ml-7  font-bold'> Original Price : {originalPrice} </p>
       <p className='ml-7 font-bold'> Youre : {years} </p>
      
        <div className=' '>
        <p className='ml-7 font-bold flex justify-around' > Seller Name :  { user?.uid? <>{user?.displayName} 
        <p className='ml-7 text-lg text-green-600'><BiCheck/></p>
        </> : " naiUser"} </p>
       
        </div>
      
       </div>
      
     </div>
     <div className="card-actions justify-end mb-5 mr-3">
  

     <label
        onClick={()=>setProductAllData(secondhand)}
       htmlFor="booking-modal"
        className="btn btn-success btn-sm ">Booking Now
        </label>
     </div>
  </div>

</div>
    
    );
};

export default CategoCard;


    