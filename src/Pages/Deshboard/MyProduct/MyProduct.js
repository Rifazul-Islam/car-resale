import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const MyProduct = () => {
       
        
    const [products , setProducts]=useState([])
      
       useEffect(()=>{
          
        axios.get('https://car-resale-server-ten.vercel.app/sellerProducts')
          .then(data => {
               return setProducts(data.data)
          });
             
       }, [])
      
    return (
        <div>
               <h1 className='text-2xl'> my product  </h1>

          <div className='grid grid-cols-1   lg:grid-cols-2  gap-5' >
          {
              products.map(product=> <ProductCard 
                        key={product._id}
                        product={product}
                     >

                    </ProductCard> )               
               }
          </div>
        </div>
    );
};

export default MyProduct;