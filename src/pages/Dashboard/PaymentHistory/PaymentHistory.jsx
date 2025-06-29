import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query'
// import { useQuery } from '@tanstack/react-query/build/legacy';

const PaymentHistory = () => {
    const { user } = useAuth()
    console.log(user)
    const axiosSecure = useAxiosSecure()

    const { isPending, data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment?email=${user.email}`);
            return res.data
        }
    })

    if (isPending) {
        return <p>.............Loading</p>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Parcel ID</th>
                        <th>Email</th>
                        <th>Amount</th>
                        
                        <th>Transaction ID</th>
                        <th>Paid At</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => (
                        <tr key={payment.transactionId}>
                            <td>{index + 1}</td>
                            <td>{payment.parcelId}</td>
                            <td>{payment.email}</td>
                            <td>${payment.amount.toFixed(2)}</td>
                          
                            <td>{payment.transactionId}</td>
                            <td>{new Date(payment.paid_at_string).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;