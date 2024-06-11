import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Slices/counterSlice'



const Parent = () => {

const data = useSelector((state)=> state.counter.value) 
const dispath = useDispatch()



  return (
   <>
  <div className="container">
  <div className="flex gap-[20px] ">
    <button onClick={()=>dispath(decrement())} className='px-[25px] py-[5px] border-2 border-green-300 border-dotted rounded-r-full text-xl font-bold text-black bg-[#0E46A3] hover:bg-red-500'>remove</button>
    <h1 className='text-2xl font-bold'>{data}</h1>
     <button onClick={()=>dispath(increment())} className='px-[25px] py-[5px] border-2 border-green-300 border-dotted rounded-se-full text-xl font-bold text-black bg-[#0E46A3] hover:bg-[#56f7ac]'>Add</button>
   </div>
  </div>
   
   </>
  )
}

export default Parent
