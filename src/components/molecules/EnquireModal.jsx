"use client";
import CloseModal from "../atoms/CloseModal";
import { useSelector } from "react-redux";
import { errorToast, successToast } from "@/lib/toast";
import Image from "next/image";
import Textarea from "../atoms/Textarea";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useEffect, useState } from "react";
import { enquireSchema } from "@/lib/validation";
import Select from "../atoms/Select";

const EnquireModal = () => {
  const { isModal } = useSelector((state) => state.modal);

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

  useEffect(() => {
    if (isModal === null) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    }
  }, [isModal]);

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 z-40 w-full bg-white p-10 py-16 transition-all duration-500 ease-in-out lg:max-w-[420px] ${isModal === "enquire" ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex flex-col items-center">
        <h3 className="mb-2 text-center text-4xl">Enquire Now</h3>
        <p className="text-lambda/80 text-center leading-[20px]">
          Get expert guidance for your successful real estate journey.
        </p>
        <form
          className="mt-10 flex w-full flex-col items-center gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            label="Name*"
            name="name"
            type="text"
            id="name"
            onChange={handleChange}
            value={formData.name}
          />
          <Input
            label="Email*"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
          />
          <Input
            label="Phone*"
            name="phone"
            type="number"
            id="phone"
            onChange={handleChange}
            value={formData.phone}
          />
          <Select
            label="Interested In*"
            name="interest"
            id="interest"
            onChange={handleChange}
            value={formData.interest}
            options={["Lenders", "Borrowers", "Investors", "Others"]}
          />
          <Textarea
            label="Message*"
            name="message"
            id="message"
            onChange={handleChange}
            value={formData.message}
          />
          <Button className="w-fit" type="submit">
            Submit
          </Button>
        </form>
      </div>
      <Image
        className="absolute right-0 bottom-0"
        src="/icons/m.svg"
        alt="icon"
        width={246}
        height={272}
      />
      <CloseModal />
    </div>
  );
};

export default EnquireModal;
