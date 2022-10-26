import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkOutInfo = useLoaderData ();
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">{checkOutInfo.title}</h1>
        </div>
    );
};

export default Checkout;