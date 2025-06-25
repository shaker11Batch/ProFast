import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SentParcel = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [cost, setCost] = useState(null)

    const onSubmit = (data) => {
        const base = data.type === "document" ? 50 : 80;
        const weightCost = data.weight ? parseFloat(data.weight) * 10 : 0;
        const deliveryCost = base + weightCost + 20;

    }

    const saveParcel = (data, cost) => {
        const parcelData = {
            ...data,
            cost,
            creation_data: new Date().toISOString()
        };
        console.log("saving to Db", parcelData)
        toast.success("parcel successfully created")
    }



    return (
        <form onSubmit={handleSubmit()} className="space-y-6">
            {/* Parcel Info */}
            <div>
                <h2 className="text-xl font-semibold mb-4">📦 Parcel Info</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="label">Type</label>
                        <select className="select select-bordered w-full" {...register("type", { required: true })}>
                            <option value="document">Document</option>
                            <option value="non-document">Non-Document</option>
                        </select>
                        {errors.type && <p className="text-red-500 text-sm">Type is required</p>}
                    </div>

                    <div>
                        <label className="label">Title</label>
                        <input type="text" placeholder="Parcel title" className="input input-bordered w-full" {...register("title", { required: true })} />
                        {errors.title && <p className="text-red-500 text-sm">Title is required</p>}
                    </div>

                    {watch === "non-document" && (
                        <div>
                            <label className="label">Weight (kg)</label>
                            <input type="number" step="0.1" placeholder="Weight" className="input input-bordered w-full" {...register("weight")} />
                        </div>
                    )}
                </div>
            </div>

            {/* Sender Info */}
            <div>
                <h2 className="text-xl font-semibold mb-4">📤 Sender Info</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input placeholder="Sender Name" className="input input-bordered w-full" {...register("senderName", { required: true })} />
                    <input placeholder="Contact Number" className="input input-bordered w-full" {...register("senderContact", { required: true })} />
                    <input placeholder="Region" className="input input-bordered w-full" {...register("senderRegion", { required: true })} />
                    <input placeholder="Service Center" className="input input-bordered w-full" {...register("senderCenter", { required: true })} />
                    <input placeholder="Address" className="input input-bordered w-full" {...register("senderAddress", { required: true })} />
                    <input placeholder="Pickup Instruction (optional)" className="input input-bordered w-full" {...register("pickupNote")} />
                </div>
            </div>

            {/* Receiver Info */}
            <div>
                <h2 className="text-xl font-semibold mb-4">📥 Receiver Info</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input placeholder="Receiver Name" className="input input-bordered w-full" {...register("receiverName", { required: true })} />
                    <input placeholder="Receiver Contact" className="input input-bordered w-full" {...register("receiverContact", { required: true })} />
                    <input placeholder="Region" className="input input-bordered w-full" {...register("receiverRegion", { required: true })} />
                    <input placeholder="Service Center" className="input input-bordered w-full" {...register("receiverCenter", { required: true })} />
                    <input placeholder="Receiver Address" className="input input-bordered w-full" {...register("receiverAddress", { required: true })} />
                    <input placeholder="Delivery Instruction (optional)" className="input input-bordered w-full" {...register("deliveryNote")} />
                </div>
            </div>

            {/* Submit */}
            <div className="text-center">
                <button type="submit" className="btn btn-primary px-6">Submit Parcel</button>
            </div>
        </form>
    );
};

export default SentParcel;