"use client";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import { useState } from "react";
import { applicationSchema, enquireSchema } from "@/lib/validation";
import { successToast, errorToast } from "@/lib/toast";
import Button from "@/components/atoms/Button";
import Select from "@/components/atoms/Select";
import FileInput from "@/components/atoms/FileInput";

const ApplicationForm = () => {
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
    <section id="application-form" className="bg-primary py-8 lg:py-16">
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
  );
};

export default ApplicationForm;
