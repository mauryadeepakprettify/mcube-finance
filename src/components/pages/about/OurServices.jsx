import CommonSlider from "@/components/molecules/CommonSlider";

const OurServices = () => {
  return (
    <section className="bg-beta py-8 lg:py-16">
      <div className="container">
        <CommonSlider data={data} title="Our Services" />
      </div>
    </section>
  );
};

export default OurServices;

const data = [
  {
    _id: 1,
    label: "Lenders / Financial Institutions",
    description:
      "Expert guidance for lenders and financial institutions across commercial real estate transactions.",
    img: "handshake.svg",
    route: "/leaders-financial-institutions",
  },
  {
    _id: 2,
    label: "Investors",
    description:
      "Strategic insights enabling investors to make informed and confident real estate decisions.",
    img: "hospital.svg",
    route: "/investors",
  },
  {
    _id: 3,
    label: "Brokers",
    description:
      "Strategic insights enabling investors to make informed and confident real estate decisions.",
    img: "hospital.svg",
    route: "/investors",
  },
  {
    _id: 4,
    label: "Investors",
    description:
      "Strategic insights enabling investors to make informed and confident real estate decisions.",
    img: "hospital.svg",
    route: "/investors",
  },
  {
    _id: 5,
    label: "Brokers",
    description:
      "Strategic insights enabling investors to make informed and confident real estate decisions.",
    img: "hospital.svg",
    route: "/investors",
  },
  {
    _id: 6,
    label: "Brokers",
    description:
      "Strategic insights enabling investors to make informed and confident real estate decisions.",
    img: "hospital.svg",
    route: "/investors",
  },
  {
    _id: 7,
    label: "Brokers",
    description:
      "Strategic insights enabling investors to make informed and confident real estate decisions.",
    img: "hospital.svg",
    route: "/investors",
  },
];
