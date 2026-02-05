import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Image from "next/image";
import Link from "next/link";

const Info = () => {
  return (
    <section className="py-8 lg:py-16">
      <div className="container max-w-6xl! grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 xl:gap-28">
        <div className="">
          <span className="text-primary mb-3 block text-center text-sm md:text-left lg:mb-5 lg:text-base">
            careers@mcubefinancial.com{" "}
          </span>
          <h2 className="mb-3 text-center text-[28px] leading-[28px] md:text-left lg:mb-5 lg:text-5xl lg:leading-[48px]">
            Build Your Career at MCube{" "}
          </h2>
          <p className="text-center leading-[24px] text-black/70 md:text-left">
            MCube is always looking for motivated and dynamic team members at
            various levels. Our current open positions are highlighted below and
            if you are interested in a rewarding career with us please send us
            an email or apply using the form on this page.
          </p>
          <Link className="mt-10 block" href="/about">
            <Button className="text-nowrap">
              Current Openings <Icon className="fi-rr-arrow-right rotate-45" />
            </Button>
          </Link>
        </div>
        <figure className="hidden md:block">
          <Image
            src="/images/banner/employee.svg"
            alt=""
            width={518}
            height={503}
            className="object-contain"
          />
        </figure>
      </div>
    </section>
  );
};

export default Info;
