import { useSwiper } from "swiper/react";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <>
      <button
        className="w-7 h-7 flex justify-center items-center rounded-full absolute left-0 top-[33%] z-20 bg-[#979797] "
        onClick={() => swiper.slidePrev()}
      >
        <GoTriangleLeft />
      </button>
      <button
        className="w-7 h-7 flex justify-center items-center rounded-full absolute right-0 top-[33%] z-20 bg-[#979797]"
        onClick={() => swiper.slideNext()}
      >
        <GoTriangleRight />
      </button>
    </>
  );
};
export default SliderButton;
