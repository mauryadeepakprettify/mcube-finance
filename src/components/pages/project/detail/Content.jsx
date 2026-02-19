import Icon from "@/components/atoms/Icon";
import Image from "next/image";

const Content = () => {
  const { _id, title, img, description, features } = data;

  return (
    <section className="pt-8 pb-8 lg:pt-0 lg:pb-16">
      <div className="container grid gap-0 lg:grid-cols-2 lg:gap-14">
        <figure className="relative h-fit before:absolute before:inset-0 before:h-full before:w-full before:bg-[linear-gradient(270deg,rgba(0,0,0,0)18.75%,rgba(0,0,0,0.7)79.92%)] lg:sticky lg:top-[109px]">
          <Image
            className="h-auto w-full object-cover"
            src={`/images/banner/${img}`}
            alt={title}
            width={640}
            height={613}
          />
          <div className="absolute top-1/2 right-6 left-6 -translate-y-1/2 md:right-12 md:left-12">
            <p className="mb-3 text-sm tracking-widest text-white/80 uppercase md:mb-4 md:text-base md:leading-[24px]">
              Project Showcase
            </p>
            <h2 className="text-[26px] leading-[32px] text-white md:text-[40px] md:leading-[46px]">
              {title}
            </h2>
          </div>
        </figure>
        <div className="pt-6 lg:pt-10">
          <p className="text-lambda mb-8 leading-[24px]">{description}</p>
          <ul className="">
            {features?.map(({ _id, title, description }, idx) => {
              return (
                <li
                  key={_id}
                  className="border-primary relative ml-5 border-l pb-6 pl-10"
                >
                  <span className="border-primary absolute top-0 -left-[18px] flex h-[34px] w-[34px] items-center justify-center rounded-full border bg-white p-4">
                    <Icon className="fi-ts-arrow-small-left text-primary rotate-[225deg] text-2xl" />
                  </span>
                  <h6 className="mb-2 text-lg leading-[26px]">{title}</h6>
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
