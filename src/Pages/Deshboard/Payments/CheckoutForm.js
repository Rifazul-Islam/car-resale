import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = ({bookingProduct}) => {
    const [checkCardError, setCheckCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            
              setCheckCardError(error.message)
        
        }

        else{
            setCheckCardError('')
        }


    }
    return (
        <div>
     <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
                fontSize: '20px',
                color: '#D3C5C2',
                '::placeholder': {
                  color: '#111213',
                },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='mt-9 btn btn-sm font-bold btn-primary' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>

          <p className='text-red-500'> {checkCardError}  </p>
    </div>
  );
};
 
       
    

export default CheckoutForm;