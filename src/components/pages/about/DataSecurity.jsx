import Image from "next/image"

const DataSecurity = () => {
    return (
        <section className="relative py-8 lg:py-16">
            <Image src="/vector/dot_b.svg" alt="data-security" width={258} height={97} className="absolute bottom-0 right-0" />
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-24">
                <figure className="">
                    <video className="w-full h-[345px] object-cover" src="/video/security.mp4" poster="/video/security.svg" autoPlay loop muted />
                </figure>
                <div className="flex flex-col justify-center">
                    <h2 className="text-5xl mb-5">Data Security</h2>
                    <p className="text-lambda leading-[24px]">At MCube, we respect the confidentiality of our clients’ information and protect it seriously. MCube has a comprehensive security policy that covers "people, policy, and process" to ensure confidentiality and protection of data. We cover security across the spectrum, from physical security of premises and hardware to logical security across our systems and software, to ongoing training of our staff on dynamic aspects of information security.</p>
                </div>
            </div>
        </section>
    )
}

export default DataSecurity