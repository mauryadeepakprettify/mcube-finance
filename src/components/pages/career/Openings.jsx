"use client";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import { useRef, useState } from "react";
import { applicationSchema, enquireSchema } from "@/lib/validation";
import { successToast, errorToast } from "@/lib/toast";
import Button from "@/components/atoms/Button";
import Select from "@/components/atoms/Select";
import FileInput from "@/components/atoms/FileInput";
import OpeningCard from "@/components/molecules/OpeningCard";

const Openings = () => {
  const applicationRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    jobCategory: "",
    resume: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      applicationSchema.validateSync(formData, { abortEarly: true });
      successToast("Enquiry submitted successfully");
    } catch (error) {
      errorToast(error.message);
    }
  };

  return (
    <>
      <section className="py-8 lg:py-16">
        <div className="container flex max-w-6xl! gap-28">
          <div className="flex-2">
            <h2 className="sticky text-[32px] leading-[40px] lg:top-60">
              Current Openings in India
            </h2>
          </div>
          <div className="flex-5">
            {data.map((item) => (
              <OpeningCard
                key={item._id}
                applicationRef={applicationRef}
                data={item}
              />
            ))}
          </div>
        </div>
      </section>

      <section ref={applicationRef} className="bg-primary py-8 lg:py-16">
        <div className="container max-w-2xl!">
          <h2 className="mb-10 text-center text-5xl leading-[54px] text-white">
            Interested in Joining us?{" "}
          </h2>
          <form onSubmit={handleSubmit} className="grid gap-8 md:grid-cols-2">
            <Input
              label="Name*"
              name="name"
              type="text"
              id="name"
              variant="light"
              onChange={handleChange}
              value={formData.name}
            />
            <Input
              label="Phone*"
              name="phone"
              type="number"
              id="phone"
              variant="light"
              onChange={handleChange}
              value={formData.phone}
            />
            <Input
              label="Email*"
              name="email"
              type="email"
              id="email"
              variant="light"
              onChange={handleChange}
              value={formData.email}
            />
            <Input
              label="Address*"
              name="address"
              type="text"
              id="address"
              variant="light"
              onChange={handleChange}
              value={formData.address}
            />
            <Select
              label="Select Job Category*"
              name="jobCategory"
              id="jobCategory"
              variant="light"
              onChange={handleChange}
              value={formData.jobCategory}
              options={["Senior Management", "Associate Management", "Others"]}
            />
            <FileInput
              label="Attach your CV*"
              name="resume"
              id="resume"
              variant="light"
              onChange={handleChange}
              value={formData.resume}
            />
            <Textarea
              className="md:col-span-2"
              label="Message*"
              name="message"
              id="message"
              variant="light"
              onChange={handleChange}
              value={formData.message}
            />
            <Button
              variant="white"
              className="mx-auto md:col-span-2"
              type="submit"
            >
              Enquire Now
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Openings;

const data = [
  {
    _id: 1,
    opening: "Senior Associate",
    location: "Sector 49, Gurugram",
    type: "Full Time (Work From Office)",
    details: `
            <h3>Roles & Responsibilities</h3>
            <ul>
            <li>Act as a lead analyst and independently execute projects for US / UK / Asia based investment banks, lenders, asset managers, hedge funds, large corporations and advisory firms.</li>
            <li>Understand scope of work and objectives based on client type and accordingly design work approach.</li>
            <li>Perform in-depth financial analysis and present them in a structured manner.</li>
            <li>Perform detailed financial modeling and valuation assignments.</li>
            <li>Maintain independent communication with clients and take them through various sections of the deliverable.</li>
            <li>Assist project leads in deciding timelines for assigned work.</li>
            <li>Aid in decision making related to client management.</li>
            <li>Conduct sanity checks based on knowledge and not only data.</li>
            <li>Identify risks/issues and escalate them to project leads.</li>
            </ul>
            <h3>Required Skills</h3>
            <h4>Technical Skills</h4>
            <ul>
            <li>Strong MS Office and Excel skills (Macros, VBA and advanced programming skills are a plus).</li>
            <li>Ability to interpret financial statements.</li>
            <li>Knowledge of financial modeling and valuation concepts.</li>
            <li>Understanding of CMBS markets and real estate property types.</li>
            <li>Experience using third-party reports and loan documents.</li>
            </ul>
            <h4>Other Skills</h4>
            <ul>
            <li>Excellent verbal and written communication skills.</li>
            <li>High attention to detail with minimal supervision.</li>
            <li>Strong analytical and problem-solving abilities.</li>
            <li>Efficient, quality-focused and client-oriented.</li>
            <li>Motivated team player with strong business acumen.</li>
            </ul>
            <h3>Work Experience</h3>
            <p>
            3–4 years of relevant US Commercial Real Estate experience in a KPO, Consulting Firm or Financial Services Company.
            Experience in underwriting, due diligence and investment analysis for commercial real estate.
            </p>
            <h3>Educational Qualification</h3>
            <p>Master’s or Post Graduate degree in Finance.</p>
  `,
  },
  {
    _id: 2,
    opening: "TL/AM/ Sr. Underwriter - CMBS / Agency (Multi-Family)",
    location: "Sector 49, Gurugram",
    type: "Full Time (Work From Office)",
    details: `
            <h3>Roles & Responsibilities</h3>
            <ul>
            <li>Act as a lead analyst and independently execute projects for US / UK / Asia based investment banks, lenders, asset managers, hedge funds, large corporations and advisory firms.</li>
            <li>Understand scope of work and objectives based on client type and accordingly design work approach.</li>
            <li>Perform in-depth financial analysis and present them in a structured manner.</li>
            <li>Perform detailed financial modeling and valuation assignments.</li>
            <li>Maintain independent communication with clients and take them through various sections of the deliverable.</li>
            <li>Assist project leads in deciding timelines for assigned work.</li>
            <li>Aid in decision making related to client management.</li>
            <li>Conduct sanity checks based on knowledge and not only data.</li>
            <li>Identify risks/issues and escalate them to project leads.</li>
            </ul>
  `,
  },
  {
    _id: 3,
    opening: "Analyst",
    location: "Sector 49, Gurugram",
    type: "Full Time (Work From Office)",
    details: `
            <h3>Roles & Responsibilities</h3>
            <ul>
            <li>Act as a lead analyst and independently execute projects for US / UK / Asia based investment banks, lenders, asset managers, hedge funds, large corporations and advisory firms.</li>
            <li>Understand scope of work and objectives based on client type and accordingly design work approach.</li>
            <li>Perform in-depth financial analysis and present them in a structured manner.</li>
            <li>Perform detailed financial modeling and valuation assignments.</li>
            <li>Maintain independent communication with clients and take them through various sections of the deliverable.</li>
            <li>Assist project leads in deciding timelines for assigned work.</li>
            <li>Aid in decision making related to client management.</li>
            <li>Conduct sanity checks based on knowledge and not only data.</li>
            <li>Identify risks/issues and escalate them to project leads.</li>
            </ul>
  `,
  },
];
