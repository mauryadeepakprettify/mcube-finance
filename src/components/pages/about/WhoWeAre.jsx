"use client";
import Icon from "@/components/atoms/Icon";
import Image from "next/image";
import { useState } from "react";

const WhoWeAre = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const { title, description } = data || {};

  return (
    <section className="py-8 lg:py-16">
      <div className="container flex max-w-6xl! flex-col gap-6 md:flex-row md:gap-0 lg:gap-10 xl:gap-28">
        <div className="flex shrink-0 items-center justify-center md:w-[400px]">
          <Image
            src="/images/banner/york.svg"
            alt="Who We Are"
            width={347}
            height={384}
            className="h-[250px] w-[250px] bg-center bg-no-repeat lg:h-[384px] lg:w-[347px]"
            style={{
              WebkitMaskImage: "url('/icons/m_large.svg')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: "url('/icons/m_large.svg')",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
          />
        </div>
        <div className="flex flex-col justify-center md:flex-1">
          <h2 className="mb-3 text-center text-[28px] leading-[28px] md:text-left lg:mb-5 lg:text-5xl lg:leading-[48px]">
            {title}
          </h2>
          <p className="text-lambda mb-4 text-center leading-[24px] md:text-left">
            {isReadMore ? description : description.slice(0, 400) + "..."}
          </p>
          <button
            disabled={description?.length < 400}
            onClick={() => setIsReadMore(!isReadMore)}
            className="text-primary mx-auto w-fit cursor-pointer text-sm tracking-[2px] uppercase md:mx-0 md:text-left md:text-base"
          >
            {isReadMore ? "Read Less" : "Read More"}{" "}
            <Icon
              className={`fi-rr-angle-small-down align-middle transition-all duration-300 ease-in-out ${isReadMore ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

const data = {
  title: "Who We are",
  description:
    "MCube operates a proven model that builds on the knowledge gained through a predecessor company, Helix Financial Group LLC, co-founded in 2004 by MCube partners and sold to BlackRock in 2010. Helix was one of the seminal companies providing off-shore commercial real estate expertise and developed a deep understanding of US and European real estate markets.The India leadership team is comprised of Helix alumni and has extensive experience in hiring, training and developing real estate analytical talent.",
};
