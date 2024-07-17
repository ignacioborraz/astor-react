/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";

export default function ButtonNav({ each }) {
  return (
    <Anchor
      to={each.to}
      className="text-[16px] lg:text-[18px] 2xl:text-[20px] w-11/12 my-1 p-2 text-gray-100 hover:bg-white hover:text-[#F472B6] hover:rounded-lg"
    >
      {each.title}
    </Anchor>
  );
}
