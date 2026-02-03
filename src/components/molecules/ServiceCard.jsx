import Link from "next/link"
import Icon from "../atoms/Icon"

const ServiceCard = ({ icon, label, description, route }) => {
    return (
        <div className="bg-beta lg:h-[264px] h-[220px] p-7 pb-12 flex flex-col justify-between group">
            <div>
                <div className="flex items-start gap-5 justify-between mb-3">
                    <h3 className="lg:text-2xl text-xl lg:leading-[30px] leading-[26px]">{label}</h3> <Icon className={`${icon} text-primary mt-1 text-3xl lg:text-4xl`} />
                </div>
                <p className="text-lambda/80 mb-4 leading-[22px] text-base max-w-[300px]">{description}</p>
            </div>
            <Link className="flex items-center gap-2 group-hover:translate-x-2 transition-all duration-300 text-primary lg:text-base text-sm uppercase tracking-widest font-normal" href={route}>Explore <Icon className="fi-rr-arrow-right leading-0 text-lg" /></Link>
        </div>
    )
}

export default ServiceCard;
