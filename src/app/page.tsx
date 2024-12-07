
        export default function HeroSection() {
      return (
          <div className="relative">
              <div className="flex">
  
                  {/* Hero Section Left Side */}
                  <div className="hidden md:flex ml-20 mt-12 w-[217px] h-[400px] gap-4 border-r-2 border-gray-300">

                      <div className="flex flex-col w-[217px] gap-4 mt-10 ml-16">


                          <div className="flex w-full h-6 gap-[51px] mb-4">
                              <p className="w-[142px] h-6 font-normal text-base text-start">Woman's Fashion</p>
                              <img src="DropDown2.png" alt="DropDown" className="mr-2"/>
                          </div>
                          <div className="flex w-full h-6 gap-[51px] mb-4">
                              <p className="w-[112px] h-6 font-normal text-base text-start">Men's Fashion</p>
                              <img src="DropDown2.png" alt=" DropDown" className="ml-[28px]"/>
                          </div>
                          <div className="w-[87px] h-6 mb-4">
                              <p className="font-normal text-base text-start">Electronics</p>
                          </div>
                          <div className="w-[132px] h-6 mb-4">
                              <p className="font-normal text-base text-start">Home & LifeStyle</p>
                          </div>
                          <div className="w-[73px] h-6 mb-4">
                              <p className="font-normal text-base text-start">Medicine</p>
                          </div>
                          <div className="w-[137px] h-6 mb-4">
                              <p className="font-normal text-base text-start">Sports & Outdoor</p>
                          </div>
                          <div className="w-[109px] h-6 mb-4">
                              <p className="font-normal text-base text-start">Baby's & Toys</p>
                          </div>
                          <div className="w-[131px] h-6 mb-4">
                              <p className="font-normal text-base text-start">Grociries & Pets</p>
                          </div>
                          <div className="w-[128px] h-6">
                              <p className="font-normal text-base text-start">Health & Beauty</p>
                          </div>
                      </div>
                  </div>
  
                  {/* Hero Section Right Side */}
                  <div className="flex flex-col ml-20 mt-6 pl-4 md:flex-row w-[892px] h-[344px] bg-black text-[#FAFAFA] relative">
  
                      {/* Right Side Text Section */}
                      <div className="relative z-10">
                          <div className="flex w-[190px] h-[49px] gap-7 mt-16 ml-16">
                              <img src="/1200px-Apple_gray_logo 1.png" alt="Apple Logo" width={40} height={49}/>
                              <div className="w-[126px] h-5">
                                  <p className="font-normal text-base text-center mt-3">iPhone 14 Series</p>
                              </div>
                          </div>
                          <div className="w-[294px] h-[120px] mt-[32px] ml-16">
                              <p className="font-semibold font-inter text-5xl">Up to 10% off Voucher</p>
                              <img src="/Shop.png" alt="Shop" className="w-[16.5] h-[22px ml-6]"/>


                          </div>
                          <div className="flex w-[113px] h-7 mt-[142px] ml-16 gap-2">
                              {/* <div className="w-[81px] h-7 gap-1">
                                  <p className="w-[81px] h-6 font-medium text-base text-center">Shop Now</p>
                              </div> */}
                              {/* <img src="/Shop.png" alt="Shop" className="w-[16.5] h-[14px]"/> */}
                          </div>
                          {/* <div className="w-[74px] border-[1px] mt-[10px] ml-16"></div> */}
                      </div>
  
                      {/* Right Side Image Section */}
                      <div className="w-[496px] h-[352px] absolute top-4 left-[396px]">
                          <img src="/Hero Image.png" alt="Hero Image"/>
                      </div>
  
                      {/* Indicator Dots */}
                      <div className="flex w-[110px] h-[14px] absolute top-[319px] left-[353px] gap-3">
                          <div className="w-3 h-3 bg-white opacity-50 rounded-full"></div>
                          <div className="w-3 h-3 bg-white opacity-50 rounded-full"></div>
                          <div className="w-3 h-3 bg-[#DB4444] rounded-full"></div>
                          <div className="w-3 h-3 bg-white opacity-50 rounded-full"></div>
                          <div className="w-3 h-3 bg-white opacity-50 rounded-full"></div>
                      </div>
  
                  </div>
              </div>
          </div>
      );
  }
  