/* eslint-disable react/prop-types */
import TailwindCarousel from "./TailwindCarousel";
import { useState } from "react";

export default function CardWork({ work }) {
  const [show, setShow] = useState(false)
  return (
    <>
      <div
        className="bg-white w-[320px] h-[160px] lg:w-[400px] lg:h-[200px] hover:bg-gray-200 m-3 flex justify-between items-center rounded-lg drop-shadow-md hover:drop-shadow-xl cursor-pointer"
        onClick={()=>setShow(true)}
      >
        <span
          className="w-2 h-[120px] lg:h-[160px]"
          style={{ backgroundColor: work.color }}
        />
        <span className="flex-grow ms-3">
          <p className="text-[16px] lg:text-[22px] font-medium text-start font-montserrat">
            {work.title}
          </p>
          <p
            className="text-[12px] lg:text-[18px] font-medium text-start font-montserrat"
            style={{ color: work.color }}
          >
            {work.section}
          </p>
        </span>
        <img
          className="w-[140px] h-[160px] lg:w-[190px] lg:h-[210px] object-cover rounded-[50%_0.5rem_0.5rem_50%]"
          src={work.main_photo}
          alt={work.title}
        />
      </div>
      <TailwindCarousel show={show} setShow={setShow} photos={work.photos} />
    </>
  );
}
