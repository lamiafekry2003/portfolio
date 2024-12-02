
import { useState } from 'react';
import img1 from '../../assets/img-1-C4nS0eD8.jpg';
import img2 from '../../assets/img-2-D-4H1m4L.jpg';
import img3 from '../../assets/img-3-pR2ZEVY9.jpg';
import img4 from '../../assets/img-4-tHccITd-.jpg';
import img5 from '../../assets/img-5-lAucr__a.jpg';
import img6 from '../../assets/img-6-DFW03AZ3.jpg';
import style from './work.module.css';

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("Graphic Design");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  let images = [
    { src: img1 ,alt:'img1'},
    { src: img2 ,alt:'img2'},
    { src: img3 ,alt:'img3' },
    { src: img4 ,alt:'img4'},
    { src: img5,alt:'img5' },
    { src: img6 ,alt:'img6'},
  ];

  return (
    <div className="md:ml-72 pt-20">
      <div className="flex flex-col justify-center text-left">
        <p className="tracking-[5px] text-[10px] font-medium mb-4 text-neutral-400 uppercase">
          my specialty
        </p>
        <p className="tracking-[2px] leading-7 mb-8 text-lg font-semibold font-serif uppercase">
          My skills
        </p>
      </div>
      <div className="works flex gap-3 my-5">
        {["Graphic Design", "App", "Software"].map((category) => (
          <p
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`cursor-pointer ${
              activeCategory === category ? "text-blue-500 font-semibold" : "text-neutral-600"
            }`}
          >
            {category}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {images.map((image) => (
          <div key={image.src} className={`${style.works} relative mr-5 my-3`}>
            <img src={image.src} alt={image.alt} className="w-full h-96 object-cover" />
            <div className={`${style.overlay} absolute inset-0 flex flex-col  text-left p-8  text-white opacity-0 hover:opacity-100 transition-opacity duration-300 bg-blue-500 `}>
             <div>
             <p className="underline mb-5 tracking-[2px]">WORK 2</p>
             <p className=' opacity-80 text-sm'>Animation</p>
             </div>
              <div className="gap-2 text-zinc-800  flex  items-end my-32">
                <div className="first bg-blue-200 p-2 rounded-md">
                  <i className="fa-solid fa-share"></i>
                </div>
                <div className="second flex p-2 rounded-md bg-blue-200">
                  <i className="fa-solid fa-eye mt-1"></i>
                  <p className="underline opacity-90">100</p>
                </div>
                <div className="third flex p-2 rounded-md bg-blue-200">
                  <i className="fa-solid fa-heart mt-1"></i>
                  <p className="underline opacity-90">49</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
