"use client";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import { useModal } from "@/hooks/useModal";
import Image from "next/image";

const ConnectNow = () => {
  const { openModal } = useModal();

  return (
    <section className="bg-beta py-8 pb-12 lg:py-12">
      <div className="relative container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-32">
        <Image
          src="/icons/m.svg"
          alt=""
          width={246}
          height={202}
          className="absolute -bottom-12 left-[215px] hidden w-[150px] md:block lg:left-[300px] lg:w-[200px] xl:left-[380px] xl:w-[246px]"
        />
        <div className="order-2 flex max-w-[450px] flex-col justify-center gap-6 md:order-1 md:gap-8 lg:gap-12">
          <h2 className="text-center text-[28px] leading-[28px] md:text-left lg:text-4xl lg:leading-[40px]">
            We aspire to be the world’s most exceptional{" "}
            <span className="font-partner">financial</span> institution.
          </h2>
          <Button onClick={() => openModal("enquire")} className="mx-auto w-fit md:mx-0">
            Connect Now <Icon className="fi-rr-angle-right" />
          </Button>
        </div>
        <figure className="order-1 md:order-2">
          <video
            src="/video/handshake.mp4"
            loop
            autoPlay
            muted
            poster="/video/handshake.svg "
            className="h-[300px] object-cover lg:h-[446px]"
          ></video>
        </figure>
      </div>
    </section>
  );
};

export default ConnectNow;
