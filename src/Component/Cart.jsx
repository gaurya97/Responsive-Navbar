import React from 'react'

export const Cart = () => {
  return (
    <div className=''>
 <div classNameName="w-48 my-6 bg-white border border-slate-800 rounded-lg shadow-lg overflow-hidden">
    <div className="relative">
        <img src="https://via.placeholder.com/400x300" className="w-60 h-48 object-cover" alt="Food Image" />
        <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full">4.5 ⭐</div>
    </div>

    
    <div className="p-4">
       
        <h2 className="text-lg font-semibold text-gray-800">Spicy House</h2>
        
        
        <p className="text-gray-600 text-sm mt-2">Delicious and spicy food delivered to your door. Enjoy!</p>

        <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-green-600">₹499</span>
            <button id="add-to-cart" className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">Add to Cart</button>
        </div>
    </div>

</div>


    </div>
   
  )
}