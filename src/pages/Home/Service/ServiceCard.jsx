// src/components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ service }) => {
    const { icon: Icon, title, description } = service
    return (
        <div className="card bg-base-100 shadow-lg border rounded-lg hover:shadow-xl transition duration-300 hover:bg-amber-100">
            <div className="card-body text-center items-center">
                <div className="text-4xl text-primary mb-4">
                    <Icon />
                </div>
                <h2 className="card-title text-lg font-semibold text-primary">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
