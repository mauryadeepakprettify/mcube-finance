import Image from "next/image";
import Button from "../atoms/Button";
import Link from "next/link";
import Icon from "../atoms/Icon";

const Hero = ({ img, vid, title, description, route, routeLabel }) => {
  return (
    <section className="relative h-[373px] overflow-hidden before:absolute before:inset-0 before:h-full before:w-full before:bg-[linear-gradient(180deg,rgba(0,0,0,0)_21.76%,rgba(0,0,0,0.7)_82.14%)] before:content-['']">
      {img && (
        <Image
          className="h-full w-full object-cover"
          src={`/images/banner/${img}.svg`}
          alt=""
          width={1920}
          height={1080}
        />
      )}
      {vid && (
        <video
          className="h-full w-full object-cover"
          src={`/video/${vid}.mp4`}
          autoPlay
          loop
          muted
          poster={`/video/${vid}.svg`}
        ></video>
      )}
      <div
        className={`absolute bottom-[6%] left-1/2 -translate-x-1/2 transform p-5 md:bottom-[8%] ${route ? "top-1/2 bottom-auto -translate-y-1/2" : ""}`}
      >
        <h1 className="mb-2 text-center text-[32px] leading-[36px] text-white max-[375px]:text-[28px] max-[375px]:leading-[32px] lg:text-5xl lg:leading-[55px]">
          {title}
        </h1>
        <p className="mx-auto max-w-[420px] text-center text-base leading-[20px] text-white/80 md:text-[18px] md:leading-[24px]">
          {description}
        </p>
        {route && (
          <Link href={route}>
            <Button className="mx-auto mt-4">
              {routeLabel} <Icon className="fi-rr-angle-right" />
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
