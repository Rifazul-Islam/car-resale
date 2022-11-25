import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoCard from './CategoCard';

const Category = () => {
    const secondhanProducts = useLoaderData()
    console.log(secondhanProducts)
      
    return (
        <div>
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