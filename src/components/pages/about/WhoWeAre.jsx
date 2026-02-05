"use client";
import Icon from "@/components/atoms/Icon";
import Image from "next/image";
import { useState } from "react";

const WhoWeAre = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const { title, description } = data || {};

  return (
    <section className="py-8 lg:py-16">
      <div className="container flex max-w-6xl! gap-6 lg:gap-10 xl:gap-28">
        <div className="flex w-[400px] shrink-0 items-center justify-center">
          <Image
            src="/images/banner/york.svg"
            alt="Who We Are"
            width={347}
            height={384}
            className="bg-center bg-no-repeat"
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
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="mb-4 text-5xl font-normal">{title}</h2>
          <p className="text-lambda mb-5 leading-[24px]">
            {isReadMore ? description : description.slice(0, 400) + "..."}
          </p>
          <button
            disabled={description?.length < 400}
            onClick={() => setIsReadMore(!isReadMore)}
            className="text-primary w-fit cursor-pointer tracking-[2px] uppercase"
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
