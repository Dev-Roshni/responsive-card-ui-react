function SocialMedia({ icon: Icon, bgColor, iconColor }) {
  return (
    <div className="mt-2 mb-3">
      <div className={`w-10 h-10 flex items-center  hover:scale-110 justify-center rounded-full ${bgColor} `}>
        <Icon className={`text-xl ${iconColor}`} />
      </div>
    </div>
  )
}


export default SocialMedia
