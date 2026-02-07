"use client";
import Icon from "@/components/atoms/Icon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Location = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-beta relative py-8 lg:py-16">
      <Image
        src="/vector/dot.svg"
        alt="Vector"
        width={180}
        height={150}
        className="absolute bottom-0 left-0"
      />
      <div className="grid grid-cols-5 gap-6 lg:gap-10 xl:gap-16">
        <div className="col-span-2 flex flex-col justify-center p-22">
          <ul className="mb-10 flex gap-10">
            {data?.map((item, index) => {
              const { _id, title } = item;
              const isActive = activeTab === index;
              return (
                <li
                  key={_id}
                  onClick={() => setActiveTab(index)}
                  className={`relative cursor-pointer pb-4 text-2xl leading-[28px] before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:bg-black before:transition-all before:duration-300 before:ease-in-out hover:before:w-full ${isActive ? "text-black before:w-full" : "text-black/30"}`}
                >
                  {title}
                </li>
              );
            })}
          </ul>

          {data?.map((item, index) => {
            const { _id, info } = item;
            const isActive = activeTab === index;
            return (
              <ul key={_id} className={`${isActive ? "block" : "hidden"}`}>
                {info?.map((item, idx) => {
                  const { lable, route } = item;
                  return (
                    <li
                      key={idx}
                      className="text-base leading-[24px] not-last:mb-6"
                    >
                      <span className="flex gap-5">
                        <Icon
                          className={`${idx === 0 ? "fi-rr-marker" : idx === 1 ? "fi-rr-envelope" : "fi-rr-phone-call"} text-2xl`}
                        />
                        {lable}
                      </span>
                      <span className="mt-4 ml-9 block">
                        {route && (
                          <Link
                            className="text-primary flex items-center gap-2 tracking-widest uppercase transition-all duration-300 hover:translate-x-1"
                            href={route}
                            target="_blank"
                          >
                            Get Directions
                            <Icon className="fi-rr-arrow-right text-xl" />
                          </Link>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="relative col-span-3">
          {data?.map((item, index) => {
            const { _id, city } = item;
            const isActive = activeTab === index;
            return (
              <span
                onClick={() => setActiveTab(index)}
                key={_id}
                className={`${index === 0 ? "top-[36%] left-[30%] " : "top-[53%] right-[17%] "} absolute`}
              >
                <Icon
                  className={` ${isActive ? "fi-ss-marker text-[26px]" : "fi-rr-dot-circle animate-pulse text-[20px]"} transition-all duration-300 ease-in-out text-primary cursor-pointer`}
                />
                <span
                  className={`bg-primary absolute -bottom-12 left-1/2 -translate-x-1/2 rounded-[5px] px-4 py-3 text-nowrap text-white transition-all duration-300 ease-in-out ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                  {city}
                </span>
              </span>
            );
          })}

          <Image
            src="/images/banner/globe.svg"
            alt="Map"
            width={1000}
            height={1000}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;

const data = [
  {
    _id: 1,
    title: "US Office",
    city: "Charlotte, New York City, USA",
    info: [
      {
        lable: "128 S Tryon Street, Suite #801 Charlotte, NC - 28202",
        route: "https://maps.app.goo.gl/hkE79hpKiLg2xTXz5",
      },
      {
        lable: "contactus@mcubefinancial.com",
      },
      {
        lable: "+1 -704-504-7630",
      },
    ],
  },
  {
    _id: 2,
    title: "India Office",
    city: "New Delhi, India",
    info: [
      {
        lable: "128 S Tryon Street, Suite #801 New Delhi, India",
        route: "https://maps.app.goo.gl/hkE79hpKiLg2xTXz5",
      },
      {
        lable: "contactus@mcubefinancial.com",
      },
      {
        lable: "+91 - 9876543210",
      },
    ],
  },
];
