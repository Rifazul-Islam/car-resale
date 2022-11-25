import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoCard from './CategoCard';

const Category = () => {
    const secondhanProducts = useLoaderData()
    console.log(secondhanProducts)
      
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {
                 secondhanProducts.map(secondhand =>
                  <CategoCard
                  key={secondhand._id}
                  secondhand={secondhand}
                  > 
                 </CategoCard> )
              }
        </div>
    );
};

export default Category;