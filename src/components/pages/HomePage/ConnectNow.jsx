import Button from "@/components/atoms/Button"
import Icon from "@/components/atoms/Icon"
import Image from "next/image"

const ConnectNow = () => {
    return (
        <section className="py-12 relative bg-beta">
            <Image src="/icons/m.svg" alt="" width={246} height={202} className="absolute bottom-0 left-[380px]" />
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-32">
                <div className="flex flex-col justify-center gap-12 max-w-[450px]">
                    <h2 className="text-4xl leading-[40px]">We aspire to be the world’s most exceptional <span className="font-partner">financial</span> institution.</h2>
                    <Button className="w-fit">Connect Now <Icon className="fi-rr-angle-right" /></Button>
                </div>
                <div>
                    <video src="/video/handshake.mp4" loop autoPlay muted poster="/video/handshake.svg " className="h-[446px] object-cover"></video>
                </div>
            </div>
        </section>
    )
}

export default ConnectNow