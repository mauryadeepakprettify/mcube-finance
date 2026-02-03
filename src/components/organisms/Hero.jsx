import Image from "next/image"

const Hero = ({ img, vid, title, description }) => {
    return (
        <section className="h-[calc(60vh-76px)] overflow-hidden md:h-[calc(70vh-76px)] lg:h-[calc(80vh-109px)] xl:h-[calc(100vh-109px)] relative before:content-[''] before:absolute before:inset-0 before:h-full before:w-full before:bg-[linear-gradient(180deg,rgba(0,0,0,0)_44.87%,rgba(0,0,0,0.7)_91.83%)] ">
            {img && <Image className="w-full h-full object-cover" src={img} alt="" width={1920} height={1080} />}
            {vid && <video className="w-full h-full object-cover" src={`/video/${vid}`} autoPlay loop muted poster={`/video/${vid}.svg`}></video>}
            <div className="absolute bottom-[12%] left-1/2 transform -translate-x-1/2 ">
                <h1 className="text-white text-5xl mb-4 text-center leading-[100%]">{title}</h1>
                <p className="text-white text-[18px] max-w-[479px] text-center leading-[24px]">{description}</p>
            </div>
        </section>
    )
}

export default Hero