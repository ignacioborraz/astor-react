import { useState } from "react";
import Arrow from "./Arrow";

export default function Carousel() {
  const [counter, setCounter] = useState(0);
  const categories = [
    {
      category: "Cuerpo (mi libro de artista)",
      description:
        "Punto de partida para reflexionar sobre la existencia, la capacidad de sentir y permitir que fluya la experiencia inter-natural. Es a través de él que experimentamos la pulsión de vida, de deseo y el dolor. Bitácora de la experiencia humana.",
    },
    {
      category: "Materia (la que tocan mis manos)",
      description:
        "Calidad de cosa, esencia tangible, objeto y naturaleza concreta. Estado de la sustancia que alguna vez cósmica abrazo todo. ¿Qué sería de nuestra existencia sin ella? Sin materia no habría nada, ni siquiera el vacío tendría sentido.",
    },
    {
      category: "Espacio (mi hoja en blanco)",
      description:
        "Es un vacío-lleno de preguntas, más que de respuestas, de conceptos, más que de materia y que al habitarlo define ideológicamente nuestro estar. Es un lugar (in)finito donde la creatividad germina y se transforma libremente. En él se entablan profundas relaciones de interdependencia entre el cuerpo y la experiencia.",
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
      <div className="w-3/4 text-l p-2 text-white xl:px-10">
        <h3 className="text-xl lg:text-2xl xl:text-3xl text-gray-700">
          {categories[counter]?.category.toUpperCase()}
        </h3>
        <p className="text-sm lg:text-lg text-gray-700">
          {categories[counter]?.description}
        </p>
      </div>
      <Arrow d={d_right} onClick={next} />
    </div>
  );
}
