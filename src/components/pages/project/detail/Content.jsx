import Icon from "@/components/atoms/Icon";
import Image from "next/image";

const Content = () => {
  const { _id, title, img, description, features } = data;

  return (
    <section className="pb-8 lg:pb-16">
      <div className="container grid grid-cols-2 gap-14">
        <figure className="sticky top-[109px] h-fit before:absolute before:inset-0 before:bg-[linear-gradient(270deg,rgba(0,0,0,0)18.75%,rgba(0,0,0,0.7)79.92%)]">
          <Image
            className="h-auto w-full object-cover"
            src={`/images/banner/${img}`}
            alt={title}
            width={640}
            height={613}
          />
          <div className="absolute top-1/2 right-12 left-12 -translate-y-1/2">
            <p className="mb-4 leading-[24px] tracking-widest text-white/80 uppercase">
              Project Showcase
            </p>
            <h2 className="text-[40px] leading-[46px] text-white">{title}</h2>
          </div>
        </figure>
        <div className="pt-10">
          <p className="text-lambda mb-8 leading-[24px]">{description}</p>
          <ul className="">
            {features?.map(({ _id, title, description }, idx) => {
              return (
                <li key={_id} className="pl-10 ml-5 pb-6 border-l border-primary relative">
                    <span className="w-[34px] h-[34px] p-4 border border-primary bg-white absolute -left-[18px] top-0 rounded-full flex items-center justify-center">
                        <Icon className="fi-ts-arrow-small-left  text-primary text-2xl rotate-[225deg]" />
                    </span>
                  <h6 className="text-lg mb-2 leading-[26px]">{title}</h6>
                  <p className="text-lambda leading-[24px]">{description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Content;

const data = {
  _id: "1",
  title: "CMBS/Balance Sheet Underwriting",
  description:
    "This best-in-class service has resulted in 40+ long-standing client relationships and the successful completion of over 500 full underwriting assignments representing over $6.5 billion in loan volume since 2014. Experience with all property types including over $375 million in hospitality and over $500 million in self-storage underwritten for CMBS execution. Highlights of which include:",
  img: "structure.svg",
  features: [
    {
      _id: "1",
      title: "$1.07 billion, 25-property Hotel Portfolio",
      description:
        "Created the model and prepared the rating agency tape, credit memo, and securitization term sheet at both the asset and the portfolio level.",
    },
    {
      _id: "2",
      title: "$560 million, 430-asset Small Balance Portfolio",
      description:
        "Validated existing data fields and incorporated missing/required data from detailed offering memorandum, loan documents, and portfolio data tape. Performed underwriting based on rental information and expense assumptions.",
    },
    {
      _id: "3",
      title: "$230 million, 128 Loan SFR Securitization",
      description:
        "Created and validated the data tape from source documents, and made required changes. Prepared three additional data tapes: (1) Property tape – Captured the key quantitative and qualitative data of each of the 2,100 properties in the securitization. (2) Lockbox description extraction – Assembled loan type (recourse/non-recourse), cash management, and lockbox information for all 128 loans. (3) Borrower financial information – Captured the financial data of all the borrowers included in the securitization.",
    },
    {
      _id: "4",
      title: "$225 million, 50-asset Hotel Portfolio",
      description:
        "Created the model and prepared the credit memo at the portfolio level.",
    },
    {
      _id: "5",
      title: "$45 million Mezzanine Financing",
      description:
        "Underwrote a first mortgage with mezzanine financing secured by a $45.0 million multi-tenant retail power center.",
    },
    {
      _id: "6",
      title: "$35 million Bridge Financing",
      description:
        "Underwrote bridge loans including a 13-property industrial portfolio and 2-property multifamily portfolio.",
    },
  ],
};
