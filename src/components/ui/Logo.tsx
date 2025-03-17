
const Logo = () => {
  return (
    <div className="flex items-center">
       <img
                  src={'/images/logo.png'}
                  alt={'logo'}
                  className="h-[100px] object-cover transition-transform duration-500 hover:scale-110"/>
      {/* <FaPizzaSlice className="text-[#FF4500] text-2xl mr-2" />
      <span className="font-bold text-xl text-white">Pizza Store</span> */}
    </div>
  );
};

export default Logo;
