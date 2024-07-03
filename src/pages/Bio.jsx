export default function Bio() {
  return (
    <main className="flex w-full md:w-11/12 2xl:w-[1375px] min-h-screen items-center justify-between">
      <img
        className="hidden md:block md:absolute md:top-0 md:left-0 h-screen w-[50%] object-cover"
        src="/img/bio.jpg"
        alt="signin"
      />
      <div className="flex flex-col md:absolute md:top-0 md:left-[50%] justify-center items-center h-screen w-full md:w-[50%]">
        <p className="font-semibold text-[32px] text-center">
          Quién <span className="text-[#F472B6]">soy</span>?
        </p>
        <p className="text-[13px] md:text-[15px] lg:text-[17px] mt-[12px] text-justify py-[10px] px-[28px]">
          Soy Gastón Severina, productor visual, nací en la Ciudad de Nueve de
          Julio en la Provincia de Buenos Aires en la República Argentina. Desde
          el año 2000 vivo y trabajo en la Ciudad Autónoma de Buenos Aires,
          donde me forme como Técnico en Cerámica y Licenciado en Artes Visuales
          con orientación en Artes del Fuego, en la Universidad Nacional del
          Arte (UNA), lugar donde actualmente también trabajo con Docente en la
          cátedra de Cerámica, en las asignaturas OTAV Cerámica 1 y Taller
          Cerámico 2, 3 y 4.
        </p>
        <p className="text-[13px] md:text-[15px] lg:text-[17px] text-justify py-[10px] px-[28px]">
          También desarrollo mi actividad artística y creativa en mi taller
          particular ubicado en el barrio de Recoleta, trabajando con distintos
          materiales y medios. Formo parte de dos grupos creativos y colectivos,
          donde trabajamos distintas problemáticas y materialidades: Zafarrancho
          (producción cerámica de objetos contemporáneos) y Armando Bondi (grupo
          de producción critica de ideas e imágenes).
        </p>
        <p className="text-[13px] md:text-[15px] lg:text-[17px] mb-[12px] text-justify py-[10px] px-[28px]">
          He participado de varias exposiciones y muestras tanto individuales
          como colectivas, siempre dentro de mi país. A partir de este año, en
          mi trabajo se abrió un nuevo territorio y espacio en Brasil con
          algunas intervenciones urbanas tanto en la Ciudad de Sao Paulo como en
          la Ciudad de Río de Janeiro.
        </p>
      </div>
    </main>
  );
}
