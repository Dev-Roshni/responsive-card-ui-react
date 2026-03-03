
function ImgHead({img}) {
  return (
    <div>
      <div className='bg-blue-500 h-24 relative'>
        <img src={img} alt="womenImage"
        className='w-32 h-32 rounded-full object-cover
       absolute left-1/2 -bottom-12 transform -translate-x-1/2 border-3 border-blue-500' ></img>    
     </div >
    </div>
  )
}

export default ImgHead
