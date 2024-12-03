import img1 from '../../assets/img_bg_1-PzvG2r05.jpg'
import img2 from '../../assets/img_bg_2-DzCs5o-0.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Hero() {
  return (
  <div className=" fixed top-0 ml-0  h-screen w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        <SwiperSlide className=' swiper'>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="font-serif h-full flex flex-col justify-center items-center md:items-start ml-auto md:ml-72">
              <h1 className="text-5xl font-bold ">Hi !</h1>
              <h1 className=" my-7 text-5xl font-bold">Im Jackson</h1>
              <p className='font-light opacity-70 tracking-wide '>100% html5 bootstrap templates Made
              By <a href="" className=' underline text-blue-500'>Colorlib.com</a></p>
              <button className='border border-1 border-neutral-900 py-2 px-6 mt-7'>DownLoad cv  <i className="fa-solid fa-download"></i></button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="font-serif h-full flex flex-col justify-center items-center md:items-start md:ml-72 ">
            <h1 className="text-5xl font-bold ">I am</h1>
            <h1 className=" my-7 text-5xl font-bold">Designer</h1>
            <p className='font-light opacity-70 tracking-wide '>100% html5 bootstrap templates Made
            By <a href="" className=' underline text-blue-500'>Colorlib.com</a></p>
            <button className='border border-1 border-neutral-900 py-2 px-6 mt-7'>VIEW Portfolio <i className="fa-solid fa-lock"></i></button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
