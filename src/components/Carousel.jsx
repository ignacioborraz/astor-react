import { useState } from "react";
import Arrow from "./Arrow";

export default function Carousel() {
  const [counter, setCounter] = useState(0);
  const categories = [
    {
      category: "Bio",
      description: "Descubre quién soy y cómo llegué hasta aquí",
      to: "/bio",
    },
    {
      category: "Trabajos",
      description: "Obnubilate con lo que hago y me apasiona",
      to: "/work",
    },
    {
      category: "Contacto",
      description: "Escríbeme para más ideas y trabajo",
      to: "/contact",
    },
  ];

  let next = () =>
    counter !== categories.length - 1 ? setCounter(counter + 1) : setCounter(0);
  let prev = () =>
    counter !== 0 ? setCounter(counter - 1) : setCounter(categories.length - 1);

  const d_left =
    "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  const d_right =
    "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";

  return (
    <div
      className="items-center justify-between rounded-lg mt-5 hidden px-5 md:flex md:h-56 md:w-full bg-[#F9A8D4]" /* style={{ backgroundColor: categories[counter]?.hover }} */
    >
      <Arrow d={d_left} onClick={prev} />
{/*       <img
        className="object-cover w-[180px] lg:w-[200px] self-end "
        src={categories[counter]?.character_photo}
      />
      <img
        className="object-cover w-[150px] mb-12 self-end"
        src={categories[counter]?.cover_photo}
      /> */}
      <div className="w-[200px] lg:w-[300px] xl:w-[450px] text-l p-2 text-white xl:px-10">
        <h3 className="text-2xl text-gray-700">
          {categories[counter]?.category.toUpperCase()}
        </h3>
        <p className="text-xs xl:text-sm text-gray-700">
          {categories[counter]?.description}
        </p>
      </div>
      <Arrow d={d_right} onClick={next} />
    </div>
  );
}
