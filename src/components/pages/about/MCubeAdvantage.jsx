"use client";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import { useModal } from "@/hooks/useModal";
import Image from "next/image";
import { useState } from "react";

const MCubeAdvantage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { openModal } = useModal();

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="bg-beta py-8 lg:py-16">
      <div className="container max-w-6xl!">
        <h2 className="text-5xl">MCube Advantage</h2>
        <div className="mt-12">
          <ul className="flex justify-between gap-4 border-b border-[#D9D9D9]">
            {data?.map(({ _id, title }, index) => {
              const isActive = activeTab === index;
              return (
                <li
                  onClick={() => handleTabClick(index)}
                  className={`before:bg-primary relative cursor-pointer pb-5 text-xl leading-[30px] before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:transition-all before:duration-300 before:content-[''] ${isActive ? " text-black before:w-full" : "text-black/40"}`}
                  key={_id}
                >
                  {title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-28 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-4xl">{data[activeTab].title}</h3>
            <p className="text-lambda mb-8 leading-[24px]">
              {data[activeTab].description}
            </p>
            <Button onClick={() => openModal("enquire")} className="w-fit">
              Enquire Now <Icon className="fi-rr-angle-right" />
            </Button>
          </div>
          <figure>
            {data[activeTab].vid && (
              <video
                className="h-[381px] w-full object-cover"
                src={`/video/${data[activeTab].vid}`}
                autoPlay
                loop
                muted
                poster="/video/conferance.svg"
              ></video>
            )}
            {data[activeTab].img && (
              <Image
                height={381}
                width={529}
                className="h-[381px] w-full object-cover"
                src={`/video/${data[activeTab].img}`}
                alt=""
              />
            )}
          </figure>
        </div>
      </div>
    </section>
  );
};

export default MCubeAdvantage;

const data = [
  {
    _id: 1,
    title: "Expertise",
    description:
      "Senior management in the US has substantial experience across all property types from both a principal and a debt point of view. This intellectual capital is supported by a delivery team in Gurgaon, India, providing the ability to delivery larger scale projects under tight timelines and respond across all time zones in real time.",
    img: "conferance.svg",
  },
  {
    _id: 2,
    title: "Quality & Efficiency",
    description:
      "Senior management in the US has substantial experience across all property types from both a principal and a debt point of view. This intellectual capital is supported by a delivery team in Gurgaon, India, providing the ability to delivery larger scale projects under tight timelines and respond across all time zones in real time.",
    vid: "conferance.mp4",
  },
  {
    _id: 3,
    title: "Time Zone",
    description:
      "Senior management in the US has substantial experience across all property types from both a principal and a debt point of view. This intellectual capital is supported by a delivery team in Gurgaon, India, providing the ability to delivery larger scale projects under tight timelines and respond across all time zones in real time.",
    vid: "conferance.mp4",
  },
  {
    _id: 4,
    title: "Pricing",
    description:
      "Senior management in the US has substantial experience across all property types from both a principal and a debt point of view. This intellectual capital is supported by a delivery team in Gurgaon, India, providing the ability to delivery larger scale projects under tight timelines and respond across all time zones in real time.",
    vid: "conferance.mp4",
  },
  {
    _id: 5,
    title: "Leverage",
    description:
      "Senior management in the US has substantial experience across all property types from both a principal and a debt point of view. This intellectual capital is supported by a delivery team in Gurgaon, India, providing the ability to delivery larger scale projects under tight timelines and respond across all time zones in real time.",
    vid: "conferance.mp4",
  },
  {
    _id: 6,
    title: "Flexibility",
    description:
      "Senior management in the US has substantial experience across all property types from both a principal and a debt point of view. This intellectual capital is supported by a delivery team in Gurgaon, India, providing the ability to delivery larger scale projects under tight timelines and respond across all time zones in real time.",
    vid: "conferance.mp4",
  },
];
