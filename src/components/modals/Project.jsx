import React, { useState } from 'react'
import githubLogo from "../../assets/github.svg";
import siteLogo from "../../assets/internet.svg";
import cross from "../../assets/cross.svg";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, FreeMode ,Navigation} from 'swiper/modules';
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/free-mode"
const Project = ({proj,index,isDarkMode}) => {
  const [preview, setPreview] = useState(false);
  return (
    <div key={index} className="border relative p-4 rounded mb-3 ">
              <div className="grid grid-cols-[4rem_minmax(0,1fr)_auto] items-center gap-4 mb-3">
                <div
                  aria-hidden="true"
                  className="w-16 h-16 shrink-0 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold"
                >
                  {proj.mark}
                </div>
                <h2 className={`text-xl lg:text-2xl font-semibold leading-snug ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {proj.name}
                </h2>
                <div className="flex flex-row gap-3 justify-end">
                  {proj.githubLink && (
                    <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="my-auto">
                      <img
                        src={githubLogo}
                        alt="GitHub repository"
                        className="w-10 h-10 my-auto"
                      />
                    </a>
                  )}
                  {proj.liveLink && (
                    <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="my-auto">
                      <img src={siteLogo} className="w-10 h-10" alt="Live project" />
                    </a>
                  )}
                </div>
              </div>
              <p className="italic mb-2">{proj.briefDesc}</p>
              <h3 className={`font-bold mt-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Description:</h3>
              <ul className="list-disc list-inside mb-2">
                {proj.desc.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Technologies:</h3>
              <p className="mb-2 flex justify-between items-center">
                <span>{proj.tech.join(", ")}</span>{" "}
                <span>
                  {proj.previewImages.length > 0 && (
                    <button
                      onClick={() => setPreview(true)}
                      className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-all duration-200"
                    >
                      Preview
                    </button>
                  )}
                </span>
              </p>
              <div className="flex justify-between"></div>
              <div className={` bg-white w-full h-full p-8 ${preview?"block" :"hidden"} flex flex-col gap-4 absolute top-0 left-0`}>
                <img
                  src={cross}
                  alt="Close"
                  className="absolute hover:cursor-pointer top-5 flex right-5 w-5 h-5"
                  onClick={() => setPreview(false)}
                />
                <h2 className='font-semibold'>{proj.name} Preview</h2>
                <Swiper
      slidesPerView={1}
      spaceBetween={25}
     
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Autoplay]}
      className="w-full "
    >
        {proj.previewImages.map((img, idx) => (
            <SwiperSlide className="h-auto w-full" key={idx}>
            <img src={img} className='w-fit' alt="preview"/>
            </SwiperSlide>
        ))}
    </Swiper>
                
          </div>
            </div>
  )
}

export default Project