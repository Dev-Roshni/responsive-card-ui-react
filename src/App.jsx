import './App.css'
import Button from './Button'
import ImgHead from './ImgHead'
import Subscriber from './subscriber';
import { LuMessageCircle } from "react-icons/lu";
import { FaShare ,FaRegHeart ,FaTwitter,} from "react-icons/fa";
import { CiFacebook,CiYoutube } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import SocialMedia from './SocialMedia';
import { cardData } from './Data';

function App() {
  return (
    <>
    <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-1'>

      {cardData.map((card)=>(
        
      <div key={card.id} className='max-w-[20rem] my-6 mx-3'>
    
    <ImgHead img={card.image} />
    

     <div className='min-h-50 bg-[white] py-5 flex flex-col justify-center items-center '>
      <h3 className='text-[black] font-bold text-2xl py-10'>{card.name}</h3>
      <p className='text-[black] text-m font-serif -mt-9 '>{card.role}</p>
       
       <div className="flex flex-row gap-4 mt-4">
      <SocialMedia
      icon={CiFacebook}
      bgColor="bg-blue-600"
      iconColor="text-white"/>
      <SocialMedia
       icon={CiYoutube}
       bgColor="bg-red-600"
      iconColor="text-white" />
      <SocialMedia
       icon={FaInstagramSquare}
        bgColor="bg-pink-600"
        iconColor="text-white"/>
       <SocialMedia 
       icon={FaTwitter}
       bgColor="bg-sky-500"
       iconColor="text-white"
       />
       </div>
      <Button/>
    <div className="flex flex-row gap-4 mt-4">
    <Subscriber  icon={FaRegHeart} count="60.4k" />
    <Subscriber icon={FaShare} count="12k" />
    <Subscriber icon={LuMessageCircle} count="8.9k" />
  </div>
     </div>
    </div> 

      ))}

  
    </div>
       </>
    
   
  )
}

export default App
