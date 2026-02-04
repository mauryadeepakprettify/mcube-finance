import Image from "next/image"

const Vision = () => {
    return (
        <section className="relative before:content-[''] before:h-full before:w-full before:absolute before:inset-0 before:bg-[linear-gradient(270deg,rgba(0,0,0,0)_38.95%,rgba(0,0,0,0.7)_77.81%)]">
            <Image className="w-full h-full object-cover" src="/images/banner/skyline.svg" alt="Vision" width={1280} height={553} />
            <div className="absolute top-1/2 transform -translate-y-1/2 left-6 lg:left-12 right-6">
                <h2 className="text-5xl font-normal mb-4 text-white">Our Vision</h2>
                <p className="text-white/70 leading-[24px] lg:max-w-[450px]">We want to develop long term partnerships with our clients by offering innovative and cost effective solutions to their most pressing problems. MCube’s services are based on values of honesty, integrity and consistency, and treating its clients and employees with dignity and respect.</p>
            </div>
        </section>
    )
}

export default Vision