function CircleCard({ icon, title, description }) {
    return (
      <div className="relative bg-[#FAFAFA] p-4 h-[250px] w-[340px] rounded-2xl shadow-md overflow-hidden">
        {/* Circle with adjusted image position */}
        <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#E0EAF3] shadow-md flex justify-center items-start pt-4">
          <img src={icon} alt={title} className="w-8 h-8 pl-[4px] pt-[7px]" />
        </div>
  
        {/* Content */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    );
  }
  
  export default CircleCard;
  