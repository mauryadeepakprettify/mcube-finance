import ServiceListCard from "@/components/molecules/ServiceListCard"

const ServiceList = () => {
    return (
        <section className="py-8 lg:py-16">
            <div className="container">
                <ServiceListCard />
            </div>
        </section>
    )
}

export default ServiceList

const data = [
    {
        _id: 1,
        title: "Lenders / Financial Institutions",
        description: "We assist lenders with comprehensive commercial real estate analysis and market insights to support sound underwriting, risk management, and confident transaction decisions.",
        features: [
            "Preliminary Loan Sizing",
            "Full-Service Underwriting",
            "Asset Summary Reports",
            "Cash Flow Projections",
            "Collateral Valuations",
            "Cash Flow Modeling (ARGUS)"
        ],
        img: "lenders.svg",
        route: "leaders-financial-institutions"
    },
    {
        _id: 2,
        title: "Investors",
        description: "We provide investors with data-driven research and strategic insights to identify opportunities, manage risks, and make informed real estate investment decisions.",
        features: [
            "Market Research & Analysis",
            "Investment Due Diligence",
            "Portfolio Analytics",
            "Valuation Support",
            "Risk Assessment",
            "Cash Flow Modeling (ARGUS)"
        ],
        img: "lenders.svg",
        route: "investors"
    },
    {
        _id: 3,
        title: "Brokers",
        description: "We deliver analytical and advisory support to help servicers monitor assets effectively, manage risk, and make informed portfolio decisions.",
        features: [
            "Market Research & Analysis",
            "Investment Due Diligence",
            "Portfolio Analytics",
            "Valuation Support",
            "Risk Assessment",
            "Cash Flow Modeling (ARGUS)"
        ],
        img: "lenders.svg",
        route: "brokers"
    },
    {
        _id: 4,
        title: "Lenders / Financial Institutions",
        description: "We assist lenders with comprehensive commercial real estate analysis and market insights to support sound underwriting, risk management, and confident transaction decisions.",
        features: [
            "Preliminary Loan Sizing",
            "Full-Service Underwriting",
            "Asset Summary Reports",
            "Cash Flow Projections",
            "Collateral Valuations",
            "Cash Flow Modeling (ARGUS)"
        ],
        img: "lenders.svg",
        route: "leaders-financial-institutions"
    },
    {
        _id: 5,
        title: "Providers",
        description: "We assist lenders with comprehensive commercial real estate analysis and market insights to support sound underwriting, risk management, and confident transaction decisions.",
        features: [
            "Market Research & Analysis",
            "Investment Due Diligence",
            "Portfolio Analytics",
            "Valuation Support",
            "Risk Assessment",
            "Cash Flow Modeling (ARGUS)"
        ],
        img: "lenders.svg",
        route: "providers"
    },
    {
        _id: 6,
        title: "Asset Managers",
        description: "We offer strategic, data-backed insights that help asset managers optimize portfolio performance and maximize long-term value.",
        features: [
            "Preliminary Loan Sizing",
            "Full-Service Underwriting",
            "Asset Summary Reports",
            "Cash Flow Projections",
            "Collateral Valuations",
            "Cash Flow Modeling (ARGUS)"
        ],
        img: "lenders.svg",
        route: "asset-managers"
    },
    {
        _id: 7,
        title: "Miscellaneous",
        description: "We provide independent research, detailed market analysis, and asset-level insights to support accurate, timely, and consistent credit evaluations across real estate portfolios.",
        features: [
            "Preliminary Loan Sizing",
            "Full-Service Underwriting",
            "Asset Summary Reports",
            "Cash Flow Projections",
            "Collateral Valuations",
            "Cash Flow Modeling (ARGUS)"
        ],
        img: "lenders.svg",
        route: "miscellaneous"
    }
]
