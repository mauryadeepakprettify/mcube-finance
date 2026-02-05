"use client";
import Image from "next/image";
import Icon from "../atoms/Icon";
import Link from "next/link";
import { useState } from "react";

const ServiceListCard = ({ data, index = 0 }) => {
  const { _id, title, description, features, img, route } = data;

  const [activeIndex, setActiveIndex] = useState(0);
  const isActive = activeIndex === index;

  const handleActiveIndex = () => {
    if (isActive) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex gap-18 border-black/20 py-12 not-last:border-b">
      <figure className="flex-3">
        <Image
          className="h-full w-full object-cover"
          src={`/images/services/${img}`}
          alt={title}
          width={480}
          height={384}
        />
      </figure>
      <div className="flex-4">
        <h3
          onClick={handleActiveIndex}
          className="relative cursor-pointer mb-5 text-3xl"
        >
          {title}
          <button
            className={`absolute top-1/2 right-0 -translate-y-1/2 ${isActive ? "rotate-0" : "rotate-180"} ease transition-all duration-300`}
          >
            <Icon className="fi-rr-angle-up text-lambda text-xl" />
          </button>
        </h3>
        <p className="text-lambda mb-7 text-xl leading-[26px] max-w-[90%]">
          {description}
        </p>
        <Link
          className="text-primary flex items-center gap-2 tracking-widest uppercase transition-all duration-300 hover:translate-x-2"
          href={`/what-we-do/${route}`}
        >
          Explore <Icon className="fi-rr-arrow-right text-xl" />
        </Link>

        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isActive ? "my-7 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} `}
        >
          <ul className="marker:text-primary *:text-lambda ml-6 grid list-disc grid-cols-2 gap-5 *:text-lg *:leading-[26px] marker:text-2xl">
            {features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceListCard;
