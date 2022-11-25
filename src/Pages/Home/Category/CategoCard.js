import React from 'react';

const CategoCard = ({secondhand}) => {
    const {img,name,Locatin,resalePrice,originalPrice,years,} = secondhand
    return (
        <div className='   '>
        <div className="card card-compact h-[400px]   w-80 bg-base-200 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
     <div className="card-body">
   <h2 className="card-title"> {name} </h2>
   <p>If a dog chews shoes whose shoes does he choose?</p>
   <div className="card-actions justify-end">
     <button className="btn btn-outline w-full"> click </button>
   </div>
 </div>
</div>
       </div>
    );
};

export default CategoCard;