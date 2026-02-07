"use client";
import { useDispatch, useSelector } from "react-redux";
import { setAccordionIndex } from "@/store/slices/uiSlice";
import Icon from "../atoms/Icon";

const Accordion = ({ data, index }) => {
  const dispatch = useDispatch();
  const { accordionIndex } = useSelector((state) => state.ui);
  const { _id, title, description, img } = data || {};

  const isOpen = accordionIndex === index;

  const handleAccordionClick = (i) => {
    dispatch(setAccordionIndex(i));
  };

  return (
    <div
      onClick={() => handleAccordionClick(index)}
      className={`${isOpen ? "border-primary" : "border-[#D9D9D9]"} cursor-pointer border-l-2 px-6 py-3 md:px-8 md:py-4`}
    >
      <div
        className={`flex items-center justify-between ${isOpen ? "mb-2 md:mb-4" : ""}`}
      >
        <h3 className="text-[18px] leading-[28px] md:text-[20px] md:leading-[30px]">
          {title}
        </h3>
        <Icon
          className={`${isOpen ? "fi-rr-minus" : "fi-rr-plus"} text-primary`}
        />
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-lambda text-base leading-[20px] md:leading-[24px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
