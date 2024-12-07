
 export default function Navbar() {
  return (
    <div className="w-full h-12 bg-black text-[#FAFAFA]">
      <div className="flex flex-row w-[859px] h-6 gap-[300px] pl-[445px] pt-3">

        <div className="flex w-[550px] h-6">


          <div className="w-[474px] h-[18px]">


            <p className="font-normal ml-24 text-xs pt-1">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
          </div>

          <div className="w-[68px] h-6">
            <button className="font-semibold items-center text-xs">
              <u>Shop Now</u>
            </button>
          </div>       
        
        
        </div>


        <div className="flex w-[78px] gap-1 h-6">         
          
          <div className="w-[49px] h-[21px] gap-2 py-1">
            <p className="font-normal text-xs">English</p>    
          
          </div>

          <div className="mt-2">
            <img src="/dropdown.png" alt="Drop Down" />     
         
          </div>            

        </div>

      </div>
    </div>








  );
}
