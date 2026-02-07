"use client";
import Accordion from "@/components/molecules/Accordion";
import Image from "next/image";
import { useSelector } from "react-redux";

const OurPhilosphy = () => {
  const { accordionIndex } = useSelector((state) => state.ui);

  return (
    <section className="py-8 lg:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 xl:gap-18">
        <div>
          <Image
            src={`/images/banner/${data[accordionIndex]?.img}`}
            width={597}
            height={529}
            alt={data[accordionIndex]?.title}
          />
        </div>
        <div>
          <h2 className="mb-8 md:mb-10 text-[32px] leading-[36px] max-[375px]:text-[28px] max-[375px]:leading-[32px] md:text-left lg:text-5xl lg:leading-[55px]">Corporate Philosophy</h2>
          <>
            {data?.map((item, index) => (
              <Accordion key={item?._id} data={item} index={index} />
            ))}
          </>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosphy;

const data = [
  {
    _id: 1,
    title: "Client Focused",
    description:
      "We believe in customer satisfaction through innovation, dedication, and responsiveness. We endeavour to provide custom-made solutions that accomplish our client’s unique requirements.",
    img: "clients.svg",
  },
  {
    _id: 2,
    title: "Operational Excellence",
    description:
      "We believe in customer satisfaction through innovation, dedication, and responsiveness. We endeavour to provide custom-made solutions that accomplish our client’s unique requirements. ",
    img: "clients.svg",
  },
  {
    _id: 3,
    title: "Integrity & Reliability",
    description:
      "We believe in customer satisfaction through innovation, dedication, and responsiveness. We endeavour to provide custom-made solutions that accomplish our client’s unique requirements.",
    img: "clients.svg",
  },
  {
    _id: 4,
    title: "Employee Centric",
    description:
      "We believe in customer satisfaction through innovation, dedication, and responsiveness. We endeavour to provide custom-made solutions that accomplish our client’s unique requirements.",
    img: "clients.svg",
  },
];
