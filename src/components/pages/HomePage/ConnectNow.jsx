import Button from "@/components/atoms/Button"
import Icon from "@/components/atoms/Icon"
import Image from "next/image"

const ConnectNow = () => {
    return (
        <section className=" lg:py-12 py-8 pb-12 bg-beta ">
            <div className="container relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-32">
                <Image src="/icons/m.svg" alt="" width={246} height={202} className="absolute hidden lg:block -bottom-12 left-[380px]" />
                <div className="flex flex-col justify-center lg:gap-12 gap-6 max-w-[450px] order-2 lg:order-1">
                    <h2 className="text-[28px] lg:text-4xl lg:text-left text-center lg:leading-[40px] leading-[28px]">We aspire to be the world’s most exceptional <span className="font-partner">financial</span> institution.</h2>
                    <Button className="w-fit mx-auto lg:mx-0">Connect Now <Icon className="fi-rr-angle-right" /></Button>
                </div>
                <figure className="order-1 lg:order-2">
                    <video src="/video/handshake.mp4" loop autoPlay muted poster="/video/handshake.svg " className="lg:h-[446px] h-[300px] object-cover"></video>
                </figure>
            </div>
        </section>
    )
}

export default ConnectNow