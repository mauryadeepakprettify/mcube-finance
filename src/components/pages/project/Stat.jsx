"use client";
import { useEffect, useState } from "react";

const Stat = () => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
  }, []);

  return (
    <section
      className={`bg-beta flex flex-wrap h-[373px] items-center justify-center py-8 md:py-0 ${isLoad ? " gap-8 md:gap-5 lg:gap-8 " : ""}`}
    >
      {data?.map(({ title, stat }, idx) => {
        return (
          <div
            className={`z-[${idx + 1}] p-4 last:bg-primary flex h-[140px] w-[140px] md:h-[160px] md:w-[160px] lg:w-[220px] lg:h-[220px] xl:h-[263px] xl:w-[263px] transform flex-col items-center justify-center gap-2 md:gap-4 rounded-full border border-[#D3D3D3] bg-white transition-all duration-900 ease-in-out ${isLoad ? "" : "not-first:ml-[-70px]"} last:*:text-white last:[&>p:last-child]:text-white/80`}
            key={idx}
          >
            <p className=" text-[32px] leading-[32px] md:text-[48px] md:leading-[48px]">{stat}</p>
            <p className="text-lambda text-sm leading-[18px] md:leading-[24px] text-center">{title}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Stat;

const data = [
  {
    _id: 1,
    title: "Projects Delivered",
    stat: "150+",
  },
  {
    _id: 2,
    title: "Long-Term Clients",
    stat: "40+",
  },
  {
    _id: 3,
    title: "Client Satisfaction Rate",
    stat: "98%",
  },
  {
    _id: 4,
    title: "Years of Experience",
    stat: "12+",
  },
];
