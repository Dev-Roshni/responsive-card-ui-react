
function Subscriber({ icon: Icon, count }) {
  return (
    <>
      <div className=' flex flex-row justify-around items-center gap-1 whitespace-nowrap mt-1'>
     <Icon className='text-[black]'/>
     <span className='text-[black]'>{count}</span>
     <span className=' text-[black] border border-[#ddcccc] h-5 '></span>
     </div>

    </>
 
     
  )
}

export default Subscriber
