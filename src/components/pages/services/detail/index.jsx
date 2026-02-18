import Form from "@/components/organisms/Form";
import Hero from "@/components/organisms/Hero";
import MoreServices from "./MoreServices";
import Article from "./Article";

const ServiceDetail = () => {
  const { title, description, img, content, features } = data;

  return (
    <>
      <Hero title={title} description={description} img={img} />
      <Article content={content} features={features} />
      <Form />
      <MoreServices />
    </>
  );
};

export default ServiceDetail;

const data = {
  title: "Brokers",
  description:
    "Strategic consulting helping brokers strengthen deals and accelerate closings.",
  img: "smile",
  content:
    "We support brokers with end-to-end analytical and documentation services that strengthen deal execution. From memorandums and cash flow modeling to valuations and abstracts, our insights help brokers present assets effectively, negotiate confidently, and close transactions efficiently.",
  features: [
    {
      _id: 1,
      name: "Offering Memorandums",
      description:
        "Clear summaries highlighting asset, financial, and investment details.",
    },
    {
      _id: 2,
      name: "Investment Memorandums",
      description:
        "Focused analysis of returns, risks, and investment strategy.",
    },
    {
      _id: 3,
      name: "Loan Sizing",
      description: "Determination of feasible loan amounts based on cash flow.",
    },
    {
      _id: 4,
      name: "Cash Flow Projections",
      description: "Forecasted income and expense analysis for assets.",
    },
    {
      _id: 5,
      name: "Collateral Valuations",
      description: "Market-based assessment of property value.",
    },
    {
      _id: 6,
      name: "ARGUS Cash Flow Modeling",
      description: "Property cash flow analysis using ARGUS.",
    },
    {
      _id: 7,
      name: "Lease Abstracts",
      description: "Key lease terms summarized clearly.",
    },
    {
      _id: 8,
      name: "Loan Abstracts",
      description: "Essential loan terms and covenants extracted.",
    },
    {
      _id: 9,
      name: "Service Contract Reviews",
      description: "Review of contracts for cost and risk insights.",
    },
  ],
};
