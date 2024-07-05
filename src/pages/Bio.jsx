export default function Bio() {
  return (
    <main className="flex w-full  min-h-screen items-center justify-between">
      <div className="flex-grow flex justify-center">
        <img
          className="hidden md:block min-h-full w-[50%] object-cover"
          src="/img/bio.jpg"
          alt="signin"
        />
        <div className="py-[80px] flex flex-col justify-center items-center min-h-screen w-full md:w-[50%]">
          <div className="flex justify-center items-center">
          <div>
            <p className="font-semibold text-[24px] md:text-[32px] text-right pr-[6px]">Gastón</p>
            <p className="font-semibold text-[24px] md:text-[32px] text-right pr-[6px]">BA</p>
          </div>
          <div>
            <p className="font-semibold text-[24px] md:text-[32px] text-left pl-[6px] text-[#F472B6]">Severina</p>
            <p className="font-semibold text-[24px] md:text-[32px] text-left pl-[6px] text-[#F472B6]">1981</p>
          </div>
          </div>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] mt-[12px] text-justify py-[10px] px-[28px]">
            Su formación académica es Magister en Estudios Contemporáneos de las
            Artes por la Universidade Federal Fluminense de Rio de Janeiro,
            también es Especialista en Lenguajes Artísticos Combinados por la
            UNA y Licenciado en Artes Visuales por la misma universidad.
          </p>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] text-justify py-[10px] px-[28px]">
            Desde 2008 se desempeña como docente en las asignaturas OTAV
            Cerámica 1 y Taller Cerámico 2, 3 y 4 en las carreras de Artes
            Visuales del DAVPP-UNA, es también profesor titular del Seminario
            Lenguajes Combinados Regionales en la Especialización en la cual se
            formó y se desempeña también como docente investigador en el
            proyecto “Cuerpo vivo, política y cruce de lenguajes en la Argentina
            desde los años 80 hasta la actualidad” dirigido por el Mgtr. Alfredo
            Rosenbaum.
          </p>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] text-justify py-[10px] px-[28px]">
            Ha participado en varias muestras colectivas y en diferentes
            salones, entre los que se destacan el 25° Salón de Cerámica de
            Avellaneda, el 23° Salón de Nuevos Artistas del Centro Argentino de
            Arte Cerámico donde su obra obtuvo la Mención de Honor del Jurado,
            el 105° Salón Nacional de Artes Visuales, el 11° Salón de Artes
            Visuales del Museo de Arte Contemporáneo de Junín (MACA), entre
            otros. Formo parte de varias muestras colectivas con sus piezas de
            cerámica y de varios eventos de Performance y arte de acción.
          </p>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] text-justify py-[10px] px-[28px]">
            Performer, productor visual, gestor y activador cultural. Las
            prácticas artísticas de Gastón fluctúan en el cruce entre lo
            corporal, lo visual, lo sonoro y lo verbal. El cuerpo carne y el
            cuerpo cerámico, la transformación como instancia de cambio y
            mutación, expandiendo el concepto de diversidad y diversidades.
          </p>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] text-justify py-[10px] px-[28px]">
            También desarrollo mi actividad artística y creativa en mi taller
            particular ubicado en el barrio de Recoleta, trabajando con
            distintos materiales y medios. Formo parte de dos grupos creativos y
            colectivos, donde trabajamos distintas problemáticas y
            materialidades: Zafarrancho (producción cerámica de objetos
            contemporáneos) y Armando Bondi (grupo de producción critica de
            ideas e imágenes).
          </p>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] mb-[12px] text-justify py-[10px] px-[28px]">
            He participado de varias exposiciones y muestras tanto individuales
            como colectivas, siempre dentro de mi país. A partir de este año, en
            mi trabajo se abrió un nuevo territorio y espacio en Brasil con
            algunas intervenciones urbanas tanto en la Ciudad de Sao Paulo como
            en la Ciudad de Río de Janeiro.
          </p>
        </div>
      </div>
    </main>
  );
}
