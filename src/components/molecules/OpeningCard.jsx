"use client";
import { useState } from "react";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

const OpeningCard = ({ data, applicationRef }) => {
    const { _id, opening, location, type, details } = data;

    const [isOpen, setIsOpen] = useState(false);

    const handleApplyNow = (e) => {
      e.stopPropagation();
      applicationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

  return (
    <div className="border-t border-[#EFEFEF]">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-between py-6"
      >
        <div>
          <p className="mb-2 text-base leading-[24px]">
            {location} | {type}
          </p>
          <h3 className="mb-1 text-[20px] leading-[24px]">{opening}</h3>
          <p className="text-lambda text-base leading-[24px]">{type}</p>
        </div>

        <div className="flex items-center gap-10">
          <Button
            onClick={handleApplyNow}
          >
            Apply Now
          </Button>
          <Icon
            className={`fi-rr-angle-down transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`${
          isOpen
            ? "grid-rows-[1fr] border-t border-[#EFEFEF] py-6 opacity-100 "
            : "grid-rows-[0fr] opacity-0"
        } grid transition-all duration-300 ease-in-out`}
      >
        <article
          dangerouslySetInnerHTML={{ __html: details }}
          className="prose prose-li:text-lambda prose-p:text-lambda min-w-full overflow-hidden leading-snug *:font-normal"
        />
      </div>
    </div>
  );
};

export default OpeningCard;
