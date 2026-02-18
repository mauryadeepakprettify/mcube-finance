"use client";
import Image from "next/image";
import Icon from "../atoms/Icon";
import Link from "next/link";

const ServiceListCard = ({ data, index = 0, activeIndex, setActiveIndex }) => {
  const { _id, title, description, features, img, route } = data;

  const isActive = activeIndex === index;

  const handleActiveIndex = () => {
    if (isActive) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex flex-col gap-5 lg:gap-18 border-black/20 py-12 not-last:border-b lg:flex-row">
      <figure className="flex-3">
        <Image
          className="h-full w-full object-cover transition-all duration-300 ease-in-out"
          src={`/images/services/${img}`}
          alt={title}
          width={480}
          height={384}
        />
      </figure>
      <div className="flex-4">
        <h3
          onClick={handleActiveIndex}
          className="relative mb-3 md:mb-5 cursor-pointer text-2xl md:text-3xl"
        >
          {title}
          <button
            className={`absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer ${isActive ? "rotate-0" : "rotate-180"} ease transition-all duration-300`}
          >
            <Icon className="fi-rr-angle-up text-lambda text-xl" />
          </button>
        </h3>
        <p className="text-lambda mb-4 md:mb-7 max-w-[90%] text-lg leading-[22px] md:text-xl md:leading-[26px]">
          {description}
        </p>
        <Link
          className="text-primary flex items-center gap-2 tracking-widest uppercase transition-all duration-300 hover:translate-x-2"
          href={`/what-we-do/${route}`}
        >
          Explore <Icon className="fi-rr-arrow-right text-xl" />
        </Link>

        <div
          className={`grid transition-all duration-300 ease-in-out ${isActive ? "my-5 md:my-7 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} `}
        >
          <ul className="marker:text-primary *:text-lambda ml-6 grid list-disc grid-cols-2 gap-8 md:gap-6 *:text-base *:leading-[22px] md:text-lg md:leading-[26px] marker:text-2xl">
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
