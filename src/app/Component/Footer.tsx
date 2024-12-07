
export default function Footer() {
  return (
    <div className="w-full h-[440px] bg-black text-[#FAFAFA]">  
      <div className="w-full max-w-7xl mx-auto p-4">
        {/* Grid Layout with responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

          {/* Exclusive Section */}
          <div className="w-full h-auto text-left gap-4">
            <h2 className="text-2xl text-[#FAFAFA] pt-6 font-bold">Exclusive</h2>
            <h2 className="text-2xl text-[#FAFAFA] pt-6 font-medium">Subscribe</h2>
            <h2 className="text-[#FAFAFA] pt-6 font-normal">Get 10% off your first Order</h2>
            <div className="flex items-center mt-9 text-[#f8f5f5] w-[217px] h-[48px] border-2
             border-white font-medium p-4 rounded-lg">
              <p className="w-[130px] h-[24px] opacity-50">Enter your email</p>
              <div className="ml-4">
                <img src="/icon-send.png" alt="sendicon" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="w-full h-auto text-left gap-4">
            <h2 className="text-2xl text-[#FAFAFA] pt-4 font-medium">Support</h2>
            <ul className="mt-4 text-[#FAFAFA]">
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          {/* Account Section */}
          <div className="w-full h-auto text-left gap-4">
            <h2 className="text-2xl text-[#FAFAFA] pt-4 font-medium">Account</h2>
            <ul className="mt-4 text-[#FAFAFA]">
              <li>Login/Register</li>
              <li>Cart</li>
              <li>WishList</li>
              <li>Shop</li>
            </ul>
          </div>
          

          {/* Quick Link Section */}
          <div className="w-full h-auto text-left gap-3">
            <h2 className="text-2xl text-[#FAFAFA] pt-4 font-medium">Quick Link</h2>
            <ul className="mt-4 text-[#FAFAFA]">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>        
      

        

        {/* Scancode Image */}
        <div className="ml-4 mt-1 w-[198px] h-[210px] gap-6">
        <h2 className="text-2xl text-[#FAFAFA] pt-4 font-medium">Download App</h2>
        <ul className="mt-4 text-sm text-[#FAFAFA]">
              <li>Save $3 with App New User Only</li>
              <li><img src="/scancode.png" alt="scancode" /></li>
              <li><img src="/mediaicons.png" alt="scancode" /> </li>           
              
              </ul>
          

        </div>

        </div>

      </div>
    </div>
  );
}
