import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import worksJson from "../assets/works.json";
import CardWork from "../components/CardWork";

export default function WorkDetail() {
  
  const { wid } = useParams()
  const one = worksJson.find(each=>each._id =wid)

  const navigate = useNavigate();

  return (
    <main className="flex flex-col w-full min-h-screen items-center justify-start">
      <span className="w-full h-[400px] lg:h-[540px] bg-[url('/img/details.jpg')] bg-cover bg-top grayscale-70 absolute -z-10" />
      <h3 className="text-[36px] lg:text-[64px] text-white font-bold font-montserrat mt-[140px]">
        {one.title}
      </h3>
      <div className="flex-grow rounded-[10px_10px_0_0] w-full md:w-[720px] lg:w-11/12 2xl:w-[1375px] flex flex-col justify-start items-center bg-white">
      ACA VAN LAS FOTOS Y O VIDEOS DE ESTO
        {/* <form className="w-full flex justify-center my-5" ref={current_checks}>
          {categories.map((each) =>
            checks.includes(each._id) ? (
              <label
                className="rounded-full text-[14px] w-[70px] h-[35px] flex justify-center items-center mx-3"
                key={each._id}
                style={{ color: each.hover, backgroundColor: each.color }}
              >
                {each.name}
                <input
                  onClick={handle_checks}
                  type="checkbox"
                  className="hidden"
                  name={each._id}
                  id={each._id}
                />
              </label>
            ) : (
              <label
                className="rounded-full text-[14px] w-[70px] h-[35px] flex justify-center items-center mx-3"
                key={each._id}
                style={{ color: each.color, backgroundColor: each.hover }}
              >
                {each.name}
                <input
                  onClick={handle_checks}
                  type="checkbox"
                  className="hidden"
                  name={each._id}
                  id={each._id}
                />
              </label>
            )
          )}
        </form> */}
        {/* <section className="flex flex-grow flex-wrap justify-center items-start m-3">
          {worksJson.map((each) => (
            <CardWork key={each.id} work={each} />
          ))}
        </section> */}
      </div>
    </main>
  );
}
