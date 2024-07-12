import Carousel from "../components/Carousel";
import Welcome from "../components/Welcome";
import info from "../utils/info";

export default function Index() {
  let welcome = {
    title: "Live the emotion of the manga",
    subt1: "Find the perfect manga for you",
    subt2: "#MingaForever 🔥",
  };
  return (
    <main className="flex flex-col md:pt-20 w-full md:w-11/12 2xl:w-[1375px] min-h-screen items-center justify-between">
      <Carousel />
      <Welcome title="Gastón Severina" subt1="obra y vida" />
    </main>
  );
}
