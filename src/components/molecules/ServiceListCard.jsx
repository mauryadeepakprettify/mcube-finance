import Image from "next/image"

const ServiceListCard = () => {
    return (
        <div className="flex gap-18 py-10 border-b border-black/20">
            <figure className="flex-3">
                <Image src="/images/services/lenders.svg" alt="" width={480} height={384} />
            </figure>
            <div className="flex-4">
                <h3 className="text-3xl mb-5">Lenders / Financial Institutions</h3>
                <p className="text-xl leading-[26px] text-lambda">We assist lenders with comprehensive commercial real estate analysis and market insights to support sound underwriting, risk management, and confident transaction decisions.</p>
            </div>
        </div>
    )
}

export default ServiceListCard