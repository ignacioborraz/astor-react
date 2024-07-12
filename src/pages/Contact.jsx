export default function Contact() {
  return (
    <main className="flex w-full min-h-screen items-center justify-between">
      <div className="flex-grow flex justify-center relative">
        <img
          className="-z-10 h-screen w-full md:w-[50%] object-cover absolute md:relative"
          src="/img/astor.jpg"
          alt="bio"
        />
        <div className="py-[80px] flex flex-col justify-center items-center h-screen w-full md:w-[50%]">
          <div className="flex justify-center items-center">
            <div>
              <p className="text-[20px] md:text-[24px] text-right pr-[6px]">
                Por mail:
              </p>
              <p className="text-[20px] md:text-[24px] text-right pr-[6px]">
                Por IG:
              </p>
            </div>
            <div>
              <a href="mailto:gasto.severina@gmail.com" className="block text-[22px] 2xl:text-[24px] text-left pl-[6px] text-[#F472B6]">
                gasto.severina@gmail.com
              </a>
              <a href="https://www.instagram.com/astorsever/" className="block text-[22px] 2xl:text-[24px] text-left pl-[6px] text-[#F472B6]">
                @astorsever
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
