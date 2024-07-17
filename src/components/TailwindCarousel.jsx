import { Carousel } from "@material-tailwind/react";

export default function CarouselDefault({ show, setShow, photos }) {
  return (
    show && (
      <div className="bg-black w-full h-screen fixed z-10 top-0 right-0">
        <span className="rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center fixed z-30 top-4 right-4">
          <svg
            className="h-7 w-7"
            onClick={() => setShow(false)}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </span>
        <Carousel className="rounded-md h-screen w-full fixed z-10 top-0 left-0">
          {photos.map((each, index) => (
            <img
              src={each}
              alt={each}
              key={index}
              className="h-full w-full object-contain z-20"
            />
          ))}
        </Carousel>
      </div>
    )
  );
}
