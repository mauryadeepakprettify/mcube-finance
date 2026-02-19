import Image from "next/image";

const Vision = () => {
  return (
    <section className="relative h-[373px] before:absolute before:inset-0 before:h-full before:w-full before:bg-[linear-gradient(270deg,rgba(0,0,0,0)_38.95%,rgba(0,0,0,0.7)_77.81%)] before:content-[''] md:h-auto">
      <Image
        className="h-full w-full object-cover"
        src="/images/banner/skyline.svg"
        alt="Vision"
        width={1280}
        height={553}
      />
      <div className="absolute top-1/2 right-6 left-6 -translate-y-1/2 transform lg:left-12">
        <h2 className="mb-3 text-center text-[32px] leading-[36px] text-white max-[375px]:text-[28px] max-[375px]:leading-[32px] md:mb-4 md:text-left lg:text-5xl lg:leading-[55px]">
          Our Vision
        </h2>
        <p className="text-center text-base leading-[20px] text-white/70 md:max-w-[400px] md:text-left md:text-base md:leading-[24px] lg:max-w-[450px]">
          We want to develop long term partnerships with our clients by offering
          innovative and cost effective solutions to their most pressing
          problems. MCube’s services are based on values of honesty, integrity
          and consistency, and treating its clients and employees with dignity
          and respect.
        </p>
      </div>
    </section>
  );
};

export default Vision;
