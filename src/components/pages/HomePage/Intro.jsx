import Button from "@/components/atoms/Button"
import Icon from "@/components/atoms/Icon"
import Image from "next/image"
import Link from "next/link"

const Intro = () => {
    return (
        <section className="bg-linear-to-r from-[#FAFAFA] to-[#E0E0E0] relative py-8 lg:py-16 ">
            <Image src="/vector/dot.svg" alt="" width={180} height={150} className="object-contain hidden lg:block absolute left-0 bottom-0" />
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-32 ">
                <div className="">
                    <span className="text-primary text-sm lg:text-base mb-3 lg:mb-5 text-center lg:text-left block uppercase">About MCube Financial</span>
                    <h2 className="text-[28px] leading-[28px] lg:text-5xl lg:leading-[48px] mb-3 lg:mb-5 text-center lg:text-left">Maximize Resources. Minimize Costs. Multiply Volume.</h2>
                    <p className="text-alpha  leading-[24px] text-center lg:text-left">MCube operates a proven model that builds on the knowledge gained through a predecessor company, Helix Financial Group LLC, co-founded in 2004 by MCube partners and sold to BlackRock in 2010. Helix was one of the seminal companies providing off-shore commercial real estate expertise and developed a deep understanding of US and European real estate markets.</p>
                    <div className=" lg:mt-8 mt-6 flex items-center justify-center lg:justify-start lg:gap-20 gap-10">
                        <Link href="/about"><Button>About MCube Financial <Icon className="fi-rr-angle-right" /></Button></Link>
                        <div className="">
                            <span className=" lg:text-5xl text-4xl">20+</span>
                            <p className="lg:text-base text-sm">Years of Experience</p>
                        </div>
                    </div>
                </div>
                <figure className="hidden lg:block">
                    <Image src="/images/banner/polls.svg" alt="" width={518} height={503} className="object-contain" />
                </figure>
            </div>
        </section>
    )
}

export default Intro