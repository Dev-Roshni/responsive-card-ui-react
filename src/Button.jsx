
function Button() {
  return (
      <div className='flex gap-5 mt-4 '>
       <button className='text-[white] bg-blue-500 px-2 py-1 font-bold text-md rounded-full  transition-all 
        duration-150 
        ease-linear 
        hover:-translate-y-2 hover:bg-[black]'>Subscribe</button>
       <button className='text-[white]  bg-blue-500 px-3 py-1 font-bold text-md rounded-full transition-all 
        duration-150 
        ease-linear 
        hover:-translate-y-2 hover:bg-[black]'>Message</button>
     
     </div>
  )
}

export default Button
