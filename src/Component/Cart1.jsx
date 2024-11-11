import React from 'react'
// sm:max-w-xs md:max-w-xs lg:max-w-lg xl:max-w-xl
import image from "../Images/image.png";
export const Cart1 = () => {
  return (
    <div >
  <div className="md:max-w-60  max-w-72 mx-auto my-6 bg-white rounded-lg shadow-md overflow-hidden">

<div className="relative">
    <img src={image} className="w-full h-48 object-cover" alt="Food Image" />
    <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full">4.5 ⭐</div>
</div>


<div className="p-4">
 
    <h2 className="text-lg font-semibold text-gray-800">Spicy House</h2>
    
   
    <p className="text-gray-600 text-sm mt-2">Delicious and spicy food delivered to your door. Enjoy!</p>

  
    <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-green-600">₹499</span>
        <button id="add-to-cart" className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">View</button>
    </div>
</div>

</div>
</div>
  )
}