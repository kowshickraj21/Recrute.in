"use client"
import React,{ useState,useRef } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const OrderForm = (props) => {
    const [type, setType] = useState("purchase")
    const [quantity, setQuantity] = useState()
    const [hours, setHours] = useState()
    const purchase = useRef(null)
    const hire = useRef(null)
    const setActive = (newType) => {
      setType(newType)
      console.log(newType)
      if(newType == "purchase"){
        purchase.current.classList.add("border-b-2", "border-black", "bg-grey")
        hire.current.classList.add("text-innerText");
        hire.current.classList.remove("border-b-2", "border-black", "bg-grey")
        purchase.current.classList.remove("text-innerText");
    }
    if(newType == "hire"){
      hire.current.classList.add("border-b-2", "border-black", "bg-grey")
      purchase.current.classList.add("text-innerText");
      purchase.current.classList.remove("border-b-2", "border-black", "bg-grey")
      hire.current.classList.remove("text-innerText");
  }
    }
  return (
    <div className='m-auto lg:w-2/3 mt-5 rounded-lg border-2 mb-24'>
      <div className='border-b-2 flex'>
      <h2 className='font-semibold w-3/5 z-10 text-center py-3 cursor-pointer border-b-2 border-black bg-grey' ref={purchase} onClick={() => setActive("purchase")}>Purchase Gig</h2>
      <h2 className='font-semibold w-3/5 text-center py-3  cursor-pointer text-innerText' ref={hire} onClick={() => setActive("hire")}>Hire Hourly</h2>
      </div>
      {(type === "purchase")?
    <form className='border-2 h-60 p-10 pt-7'>
      <label htmlFor="quantity" className='mx-2'>Quantity:</label>
      <input type="number" id='quantity' name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} className='border-b-2 focus:outline-none pl-2 m-2'/><br />
      <input type="checkbox" name='fastDelivery' id="fastDelivery" className='m-5'/>
      <label htmlFor="fastDelivery">Fast delivery (${props.gigData.delivery})</label>
      <p>Your Total:</p>
      <button type='submit' className='flex m-auto justify-center h-10 mt-5 w-2/3 pt-2 border-2 border-black font-semibold active:bg-black active:text-white'>Continue<FaArrowRightLong className='m-1' /></button>
    </form>:(type === "hire")?
    <form className='border-2 h-60 p-10'>
    <label htmlFor="hours" className='mx-2'>Hours:</label>
    <input type="number" id='hours' name='hours' value={hours} onChange={(e) => setHours(e.target.value)} className='border-b-2 m-2 focus:outline-none p-2'/>
    <p className='py-3'>Your Total:</p>
      <button type='submit' className='flex m-auto justify-center h-10 mt-5 w-2/3 pt-2 border-2 border-black font-semibold active:bg-black active:text-white'>Continue<FaArrowRightLong className='m-1' /></button>
  </form>: null
}
    </div>
  )
}


export default OrderForm
