
  export default function Navbar2() {
    return (
      <div className="w-full h-[38px]">            
        <div className="flex items-center mt-5 justify-between mx-auto w-[1170px] h-full">
          {/* Logo Section */}
          <div className="w-[118px] h-[24px]">
            <img src="/Logo.png" alt="Logo" />
          </div> 
  
          {/* Navigation Links */}
          <div className="flex gap-14 text-base text-black">
            <p className="w-12 h-6">Home</p>
            <p className="w-12 h-6">Contact</p>
            <p className="w-12 h-6">About</p>
            <p className="w-14 h-6">Sign Up</p>
          </div>               
  
          {/* Search Bar, Wishlist, and Cart */}
          <div className="flex items-center gap-8">
            {/* Search Bar */}
            <div className="w-[347px] h-[38px]">
              <img src="/Frame552.png" alt="Search bar" />
            </div>  
          
          </div>
        </div>
      </div>
    );
  }
  
  

        
      
      
      
      
      
      