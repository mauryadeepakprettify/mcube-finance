import CommonSlider from "@/components/molecules/CommonSlider";

const MoreProjects = () => {
  return (
    <section className="py-8 lg:py-16">
      <div className="container">
        <CommonSlider
          data={data}
          title="More Projects"
          breakpoints={{
            640: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 1.2,
            },
            1280: {
              slidesPerView: 1.8,
            },
          }}
        />
      </div>
    </section>
  );
};

export default MoreProjects;

const data = [
  {
    _id: "cmbs-balance-sheet-underwriting",
    title: "CMBS/Balance Sheet Underwriting",
    img: "management.svg",
    description:
      "A client turned to MCube to manage a 72 unit multifamily REO asset and reposition the property for future sale.",
  },
  {
    _id: "sizings-lease-abstraction",
    title: "Sizings/Lease Abstraction",
    img: "structure.svg",
    description:
      "Strategic consulting helping brokers strengthen deals and accelerate closings.",
  },
  {
    _id: "asset-management-loan-workouts",
    title: "Asset management/Loan Workouts",
    img: "management.svg",
    description:
      "Strategic consulting helping brokers strengthen deals and accelerate closings.",
  },
  {
    _id: "agency-underwriting",
    title: "Agency Underwriting",
    img: "structure.svg",
    description:
      "Strategic consulting helping brokers strengthen deals and accelerate closings.",
  },
];
