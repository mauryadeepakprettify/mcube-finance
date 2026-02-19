import Image from "next/image";
import Link from "next/link";
import Icon from "../atoms/Icon";

const ProjectCard = ({ _id, title, description, img }) => {
  return (
    <div className="bg-beta group flex md:flex-row flex-col-reverse h-full md:min-h-[266px]">
      <div className="flex flex-1 md:flex-4 flex-col px-4 py-6 md:px-8 md:py-10">
        <div className="flex-1">
          <h3 className="mb-3 text-xl leading-[26px] md:text-2xl md:leading-[30px]">{title}</h3>
          <p className="text-lambda text-[15px] leading-[18px] md:text-base md:leading-[22px]">{description}</p>
        </div>
        <Link
          className="text-primary mt-6 flex items-center gap-2 text-sm font-normal tracking-widest uppercase transition-all duration-300 group-hover:translate-x-2 lg:text-base"
          href={`/project/${_id}`}
        >
          Explore <Icon className="fi-rr-arrow-right text-lg" />
        </Link>
      </div>
      <figure className="md:flex-3 h-[264px] overflow-hidden md:h-full w-full">
        <Image
          className="h-full w-full group-hover:scale-110 transition-all duration-300 ease-in-out object-cover"
          src={`/images/banner/${img}`}
          alt={title}
          width={275}
          height={264}
        />
      </figure>
    </div>
  );
};

export default ProjectCard;
