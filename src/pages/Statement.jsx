export default function Statement() {
  return (
    <main className="flex w-full  min-h-screen items-center justify-between">
      <div className="flex-grow flex justify-center">
      <img
          className="hidden md:block min-h-screen 3xl:h-screen w-[50%] object-cover"
          src="/img/statement.jpg"
          alt="statement"
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
            Mi trabajo es multidireccional, no puedo quedarme en un solo lugar
            de investigación, de práctica o de experimentación. Mi cuerpo, la
            cerámica y el espacio son evidentemente la materia prima para mi
            producción de sentido. Trabajo simultáneamente, siempre pensando, en
            esta relación entre cuerpo-materia-espacio, como una triangulación
            conceptual que, al unirse y formar un triángulo, se crea una
            interioridad topológica contenedora donde deposito el deseo, la
            petit a lacaniana.
          </p>
          <img className='w-[50%] max-w-[250px] py-[10px]' src="/img/esquema.png"/>
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
          Mi compromiso social y la curiosidad me llevan más allá de un solo tema o exploratoria conceptual y estética. Pertenecer al colectivo de las diversidades LGBTIQA+, militar nuestros derechos y activar nuestra visibilidad, me ha impulsado a trabajar poniendo el foco en varios aspectos de este universo.</p>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] text-justify py-[10px] px-[28px]">
          Soy un productor se sentido multidisciplinar, aunque ese término ya me resulta un poco acartonado. Como contemporáneo, no me detengo en el archivo, sino que activo el repertorio, pongo el cuerpo y la materia en acción, para decir, para mostrar y en ese acontecimiento simbólico y semántico, interpelarte.
          </p>
        </div>
      </div>
    </main>
  );
}
