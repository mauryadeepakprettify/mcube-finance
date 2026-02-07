import Image from "next/image";

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="group">
      <figure className="h-[400px] overflow-hidden md:h-[436px]">
        <Image
          className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
          src={`/images/team/${name}.svg`}
          width={380}
          height={436}
          alt={name}
        />
      </figure>
      <div className="p-4 *:text-center">
        <h4 className="text-[20px] leading-[24px] md:text-2xl md:leading-[30px]">
          {name}
        </h4>
        <p className="text-lambda text-base leading-[20px] md:text-lg md:leading-[24px]">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
