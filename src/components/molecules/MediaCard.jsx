import Image from "next/image";
import Link from "next/link";

const MediaCard = ({ data }) => {
  const { _id, title, img, date, doc } = data;
  return (
    <Link
      target="_blank"
      className="group block border-t border-[#E4E4E4] py-6"
      href={`/doc/${doc}`}
    >
      <h3 className="mb-4 text-xl leading-[26px]">{title}</h3>
      <p className="text-lambda mb-7">{date}</p>

      <figure className="h-[308px] w-full overflow-hidden">
        <Image
          className="size-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
          src={`/images/media/${img}`}
          alt={title}
          width={380}
          height={308}
        />
      </figure>
    </Link>
  );
};

export default MediaCard;
