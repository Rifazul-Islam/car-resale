import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SpennerPage from '../../Shared/SpennerPage/SpennerPage';
import CategoriCard from './CategoriCard';

const Categories = () => {

    const url = 'http://localhost:5000/categories'

    const {data:categories = [],isLoading } = useQuery({
          
         queryKey :['categories',],
         queryFn: async ()=> {
          const res = await fetch(url ,{
              
          });
          const data = await res.json() ;
          return  data ;
         }
     })
     if(isLoading){
          return <SpennerPage></SpennerPage>
     }

     console.log(categories)      
    return (
        <div className='mt-9'>
            <h1 className='text-3xl text-center'> Choose your  Categories  </h1>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
             {
               categories.map(product =><CategoriCard 
                key={product._id}
                product={product}
               ></CategoriCard>)
                
              }
             </div>
        </div>
    );
};

export default Categories;