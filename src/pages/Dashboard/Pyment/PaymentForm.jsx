import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const PaymentForm = () => {
    const { parcelId } = useParams()
    console.log(parcelId)
    const navigate = useNavigate()

    const { user } = useAuth()
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

    const amount = parcelInfo.cost;
    const amountInCents = amount * 100;
    console.log(amountInCents)


    const handleSubmit = async e => {
        e.preventDefault()

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (!card) return;

        // step-1: validate the card 
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
            //Step-3 create payment intent

            // api backend 
            const res = await axiosSecure.post('/create-payment-intent', {
                amountInCents,
                parcelId
            })
            console.log('res from intert', res)
            // step -5
            const clientSecret = res.data.clientSecret


            // step-3 confirm payment         // // Step-4 
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    }
                }
            });
            // step-6 
            if (result.error) {
                setError(result.error.message)
            } else {
                setError(null)
                if (result.paymentIntent.status === 'succeeded') {
                    console.log('payment succeeded')
                    console.log(result)
                    const transactionId = result.paymentIntent.id
                    // step-7 mark parcel paid also create payment history

                    const paymentData = {
                        parcelId,
                        email: user?.email,
                        amount,
                        transactionId: result.paymentIntent.id,
                        paymentMethod: result.paymentIntent.payment_method_types
                    }
                    const paymentRes = await axiosSecure.post('/payment', paymentData)
                    if (paymentRes.data.insertedId) {
                        // console.log('payment successfully')
                        await Swal.fire({
                            icon: 'success',
                            title: 'Payment Successful',
                            html: `<strong>Transaction ID: </strong> <code>${transactionId}</code>`,
                            confirmButtonText: 'GO to My Parcels',
                        })
                        navigate('/dashboard/myParcels')
                    }
                }
            }

        }


    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='space-y-4 bg-white p-6 rounded-2xl shadow-md w-full max-w-md mx-auto'>
                <CardElement className='p-2 border rounded'>

                </CardElement>
                <button className='btn btn-primary text-black w-full' type='submit' disabled={!stripe} >
                    pay ${amount}
                </button>
                {
                    error && <p className='text-center my-4 text-red-600'>{error}</p>
                }
            </form>
        </div>
    );
};

export default PaymentForm;