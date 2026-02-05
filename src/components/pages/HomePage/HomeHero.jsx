import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Image from "next/image";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="relative h-[calc(60vh-76px)] before:absolute before:inset-0 before:h-full before:w-full before:bg-[linear-gradient(269.32deg,rgba(0,0,0,0)_30.58%,rgba(0,0,0,0.85)_99.41%),linear-gradient(360deg,rgba(0,0,0,0)_46.63%,rgba(0,0,0,0.65)_100%)] before:content-[''] md:h-[calc(70vh-76px)] lg:h-[calc(80vh-109px)] xl:h-[calc(100vh-109px)]">
      <Image
        src="/images/banner/entrepreneur.svg"
        alt="Entrepreneur"
        width={1920}
        height={1080}
        className="h-full w-full object-cover"
      />
      <div className="absolute top-1/2 right-6 left-6 -translate-y-1/2 md:max-w-[320px] lg:left-12 lg:max-w-[500px]">
        <h1 className="mb-4 text-center text-[32px] leading-[36px] text-white max-[375px]:text-[28px] max-[375px]:leading-[32px] md:text-left lg:text-5xl lg:leading-[55px]">
          Where Your Goals <span className="font-partner">Shape</span> the
          Investment
        </h1>
        <p className="mb-6 max-w-[430px] text-center text-base leading-[20px] text-white/80 md:text-left lg:mb-8 lg:text-xl lg:leading-[24px]">
          Your financial advisor stands by your side, providing trusted guidance
          tailored to your goals.
        </p>
        <Link href="/what-we-do">
          <Button className="mx-auto md:mx-0">
            Discover Our Services <Icon className="fi-rr-angle-right" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HomeHero;
