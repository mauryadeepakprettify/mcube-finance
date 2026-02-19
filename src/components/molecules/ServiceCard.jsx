import Link from "next/link";
import Icon from "../atoms/Icon";
import Image from "next/image";

const ServiceCard = ({ img, label, description, route, className = "" }) => {
  return (
    <div
      className={`group flex h-[220px] flex-col justify-between p-7 pb-12 lg:h-[264px] ${className ? className : "bg-beta"}`}
    >
      <div>
        <div className="mb-3 flex items-start justify-between gap-5">
          <h3 className="text-xl leading-[26px] lg:text-2xl lg:leading-[30px]">
            {label}
          </h3>{" "}
          <Image className="w-[38px] h-[38px] lg:w-[45px] lg:h-[45px]" width={45} height={45} src={`/icons/${img}`} alt={label} />
        </div>
        <p className="text-lambda/80 mb-4 max-w-[300px] text-base leading-[22px]">
          {description}
        </p>
      </div>
      <Link
        className="text-primary flex items-center gap-2 text-sm font-normal tracking-widest uppercase transition-all duration-300 group-hover:translate-x-2 lg:text-base"
        href={`/what-we-do${route}`}
      >
        Explore <Icon className="fi-rr-arrow-right text-lg" />
      </Link>
    </div>
  );
};

export default ServiceCard;
