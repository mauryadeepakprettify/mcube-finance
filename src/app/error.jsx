"use client";

import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Image from "next/image";

export default function Error({ error, reset }) {
  return (
    <section className="relative h-[calc(60vh-76px)] overflow-hidden before:absolute before:inset-0 before:h-full before:w-full before:bg-[linear-gradient(180deg,rgba(0,0,0,0)_44.87%,rgba(0,0,0,0.7)_91.83%)] before:content-['']">
      <Image
        className="h-full w-full object-cover"
        src="/images/banner/media.svg"
        alt=""
        width={1920}
        height={1080}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform`}
      >
        <h1 className="mb-4 text-center text-5xl leading-[100%] text-white">
          Something went wrong!
        </h1>
        <Button className="mx-auto w-fit" onClick={() => reset()}>
          Refresh <Icon className="fi-rr-refresh text-white" />
        </Button>
      </div>
    </section>
  );
}
