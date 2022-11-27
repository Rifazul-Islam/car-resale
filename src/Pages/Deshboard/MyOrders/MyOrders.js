
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
  
    const {user}=useContext(AuthContext)
  
  
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const {data:bookings = [] } = useQuery({
  
         queryKey :['bookings', user?.email],
         queryFn: async ()=> {
          const res = await fetch(url ,{
              
          });
          const data = await res.json() ;
          return  data ;
         }
     })
  

          console.log(bookings)
    return (
        <div>

     <h1 className='text-3xl mt-3'> My Orders </h1>
    <div className="overflow-x-auto">
     <table className="table w-full mt-4 ">
  
    <thead>
      <tr>
        <th></th>
        <th>image</th>
        <th>Title</th>
        <th>price</th>
        <th> Action  </th>
      </tr>
    </thead>
    <tbody>
     
     {
           bookings.map((booking,i) =>  <tr key={booking._id} >
            <th> {i+1} </th>
            <td>
            <div className="avatar">
            <div className="w-24 rounded-full">
             <img src={booking.img} alt='' />
           </div>
           </div>
           </td>
            <td>{booking.categorName}</td>
            <td> {booking.price}TK </td>
            <td> <button className="btn btn-sm btn-primary"> <Link to={`/deshboard/payments/${booking._id}`}>Pay </Link>   </button>
            
               </td>
           
          </tr>)
     }
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;