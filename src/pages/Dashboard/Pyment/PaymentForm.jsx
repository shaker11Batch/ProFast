import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQueries, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentForm = () => {
    const { parcelId } = useParams()
    console.log(parcelId)


    const [error, setError] = useState(null)
    const stripe = useStripe()
    const elements = useElements()

    const axiosSecure = useAxiosSecure()
    const { isPending, data: parcelInfo } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`)
            return res.data
        }
    })

    if (isPending) return <p>.............loading</p>

    console.log(parcelInfo)

    const price = parcelInfo.cost;

    const handleSubmit = async e => {
        e.preventDefault()

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (!card) return;


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log("error", error)
            setError(error.message)
        }
        else {
            setError(null)
            console.log('payment method', paymentMethod)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='space-y-4 bg-white p-6 rounded-2xl shadow-md w-full max-w-md mx-auto'>
                <CardElement className='p-2 border rounded'>

                </CardElement>
                <button className='btn btn-primary text-black w-full' type='submit' disabled={!stripe} >
                    pay ${price}
                </button>
                {
                    error && <p className='text-center my-4 text-red-600'>{error}</p>
                }
            </form>
        </div>
    );
};

export default PaymentForm;