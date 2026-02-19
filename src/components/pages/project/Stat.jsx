"use client";
import { useEffect, useState } from "react";

const Stat = () => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
  }, []);

  return (
    <section
      className={`bg-beta flex h-[373px] flex-wrap items-center justify-center py-8 md:py-0 ${isLoad ? " gap-8 md:gap-5 lg:gap-8 " : ""}`}
    >
      {data?.map(({ title, stat }, idx) => {
        return (
          <div
            className={`z-[${idx + 1}] last:bg-primary flex h-[140px] w-[140px] transform flex-col items-center justify-center gap-2 rounded-full border border-[#D3D3D3] bg-white p-4 transition-all duration-900 ease-in-out md:h-[160px] md:w-[160px] md:gap-4 lg:h-[220px] lg:w-[220px] xl:h-[263px] xl:w-[263px] ${isLoad ? "" : "not-first:ml-[-70px]"} last:*:text-white last:[&>p:last-child]:text-white/80`}
            key={idx}
          >
            <p className="text-[32px] leading-[32px] md:text-[48px] md:leading-[48px]">
              {stat}
            </p>
            <p className="text-lambda text-center text-sm leading-[18px] md:leading-[24px]">
              {title}
            </p>
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
