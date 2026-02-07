import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  return (
    <section className="relative bg-linear-to-r from-[#FAFAFA] to-[#E0E0E0] py-8 lg:py-16">
      <Image
        src="/vector/dot.svg"
        alt=""
        width={180}
        height={150}
        className="absolute bottom-0 left-0 z-10 hidden object-contain md:block"
      />
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-2  lg:gap-10 xl:gap-32">
        <div className="">
          <span className="text-primary mb-3 block text-center text-sm uppercase md:text-left lg:mb-5 lg:text-base">
            About MCube Financial
          </span>
          <h2 className="mb-3 text-center text-[28px] leading-[28px] md:text-left lg:mb-5 lg:text-5xl lg:leading-[48px]">
            Maximize Resources. Minimize Costs. Multiply Volume.
          </h2>
          <p className="text-center leading-[24px] text-black/70 md:text-left">
            MCube operates a proven model that builds on the knowledge gained
            through a predecessor company, Helix Financial Group LLC, co-founded
            in 2004 by MCube partners and sold to BlackRock in 2010. Helix was
            one of the seminal companies providing off-shore commercial real
            estate expertise and developed a deep understanding of US and
            European real estate markets.
          </p>
          <div className="mt-2 flex flex-col-reverse items-center justify-center gap-4 md:mt-6 md:flex-row md:justify-start md:gap-8 lg:mt-8 lg:gap-12 xl:gap-20">
            <Link className="z-20" href="/about">
              <Button className="text-nowrap">
                About MCube Financial <Icon className="fi-rr-angle-right" />
              </Button>
            </Link>
            <div className="flex flex-row items-center gap-3 md:flex-col md:items-start md:gap-0">
              <span className="text-4xl lg:text-5xl">20+</span>
              <p className="text-sm lg:text-base">Years of Experience</p>
            </div>
          </div>
        </div>
        <figure className="hidden md:block">
          <Image
            src="/images/banner/polls.svg"
            alt=""
            width={518}
            height={503}
            className="object-contain"
          />
        </figure>
      </div>
    </section>
  );
};

export default Intro;
