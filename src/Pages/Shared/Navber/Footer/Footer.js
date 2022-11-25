import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-7'>
     <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
  
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDA4yDTgO7ByD-6xYhAIO5YvUmeGKGyWy3SQ&usqp=CAU" alt='' className=" w-28 h-22 ml-10 rounded-lg shadow-2xl" />
   
 
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Categories</span> 
    < Link className="link link-hover">Microbus</Link> 
    <Link className="link link-hover">Lexsury</Link> 
    <Link className="link link-hover"> Electronic </Link> 
 
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link className="link link-hover"> Texlay </Link> 
    <Link className="link link-hover"> Maxlery </Link> 
    <Link className="link link-hover"> Traticbel</Link> 
    
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </div>
</footer>
        </div>
    );
};

export default Footer;