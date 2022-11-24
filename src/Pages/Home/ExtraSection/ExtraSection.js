import React from 'react';

const ExtraSection = () => {
    return (
        <div>
        <div className="hero my-7">
        <div className="hero-content  flex-col lg:flex-row">
       <img src="https://hawthorneautosquare.com/wp-content/uploads/2019/09/selling-car-900x577.jpg" alt='' className=" lg:w-1/2 md:w-full h-80 rounded-lg shadow-2xl" />
       <div className='lg:w-1/2 md:w-full'>
         <h1 className="text-3xl font-bold mb-4">Resale Value of Your Car</h1>
         <p className="font-bold text-justify">If you looking to save on a used car, trading in your vehicle can help. Trade-in value is the price a dealer would offer for your car, which can go towards the cost of purchasing another car they have in stock. It is usually close to how much the vehicle would sell for at an auction. However, dealers can offer a higher amount if the vehicle is more desirable.
          There are many simple online tools for determining how much your car is worth. These can help decide on whether to sell or trade-in  and get the best deal.</p>
         <button className="btn btn-primary mt-9">Readding</button>
       </div>
     </div>
   </div>
           </div>
    );
};

export default ExtraSection;