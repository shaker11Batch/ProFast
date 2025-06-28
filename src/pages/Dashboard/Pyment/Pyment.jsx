import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51RepjoRki1WZ0qERjgaNyJuBVj0YjgeeW21zpfYlt6L72qWJvdlzW2hoz0f5qmRQpVhJ8AhVGKTDbRZSS9uKYvCK001eSRdTui')

const Pyment = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    );
};

export default Pyment;