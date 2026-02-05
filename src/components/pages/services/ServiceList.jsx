import ServiceListCard from "@/components/molecules/ServiceListCard";

const ServiceList = () => {
  return (
    <section className="py-8 lg:py-16">
      <div className="container">
        {data?.map((item, index) => (
          <ServiceListCard key={item._id} data={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ServiceList;

const data = [
  {
    _id: 1,
    title: "Lenders / Financial Institutions",
    description:
      "We assist lenders with comprehensive commercial real estate analysis and market insights to support sound underwriting, risk management, and confident transaction decisions.",
    features: [
      "Preliminary Loan Sizing",
      "Full-Service Underwriting",
      "Asset Summary Reports",
      "Cash Flow Projections",
      "Collateral Valuations",
      "Cash Flow Modeling (ARGUS)",
    ],
    img: "lenders.svg",
    route: "leaders-financial-institutions",
  },
  {
    _id: 2,
    title: "Investors",
    description:
      "We provide investors with data-driven research and strategic insights to identify opportunities, manage risks, and make informed real estate investment decisions.",
    features: [
      "Market Research & Analysis",
      "Investment Due Diligence",
      "Portfolio Analytics",
      "Valuation Support",
      "Risk Assessment",
      "Cash Flow Modeling (ARGUS)",
    ],
    img: "investors.svg",
    route: "investors",
  },
  {
    _id: 3,
    title: "Brokers",
    description:
      "We deliver analytical and advisory support to help servicers monitor assets effectively, manage risk, and make informed portfolio decisions.",
    features: [
      "Market Research & Analysis",
      "Investment Due Diligence",
      "Portfolio Analytics",
      "Valuation Support",
      "Risk Assessment",
      "Cash Flow Modeling (ARGUS)",
    ],
    img: "brokers.svg",
    route: "brokers",
  },
  {
    _id: 4,
    title: "Servicers",
    description:
      "We assist servicers with comprehensive commercial real estate analysis and market insights to support sound underwriting, risk management, and confident transaction decisions.",
    features: [
      "Preliminary Loan Sizing",
      "Full-Service Underwriting",
      "Asset Summary Reports",
      "Cash Flow Projections",
      "Collateral Valuations",
      "Cash Flow Modeling (ARGUS)",
    ],
    img: "Servicers.svg",
    route: "servicers",
  },
  {
    _id: 5,
    title: "Asset Managers",
    description:
      "We offer strategic, data-backed insights that help asset managers optimize portfolio performance and maximize long-term value.",
    features: [
      "Preliminary Loan Sizing",
      "Full-Service Underwriting",
      "Asset Summary Reports",
      "Cash Flow Projections",
      "Collateral Valuations",
      "Cash Flow Modeling (ARGUS)",
    ],
    img: "assets.svg",
    route: "asset-managers",
  },
  {
    _id: 6,
    title: "Rating Agencies",
    description:
      "We offer strategic, data-backed insights that help asset managers optimize portfolio performance and maximize long-term value.",
    features: [
      "Preliminary Loan Sizing",
      "Full-Service Underwriting",
      "Asset Summary Reports",
      "Cash Flow Projections",
      "Collateral Valuations",
      "Cash Flow Modeling (ARGUS)",
    ],
    img: "agencies.svg",
    route: "rating-agencies",
  },
  {
    _id: 7,
    title: "Miscellaneous",
    description:
      "We provide independent research, detailed market analysis, and asset-level insights to support accurate, timely, and consistent credit evaluations across real estate portfolios.",
    features: [
      "Preliminary Loan Sizing",
      "Full-Service Underwriting",
      "Asset Summary Reports",
      "Cash Flow Projections",
      "Collateral Valuations",
      "Cash Flow Modeling (ARGUS)",
    ],
    img: "miscellaneous.svg",
    route: "miscellaneous",
  },
];
