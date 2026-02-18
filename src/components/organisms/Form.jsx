"use client";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import { useState } from "react";
import { enquireSchema } from "@/lib/validation";
import { successToast, errorToast } from "@/lib/toast";
import Button from "@/components/atoms/Button";
import Select from "@/components/atoms/Select";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
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

    try {
      enquireSchema.validateSync(formData, { abortEarly: true });
      successToast("Enquiry submitted successfully");
    } catch (error) {
      errorToast(error.message);
    }
  };

  return (
    <section className="bg-primary py-8 lg:py-16">
      <div className="container max-w-2xl!">
        <h2 className="mb-6 lg:mb-10 text-center text-[28px] leading-[36px] md:text-[36px] md:leading-[48px] lg:text-5xl lg:leading-[54px] text-white">
          Let’s Discuss Your Real Estate Needs
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
            label="Email*"
            name="email"
            type="email"
            id="email"
            variant="light"
            onChange={handleChange}
            value={formData.email}
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
          <Select
            label="Interested In*"
            name="interest"
            id="interest"
            variant="light"
            onChange={handleChange}
            value={formData.interest}
            options={["Lenders", "Borrowers", "Investors", "Others"]}
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

export default Form;
