import Image from "next/image";

const Vision = () => {
  return (
    <section className="relative h-[calc(60vh-76px)] before:absolute before:inset-0 before:h-full before:w-full before:bg-[linear-gradient(270deg,rgba(0,0,0,0)_38.95%,rgba(0,0,0,0.7)_77.81%)] before:content-[''] md:h-[calc(50vh-76px)] lg:h-[calc(50vh-109px)] xl:h-[calc(100vh-109px)]">
      <Image
        className="h-full w-full object-cover"
        src="/images/banner/skyline.svg"
        alt="Vision"
        width={1280}
        height={553}
      />
      <div className="absolute top-1/2 right-6 left-6 -translate-y-1/2 transform lg:left-12">
        <h2 className="mb-3 md:mb-4 text-[32px] leading-[36px] md:text-left text-center text-white max-[375px]:text-[28px] max-[375px]:leading-[32px] lg:text-5xl lg:leading-[55px]">Our Vision</h2>
        <p className="md:leading-[24px] text-base leading-[20px] md:text-left text-center md:text-base  text-white/70 md:max-w-[400px] lg:max-w-[450px]">
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
