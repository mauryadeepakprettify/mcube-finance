import Image from "next/image";

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="group">
      <figure className="h-[436px] overflow-hidden">
        <Image
          className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
          src={`/images/team/${name}.svg`}
          width={380}
          height={436}
          alt={name}
        />
      </figure>
      <div className="p-4 *:text-center">
        <h4 className="text-2xl">{name}</h4>
        <p className="text-lambda text-lg leading-[24px]">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
