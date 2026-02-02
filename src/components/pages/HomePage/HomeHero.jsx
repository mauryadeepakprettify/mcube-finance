import Button from "@/components/atoms/Button"
import Icon from "@/components/atoms/Icon"
import Image from "next/image"
import Link from "next/link"

const HomeHero = () => {
    return (
        <section className="h-[calc(60vh-76px)] lg:h-[calc(100vh-109px)] relative before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(269.32deg,rgba(0,0,0,0)_30.58%,rgba(0,0,0,0.85)_99.41%),linear-gradient(360deg,rgba(0,0,0,0)_46.63%,rgba(0,0,0,0.65)_100%)]">
            <Image src="/images/banner/entrepreneur.svg" alt="Entrepreneur" width={1920} height={1080} className="w-full h-full object-cover" />
            <div className="absolute max-w-[500px] top-1/2 -translate-y-1/2 left-6 right-6">
                <h1 className="mb-4 text-white text-[32px] text-center lg:text-left leading-[36px] lg:text-5xl lg:leading-[55px]">Where Your Goals <span className="font-partner">Shape</span> the Investment</h1>
                <p className=" mb-6 lg:mb-8 text-base text-center lg:text-left leading-[20px] lg:text-xl lg:leading-[24px] text-white/80 max-w-[430px]">Your financial advisor stands by your side, providing trusted guidance tailored to your goals.</p>
                <Link href="/what-we-do"><Button className="mx-auto lg:mx-0">Discover Our Services  <Icon className="fi-rr-angle-right" /></Button></Link>
            </div>
        </section>
    )
}

export default HomeHero