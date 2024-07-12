export default function Bio() {
  return (
    <main className="flex w-full min-h-screen items-center justify-between">
      <div className="flex-grow flex justify-center">
        <img
          className="hidden md:block min-h-screen xl:h-screen w-[50%] object-cover"
          src="/img/bio.jpg"
          alt="bio"
        />
        <div className="py-[80px] flex flex-col justify-center items-center min-h-screen w-full md:w-[50%]">
          <div className="flex justify-center items-center">
            <div>
              <p className="font-semibold text-[24px] md:text-[32px] text-right pr-[6px]">
                Gastón
              </p>
              <p className="font-semibold text-[24px] md:text-[32px] text-right pr-[6px]">
                BA
              </p>
            </div>
            <div>
              <p className="font-semibold text-[24px] md:text-[32px] text-left pl-[6px] text-[#F472B6]">
                Severina
              </p>
              <p className="font-semibold text-[24px] md:text-[32px] text-left pl-[6px] text-[#F472B6]">
                1981
              </p>
            </div>
          </div>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] mt-[12px] text-justify py-[10px] px-[28px]">
            Mi formación académica incluye una Maestría en Estudios
            Contemporáneos de las Artes por la Universidade Federal Fluminense
            de Río de Janeiro. También soy Especialista en Lenguajes Artísticos
            Combinados por la UNA y Licenciado en Artes Visuales por la misma
            universidad.
          </p>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] text-justify py-[10px] px-[28px]">
            Desde 2008, me desempeño como docente en las asignaturas OTAV
            Cerámica 1 y Taller Cerámico 2, 3 y 4 en las carreras de Artes
            Visuales del DAVPP-UNA. Además, soy profesor titular del Seminario
            Lenguajes Combinados Regionales en la Especialización en la cual me
            formé. También trabajo como docente investigador en el proyecto
            “Cuerpo vivo, política y cruce de lenguajes en la Argentina desde
            los años 80 hasta la actualidad” dirigido por el Mgtr. Alfredo
            Rosenbaum.
          </p>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] text-justify py-[10px] px-[28px]">
            He participado en varias muestras colectivas y en diferentes
            salones, entre los que se destacan el 25° Salón de Cerámica de
            Avellaneda, el 23° Salón de Nuevos Artistas del Centro Argentino de
            Arte Cerámico, donde mi obra obtuvo la Mención de Honor del Jurado,
            el 105° Salón Nacional de Artes Visuales, y el 11° Salón de Artes
            Visuales del Museo de Arte Contemporáneo de Junín (MACA), entre
            otros. Formé parte de varias muestras colectivas con mis piezas de
            cerámica y de varios eventos de Performance y arte de acción.
          </p>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] text-justify py-[10px] px-[28px]">
            Soy performer, productor visual, gestor y activador cultural. Mis
            prácticas artísticas fluctúan en el cruce entre lo corporal, lo
            visual, lo sonoro y lo verbal. El cuerpo carne y el cuerpo cerámico,
            la transformación como instancia de cambio y mutación, expanden el
            concepto de diversidad y diversidades.
          </p>
        </div>
      </div>
    </main>
  );
}
