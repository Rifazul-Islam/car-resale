import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const {register, formState: { errors }, handleSubmit} = useForm()
  
     const handlarAdProduct = (data)=>{

         console.log(data)
     }

    return (
     
       
            <div className='h-[650px] flex  items-center'>
            <div className='w-96 border border-blue-600  p-7'>
             <h2 className='text-2xl text-center'> Add Product</h2>

         <form onSubmit={handleSubmit(handlarAdProduct)}>
                       
              <div className="form-control w-full max-w-xs">
              <label className="label">
              <span className="label-text text-1xl"> </span>
              </label>
              <input type="text"  {...register("name" , {required:"Plase name not valid" } )} placeholder='Product Name'   className="input input-bordered w-full max-w-xs" />
                { errors.name && <p className='text-red-600' >{errors.name.message} </p> }
               </div>


            <div className="form-control w-full max-w-xs">
            <label className="label">
            <span className="label-text text-1xl"></span>
            </label>
            <input type="price" {...register("price" ,{required:"your not valid Email"} )} placeholder='Product price' className="input input-bordered w-full max-w-xs" />
            </div>

         <div className="form-control w-full ">
              <label className="label">
              <span className="label-text text-1xl"></span>
              </label>
              <select type='text' {...register("select" ,{required:true} )}  placeholder='user experise'  className="select select-bordered w-full max-w-xs">
              <option>excellent</option>
              <option>good</option>
              <option>fair</option>
           </select>
          </div>

          

            <div className='flex'>
             
            <div className="form-control w-full max-w-xs mr-3">
            <label className="label">
            <span className="label-text text-1xl"></span>
            </label>
            <input type="year" {...register("year" ,{required:"your not valid Email"} )} placeholder=' yaer ' className="input input-bordered w-full max-w-xs" />
            </div>




            <div className="form-control w-full max-w-xs">
            <label className="label">
            <span className="label-text text-1xl"></span>
            </label>
            <input type="location" {...register("location" ,{required:"your not valid Email"} )} placeholder=' location' className="input input-bordered w-full max-w-xs" />
            </div>
           
            </div>


            <div className="form-control w-full max-w-xs mr-3">
            <label className="label">
            <span className="label-text text-1xl"></span>
            </label>
            <input type="phone" {...register("phone" ,{required:"your not valid Email"} )} placeholder='mobile number' className=" input input-bordered w-full max-w-xs" />
            </div>


            <div className="form-control w-full max-w-xs mr-3">
            <label className="label">
            <span className="label-text text-1xl"></span>
            </label>
            <input type="decripe" {...register("decripe" ,{required:"your not valid Email"} )} placeholder=' description fields ' className="input   input-bordered w-full max-w-xs h-28" />
            </div>
        
        <p className='text-red-500'>  </p>
        <input type="submit" className='btn w-full border-none hover:text-gray-100 bg-gradient-to-r from-rose-500 to-teal-700 text-white my-3' value="Submit" />
        </form>
       </div>
        </div>
    );
};

export default AddProduct;