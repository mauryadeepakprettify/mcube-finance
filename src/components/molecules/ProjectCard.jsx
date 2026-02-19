import Image from "next/image";
import Link from "next/link";
import Icon from "../atoms/Icon";

const ProjectCard = ({ _id, title, description, img }) => {
  return (
    <div className="bg-beta group flex h-[266px]">
      <div className="flex flex-4 flex-col px-8 py-10">
        <div className="flex-1">
          <h3 className="mb-3 text-2xl leading-[30px]">{title}</h3>
          <p className="text-lambda leading-[22px]">{description}</p>
        </div>
        <Link
          className="text-primary mt-6 flex items-center gap-2 text-sm font-normal tracking-widest uppercase transition-all duration-300 group-hover:translate-x-2 lg:text-base"
          href={`/project/${_id}`}
        >
          Explore <Icon className="fi-rr-arrow-right text-lg" />
        </Link>
      </div>
      <figure className="flex-3">
        <Image
          className="h-full w-full object-cover"
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
