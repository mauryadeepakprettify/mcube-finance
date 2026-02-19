"use client";

import Icon from "@/components/atoms/Icon";
import Link from "next/link";
import { useState } from "react";

const ProjectCategory = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="pb-8">
      <div className="container">
        <ul className="sticky top-[109px] z-10 flex gap-20 overflow-x-auto border-b border-[#D9D9D9] bg-white pt-8 pb-7 *:text-xl *:leading-[26px]">
          {data?.map(({ _id, title }, idx) => {
            return (
              <li
                key={_id}
                onClick={() => setActive(idx)}
                className={`${active === idx ? "before:w-full" : "before:w-0"} before:bg-primary relative cursor-pointer before:absolute before:-bottom-7 before:left-0 before:h-[2px] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full`}
              >
                {title}
              </li>
            );
          })}
        </ul>

        <div className="my-10 grid gap-10 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-5">
            {data?.[active]?.projects?.map(
              ({ _id, stat, description, icon }) => {
                return (
                  <Link
                    href="# "
                    key={_id}
                    className="bg-beta h-[193px] group hover:bg-primary transition-all duration-300 ease-in-out  relative overflow-hidden border border-[#B7B7B7] p-5 pb-7"
                  >
                    <div className="max-w-[85%] relative">
                      <Icon className={`text-primary transition-all duration-300 ease-in-out group-hover:text-white group-hover:text-8xl text-4xl ${icon}`} />
                      <h6 className="mt-3 transition-all duration-300 ease-in-out group-hover:text-white text-lg leading-[22px]">{stat}</h6>
                      <p className="text-lambda group-hover:-bottom-full group-hover:absolute group-hover:opacity-0 transition-all duration-300 ease-in-out group-hover:text-white/80 mt-1 text-sm leading-[20px]">
                        {description}
                      </p>
                    </div>
                    <span className="absolute right-6 group-hover:translate-x-1 transition-all duration-300 ease-in-out  bottom-5">
                      <Icon className="fi-rr-arrow-right text-primary transition-all duration-300 ease-in-out  group-hover:text-white text-lg" />
                    </span>
                  </Link>
                );
              },
            )}
          </div>
          <div className="sticky top-[250px] h-[408px] w-full">
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

export default ProjectCategory;

const data = [
  {
    _id: 1,
    title: "CMBS/Balance Sheet Underwriting",
    projects: [
      {
        _id: 1,
        stat: "$1.07 billion",
        description:
          "Created the model and prepared the rating agency tape, credit and memo.",
        icon: "fi-ts-building",
        url: "credit-and-memo",
      },
      {
        _id: 2,
        stat: "$560 million",
        description:
          "Underwrote 430-asset, small balance multifamily portfolio for a multinational.",
        icon: "fi-ts-stats",
        url: "small-balance-multifamily-portfolio",
      },
      {
        _id: 3,
        stat: "$230 million",
        description:
          "Delivered full underwriting services for single family rental securitization.",
        icon: "fi-ts-sack-dollar",
        url: "single-family-rental-securitization",
      },
      {
        _id: 4,
        stat: "$225 million",
        description:
          "Performed underwriting and prepared credit memo for 50-asset hotel portfolio.",
        icon: "fi-ts-wallet",
        url: "hotel-portfolio",
      },
      {
        _id: 5,
        stat: "45 million",
        description:
          "Underwrote a first mortgage with mezzanine financing secured by $45 million",
        icon: "fi-tr-layer-plus",
        url: "first-mortgage-with-mezzanine-financing",
      },
      {
        _id: 6,
        stat: "$35 million",
        description:
          "Underwrote bridge loans including a 13-property industrial portfolio and 2-property.",
        icon: "fi-ts-road-barrier",
        url: "bridge-loans",
      },
    ],
  },
  {
    _id: 2,
    title: "Sizings/Lease Abstraction",
    projects: [
      {
        _id: 1,
        stat: "$1.07 billion",
        description:
          "Created the model and prepared the rating agency tape, credit and memo.",
        icon: "fi-ts-building",
        url: "credit-and-memo",
      },
      {
        _id: 2,
        stat: "$560 million",
        description:
          "Underwrote 430-asset, small balance multifamily portfolio for a multinational.",
        icon: "fi-ts-stats",
        url: "small-balance-multifamily-portfolio",
      },
    ],
  },
  {
    _id: 3,
    title: "Asset management/Loan Workouts",
    projects: [
      {
        _id: 3,
        stat: "$230 million",
        description:
          "Delivered full underwriting services for single family rental securitization.",
        icon: "fi-ts-sack-dollar",
        url: "single-family-rental-securitization",
      },
      {
        _id: 4,
        stat: "$225 million",
        description:
          "Performed underwriting and prepared credit memo for 50-asset hotel portfolio.",
        icon: "fi-ts-wallet",
        url: "hotel-portfolio",
      },
    ],
  },
  {
    _id: 4,
    title: "Agency Underwriting",
    projects: [
      {
        _id: 1,
        stat: "$1.07 billion",
        description:
          "Created the model and prepared the rating agency tape, credit and memo.",
        icon: "fi-ts-building",
        url: "credit-and-memo",
      },
      {
        _id: 2,
        stat: "$560 million",
        description:
          "Underwrote 430-asset, small balance multifamily portfolio for a multinational.",
        icon: "fi-ts-stats",
        url: "small-balance-multifamily-portfolio",
      },
    ],
  },
];
