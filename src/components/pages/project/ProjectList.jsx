"use client";

import Icon from "@/components/atoms/Icon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProjectList = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="pb-8">
      <div className="container">
        <ul className="sticky top-[58px] z-10 flex gap-10 overflow-x-auto border-b border-[#D9D9D9] bg-white pt-5 pb-6 [scrollbar-width:none] md:gap-20 md:pt-8 md:pb-7 lg:top-[109px] [--webkit-scrollbar]:hidden">
          {data?.map(({ _id, title }, idx) => {
            return (
              <li
                key={_id}
                onClick={() => setActive(idx)}
                className={`${active === idx ? "before:w-full" : "before:w-0"} before:bg-primary relative min-w-[150px] cursor-pointer text-base leading-[22px] before:absolute before:-bottom-6 before:left-0 before:h-[2px] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full md:text-xl md:leading-[26px] before:md:-bottom-7`}
              >
                {title}
              </li>
            );
          })}
        </ul>

        <div className="my-10 grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="order-2 grid grid-cols-1 gap-5 md:order-1 lg:grid-cols-2">
            {data?.[active]?.projects?.map(
              ({ _id, stat, description, img }) => {
                return (
                  <Link
                    href={`/project/${data?.[active]?._id}`}
                    key={_id}
                    className="bg-beta group hover:bg-primary relative h-[193px] overflow-hidden border border-[#B7B7B7] p-5 pb-7 transition-all duration-300 ease-in-out"
                  >
                    <div className="relative max-w-[85%]">
                      <Image
                        src={`/icons/projects/${img}`}
                        alt={stat}
                        width={40}
                        height={40}
                        className="transition-all duration-300 ease-in-out group-hover:w-[110px] group-hover:brightness-0 group-hover:invert group-hover:filter"
                      />
                      <h6 className="mt-3 text-lg leading-[22px] transition-all duration-300 ease-in-out group-hover:text-white">
                        {stat}
                      </h6>
                      <p className="text-lambda mt-1 text-sm leading-[20px] transition-all duration-300 ease-in-out group-hover:absolute group-hover:-bottom-full group-hover:text-white/80 group-hover:opacity-0">
                        {description}
                      </p>
                    </div>
                    <span className="absolute right-6 bottom-5 transition-all duration-300 ease-in-out group-hover:translate-x-1">
                      <Icon className="fi-rr-arrow-right text-primary text-lg transition-all duration-300 ease-in-out group-hover:text-white" />
                    </span>
                  </Link>
                );
              },
            )}
          </div>
          <div className="order-1 h-[220px] w-full md:sticky md:top-[250px] md:order-2 md:h-[408px]">
            <video
              src="/video/conferance.mp4"
              autoPlay
              loop
              muted
              className="h-full w-full object-cover"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;

const data = [
  {
    _id: "cmbs-balance-sheet-underwriting",
    title: "CMBS/Balance Sheet Underwriting",
    projects: [
      {
        _id: 1,
        stat: "$1.07 billion",
        description:
          "Created the model and prepared the rating agency tape, credit and memo.",
        img: "building.svg",
      },
      {
        _id: 2,
        stat: "$560 million",
        description:
          "Underwrote 430-asset, small balance multifamily portfolio for a multinational.",
        img: "stat.svg",
      },
      {
        _id: 3,
        stat: "$230 million",
        description:
          "Delivered full underwriting services for single family rental securitization.",
        img: "dollar.svg",
      },
      {
        _id: 4,
        stat: "$225 million",
        description:
          "Performed underwriting and prepared credit memo for 50-asset hotel portfolio.",
        img: "wallet.svg",
      },
      {
        _id: 5,
        stat: "45 million",
        description:
          "Underwrote a first mortgage with mezzanine financing secured by $45 million",
        img: "layer.svg",
      },
      {
        _id: 6,
        stat: "$35 million",
        description:
          "Underwrote bridge loans including a 13-property industrial portfolio and 2-property.",
        img: "bridge.svg",
      },
    ],
  },
  {
    _id: "sizings-lease-abstraction",
    title: "Sizings/Lease Abstraction",
    projects: [
      {
        _id: 1,
        stat: "$1.07 billion",
        description:
          "Created the model and prepared the rating agency tape, credit and memo.",
        img: "building.svg",
      },
      {
        _id: 2,
        stat: "$560 million",
        description:
          "Underwrote 430-asset, small balance multifamily portfolio for a multinational.",
        img: "stat.svg",
      },
    ],
  },
  {
    _id: "asset-management-loan-workouts",
    title: "Asset management/Loan Workouts",
    projects: [
      {
        _id: 3,
        stat: "$230 million",
        description:
          "Delivered full underwriting services for single family rental securitization.",
        img: "dollar.svg",
      },
      {
        _id: 4,
        stat: "$225 million",
        description:
          "Performed underwriting and prepared credit memo for 50-asset hotel portfolio.",
        img: "wallet.svg",
      },
    ],
  },
  {
    _id: "agency-underwriting",
    title: "Agency Underwriting",
    projects: [
      {
        _id: 1,
        stat: "$1.07 billion",
        description:
          "Created the model and prepared the rating agency tape, credit and memo.",
        img: "building.svg",
      },
      {
        _id: 2,
        stat: "$560 million",
        description:
          "Underwrote 430-asset, small balance multifamily portfolio for a multinational.",
        img: "stat.svg",
      },
    ],
  },
];
