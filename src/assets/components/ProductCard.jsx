import { Link } from 'react-router-dom';
import React from 'react';

function ProductCard({product}) {
    return (
        <Link >
            <div className='shadow-lg rounded-md cursor-pointer'>
                <img src={product.image} />
                <div className="bg-gray-50 p-4">
                    <h2 className='text-lg font-semibold my-4'>{product.title.substring(0, 20) + "..."}</h2>
                    <p>{product.description.substring(0, 65) + "..."}</p>

                    <div className='flex justify-between mt-4 items-center'>
                        <p>${product.price}</p>
                        <p>View Details</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;